"use strict";

window.addEventListener("load", initApp);

function initApp() {
    // Event Listeners
    document.querySelector("#form-create").addEventListener("submit", createUser);
}

function createUser(event) {
    event.preventDefault();

    const name = this.name.value;
    const userName = this.userName.value;
    const age = this.age.value;
    const title = this.title.value;
    const mail = this.mail.value;
    const image = this.image.value;


    console.log(name);
    console.log(userName);
    console.log(age);
    console.log(title);
    console.log(mail);
    console.log(image);

    // validate user info
console.log(validateUser(name, userName, age, title, mail, image))

}

function validateUser(name, userName, age, title, mail, image) {
    if (name.length > 2 && title !==" " && (userName !==" " ||  mail !== " ") && age >= 18 && image !==" ") {
        return true;
        
    }
    else {
        return false;
    }

    let validation = validateUser ()
}

function displayValidation() {
    validation
}