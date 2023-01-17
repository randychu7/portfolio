"use strict";

// IFFE
(() => {
$(document).ready(function() {

//---------------------Parallax----------------------------//

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".person", 10, { y: -300 })
  .to(".mountain", 10, { y: -200 }, "-=10")
  .fromTo(".background", { y: -50 }, { y: 0, duration: 10 }, "-=10")
  .to(".content", 10, { top: "0%" }, "-=10")
  .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 4 })
  .fromTo(".expertise-box", { opacity: 0 }, { opacity: 1, duration: 4 })
  .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 4 });
  

timeline
 .to(".person", 10, { y: -300 })

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("section")
  .addTo(controller);


window.addEventListener("scroll",function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);})

//------------------------------------------------------//

let projects = [
  {id: 1, imgSrc: 'images/coffee-project.jpg',title: 'Coffee Project', demolink: "#", codelink: "#", body: 'This project is a JavaScript program that creates a coffee table and allows for filtering and searching of the coffee data. The program begins by declaring variables for several HTML elements on the page, including a table body, a submit button, a roast selection dropdown, and a coffee search input field. The program also declares an array of coffee objects, each with an id, name, and roast property.'},
  {id: 2, imgSrc: 'images/coffee-project.jpg',title: 'Coffee Project', demolink: "#", codelink: "#", body: 'This project is a JavaScript program that creates a coffee table and allows for filtering and searching of the coffee data. The program begins by declaring variables for several HTML elements on the page, including a table body, a submit button, a roast selection dropdown, and a coffee search input field. The program also declares an array of coffee objects, each with an id, name, and roast property.'},
  {id: 3, imgSrc: 'images/coffee-project.jpg',title: 'Coffee Project', demolink: "#", codelink: "#", body: 'This project is a JavaScript program that creates a coffee table and allows for filtering and searching of the coffee data. The program begins by declaring variables for several HTML elements on the page, including a table body, a submit button, a roast selection dropdown, and a coffee search input field. The program also declares an array of coffee objects, each with an id, name, and roast property.'},
  {id: 4, imgSrc: 'images/coffee-project.jpg',title: 'Coffee Project', demolink: "#", codelink: "#", body: 'This project is a JavaScript program that creates a coffee table and allows for filtering and searching of the coffee data. The program begins by declaring variables for several HTML elements on the page, including a table body, a submit button, a roast selection dropdown, and a coffee search input field. The program also declares an array of coffee objects, each with an id, name, and roast property.'},
  {id: 5, imgSrc: 'images/coffee-project.jpg',title: 'Coffee Project', demolink: "#", codelink: "#", body: 'This project is a JavaScript program that creates a coffee table and allows for filtering and searching of the coffee data. The program begins by declaring variables for several HTML elements on the page, including a table body, a submit button, a roast selection dropdown, and a coffee search input field. The program also declares an array of coffee objects, each with an id, name, and roast property.'},
  {id: 6, imgSrc: 'images/coffee-project.jpg',title: 'Coffee Project', demolink: "#", codelink: "#", body: 'This project is a JavaScript program that creates a coffee table and allows for filtering and searching of the coffee data. The program begins by declaring variables for several HTML elements on the page, including a table body, a submit button, a roast selection dropdown, and a coffee search input field. The program also declares an array of coffee objects, each with an id, name, and roast property.'}
];

let $contentButton = $("#content-nav").find("li > button");

$contentButton.on('click', function () {;
   $contentButton.removeClass('clicked')
   $(this).addClass('clicked');
});



// Function makes it so that it clears every time it is appended to HTML//
$('#web-dev').on('click', function(){
  var html = '';
  $('#content-area').empty();
  for(var i = 0; i < projects.length; i++) {
      html += renderCard(projects[i]);  
  }
  $('#content-area').append(html);
});

function renderCard(project) {
  var html = '<div class="card project-image col-xxl-6 d-flex" style="width: 40rem; height: 35rem;">';
  html += '<img src="'+ project.imgSrc +'" class="card-img-top" alt="projects">';
  html += '<div class="card-body project-text">';
  html += '<h5 class="card-title project-title">' + project.title + '</h5>';
  html += '<p class="card-text project-body">' + project.body + '</p>';
  html += '<a href="'+ project.demolink + 'class="btn btn-primary">Demo</a>';
  html += '<a href="'+ project.codelink+'" class="btn btn-primary">Code</a>';
  html += '</div>';
  html += '</div>';
  return html;
}





});
})();