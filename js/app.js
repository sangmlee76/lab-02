'use strict';

const hornedAnimalsArray = [];

// TODO: define constructor
function HornedAnimal(jsonObject){
  this.image_url = jsonObject.image_url;
  this.title = jsonObject.title;
  this.description = jsonObject.description;
  this.keyword = jsonObject.keyword;
  this.horns = jsonObject.horns;
}


// TODO: define prototype render method
HornedAnimal.prototype.render = function(){
  // TODO: Use jQuery to make a copy of the HTML template of the photo component.
  const $newHornedAnimalDiv = $('#photo-template').clone();
  
  // TODO: assign each property of the object instance with the json values 
  $newHornedAnimalDiv.find('h2').text(this.title);
  $newHornedAnimalDiv.find('img').attr('src', this.image_url);
  $newHornedAnimalDiv.find('p').text(this.description);
  $newHornedAnimalDiv.removeAttr('id')
  
  // TODO: update the DOM with the new horned animal object
  $('#hornsEverywhere').append($newHornedAnimalDiv);

}

// TODO: build image filter using drop down menu

  // TODO: build a form with a drop down menu using the keywords from the json data

  // TODO: create an event handler

  // TODO: create an event listener


// TODO: use $.ajax to get json files 
// TODO: Note to SELF(Ask a TA): what is the second paramater 'json' in reference to?
$.ajax('https://codefellows.github.io/code-301-guide/curriculum/class-02/lab/starter-code/page-1.json', 'json').then(retrievedJSONAnimalData => {

  // TODO: push each json object through the constructor function to build new HornedAnimal object instance
  retrievedJSONAnimalData.forEach(hornedAnimalJSONObject => hornedAnimalsArray.push(new HornedAnimal(hornedAnimalJSONObject)));
}).then(() => {
  // TODO: call the render function to render the image 
  hornedAnimalsArray.forEach(hornedAnimal => hornedAnimal.render());

})
