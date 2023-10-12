//our main aim is to open modal function on clicking share my profile button...
//How to achieve this...
// Approach is that initially our modal div is set to scale 0 so that it is not visible
// And on clicking share my profile button we add a class in our modal div and that class has scale:1
// So as soon as scale is equal to 1 modal div is visible..
// and also the overlay a blur effect is visible initially overlay opacity and other properties are 0
// As soon as clicking close and outer part other than card overlayactive class is added in the div of
//overlay class which has opacity=1 making that effect visible

//Steps to do this:
//1.Get the div of modal class using queryselector and div of overlay class
//2.then openmodal function first add the active class in the div having modal class
//3. modal.classList.add("active");
//4.then  add the overlayactive class in the div having overlay class
//5. overlay.classList.add("overlayactive");

//NOW moving to closemodal function
//simply remove the active class and overlayactive class from the classlist of modal and overlay div
//modal.classList.remove("active");
//overlay.classList.remove("overlayactive");


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

//open modal function

const openmodal = () => {
    console.log('Modal is active')
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};
  //VVI read classlist and add and remove method of classlist
// let classes= modal.classList;// from Mdn to understand classlist and add method of classlist
// modal.textContent = classes;
// Close modal function

const closemodal = () => {
    console.log('modal is closed');
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};