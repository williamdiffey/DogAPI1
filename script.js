'use strict';

function eventListener() {
  $('#dog-form').on('submit', function(event) {
    $('.dog-image-results').empty();
    event.preventDefault();
    let dogInput = $('#dog-input').val();
    getInput(dogInput);
  });
}

function getInput(dogInput) {
    if (dogInput.length === 0) {
      let userInput = 3;
      pullDogImages(userInput);
   } else if (dogInput > 50) {
      alert('Less than 50 dogs pictures please');
    
    } else if (dogInput < 1 ) {
      alert('Please pick a positive number');
    
    } else {
      
      let userInput = dogInput;
      pullDogImages(userInput);
    }
  
  }

function pullDogImages(userInput) {
  fetch(`https://dog.ceo/api/breeds/image/random/${userInput}`)
    .then(response => response.json())

    .then(responseJson => 
 
         showDogs(responseJson))
    .catch(error => alert('Something went wrong'));
}

function showDogs(finalPulledDogImages) {
    for (var i = 0; i < finalPulledDogImages.message.length; i++) {
      $('.dog-image-results').append(`<img src="${finalPulledDogImages.message[i]}">`);
    };
}

$(function() {
  eventListener();
}
);