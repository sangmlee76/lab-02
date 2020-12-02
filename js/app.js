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
HornedAnimal.prototype.render = function(dropDownSelection = ''){
  
  // NOTE: this filter logic was fixed based on assistance from in-class code-review demo (demo used Alan, Nick A, and Seid's code)
  if (this.keyword === dropDownSelection || !dropDownSelection || dropDownSelection === 'default') {
    // Use jQuery to make a copy of the HTML template of the photo component.
    const $newHornedAnimalDiv = $('#photo-template').clone();
    
    // assign each property of the object instance with the json values 
    $newHornedAnimalDiv.find('h2').text(this.title);
    $newHornedAnimalDiv.find('img').attr('src', this.image_url);
    $newHornedAnimalDiv.find('img').attr('alt', this.keyword);
    $newHornedAnimalDiv.find('p').text(this.description);
    //remove the id attribute from the template so that it no longer shows up in future queries now that it has been modified and is no longer a template at this point
    $newHornedAnimalDiv.removeAttr('id')
    
      // update the DOM with the new horned animal object
    $('#container').append($newHornedAnimalDiv);
  }
}

// build image filter using drop down menu using an event listener and handler -- ** STUCK ON THIS **
$('.animal-select').on('change', e => {
  $('#container').empty();
  console.log(e.target.value);
  const selectedAnimal = e.target.value;
  hornedAnimalsArray.forEach(hornedAnimal => hornedAnimal.render(selectedAnimal));
});

// use $.ajax to get json files 
// TODO: SELF(Ask a TA): what is the second paramater 'json' in reference to?
$.ajax('https://codefellows.github.io/code-301-guide/curriculum/class-02/lab/starter-code/page-1.json', 'json')
  
  // push each json object through the constructor function to build new HornedAnimal object instance
  .then(retrievedJSONAnimalData => { 
    retrievedJSONAnimalData.forEach(hornedAnimalJSONObject => hornedAnimalsArray.push(new HornedAnimal(hornedAnimalJSONObject)));
  
  // call the render function to render the image 
  }).then(() => { 
    hornedAnimalsArray.forEach(hornedAnimal => hornedAnimal.render());
})
