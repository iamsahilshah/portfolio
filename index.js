let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
} 

// contact
// const form = document.querySelector("form");

// function sendEmail() {
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "mrtech383@gmail.com",
//         Password : "84351A209DE564D55405CDD99899C78835B7",
//         To : 'mrtech383@gmail.com',
//         From : "mrtech383@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     sendEmail();
// });