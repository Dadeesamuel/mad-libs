// users logic

let userValue = function () {
  let person1 = document.getElementById('person1Input').value;
  let person2 = document.getElementById('person2Input').value;
  let animal = document.getElementById('animalInput').value;
  let verb = document.getElementById('verbInput').value;
  let noun = document.getElementById('nounInput').value;
  let exclamation = document.getElementById('exclamationInput').value;

  // then we print values to the story area;
  // we're hardcoding these values for now
  document.querySelector("span#person1a").innerText = person1;
  document.querySelector("span#person1b").innerText = person1;
  document.querySelector("span#person1c").innerText = person1;
  document.querySelector("span#person2a").innerText = person2;
  document.querySelector("span#person2b").innerText = person2;
  document.querySelector("span#animal").innerText = animal;
  document.querySelector("span#verb").innerText = verb;
  document.querySelector("span#noun").innerText = noun;
  document.querySelector("span#exclamation").innerText = exclamation;


}



// business logic


window.onload = function () {
  // first we set up an event handler for the form submission
  let form = document.querySelector("form");
  form.onsubmit = function (event) {
    userValue();
    // then we show the story by removing the class attribute
    document.querySelector("div#story").removeAttribute("class");


    // document.querySelector(".form-control").remove("class"); //To hide the form

    // we prevent the default refresh action for the submit event
    event.preventDefault();
  };

};
  

        //  CODE FOR MIXED LOGIC
// window.onload = function () {
//   // first we set up an event handler for the form submission  *
//   let form = document.querySelector("form");
//     form.onsubmit = function (event) {

//         let person1 = document.getElementById('person1Input').value;
//         let person2 = document.getElementById('person2Input').value;
//         let animal = document.getElementById('animalInput').value;
//         let verb = document.getElementById('verbInput').value;
//         let noun = document.getElementById('nounInput').value;
//         let exclamation = document.getElementById('exclamationInput').value;
//     // then we print values to the story area; *
//     // we're hardcoding these values for now  *
//     document.querySelector("span#person1a").innerText = person1;
//     document.querySelector("span#person1b").innerText = person1;
//     document.querySelector("span#person1c").innerText = person1;
//     document.querySelector("span#person2a").innerText = person2;
//     document.querySelector("span#person2b").innerText = person2;
//     document.querySelector("span#animal").innerText = animal;
//     document.querySelector("span#verb").innerText = verb;
//     document.querySelector("span#noun").innerText = noun;
//     document.querySelector("span#exclamation").innerText = exclamation;

//     // then we show the story by removing the class attribute  *
//         document.querySelector("div#story").removeAttribute("class");

      
//         // document.querySelector(".form-control").remove("class"); //To hide the form  *
      
//       // we prevent the default refresh action for the submit event  *
//       event.preventDefault();
//   };
// };