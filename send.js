const form = document.querySelector("form");
const fullName = document.getElementById("name");
const  email = document.getElementById("email");
const phone =  document.getElementById("phone");
const subject  = document.getElementById("subject") ;
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jparedesm0512@gmail.com",
        Password : "49D3D4D9E88782B6A1267386DDD9E1A772DA",
        To : 'jparedesm0512@gmail.com',
        From : "jparedesm0512@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});