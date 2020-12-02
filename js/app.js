'use strict';

const hornedAnimalsArray = [];

// define constructor
function HornedAnimal(jsonObject){
  this.image_url = jsonObject.image_url;
  this.title = jsonObject.title;
  this.description = jsonObject.description;
  this.keyword = jsonObject.keyword;
  this.horns = jsonObject.horns;
}


// define prototype render method
HornedAnimal.prototype.render = function(){
  // Use jQuery to make a copy of the HTML template of the photo component.
  const $newHornedAnimalDiv = $('#photo-template').clone();
  
  // assign each property of the object instance with the json values 
  $newHornedAnimalDiv.find('h2').text(this.title);
  $newHornedAnimalDiv.find('img').attr('src', this.image_url);
  $newHornedAnimalDiv.find('img').attr('alt', this.keyword);
  $newHornedAnimalDiv.find('p').text(this.description);
  $newHornedAnimalDiv.removeAttr('id')
  
  // update the DOM with the new horned animal object
  $('#container').append($newHornedAnimalDiv);
}

// TODO: build image filter using drop down menu using an event listener and handler -- ** STUCK ON THIS **
$('.animal-select').on('change', e => {
  e.preventDefault();
  console.log(e.target.value);
  const selectedAnimal = e.target.value;
  for (let i=0; i < hornedAnimalsArray.length; i++){
    // console.log(hornedAnimalsArray[i].keyword);
    if (selectedAnimal === hornedAnimalsArray[i].keyword){
      console.log(hornedAnimalsArray[i].keyword);
      //TODO: render only the animals from the array that have the matching keyword attribute 

    }
  }
});




// use $.ajax to get json files 
// TODO: SELF(Ask a TA): what is the second paramater 'json' in reference to?
$.ajax('https://codefellows.github.io/code-301-guide/curriculum/class-02/lab/starter-code/page-1.json', 'json').then(retrievedJSONAnimalData => {

  // push each json object through the constructor function to build new HornedAnimal object instance
  retrievedJSONAnimalData.forEach(hornedAnimalJSONObject => hornedAnimalsArray.push(new HornedAnimal(hornedAnimalJSONObject)));
}).then(() => {
  // call the render function to render the image 
  hornedAnimalsArray.forEach(hornedAnimal => hornedAnimal.render());

})
