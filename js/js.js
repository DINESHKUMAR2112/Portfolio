const nameText = "Dinesh Kumar - Java Full Stack Developer";
const typedSpan = document.getElementById("typed-name");
let index = 0;

function typeLetter() {
  if (index < nameText.length) {
    typedSpan.innerHTML += nameText.charAt(index);
    index++;
    setTimeout(typeLetter, 100); // speed of typing
  }
}

window.onload = typeLetter;


(function() {
    emailjs.init("AV88hjY-KuvPgxeaH");
  })();

  function emailsend(e) {
    e.preventDefault();

    emailjs.sendForm("service_mdpkoj1", "template_zbi5fly", "#contact")
      .then(function(response) {
        alert("Your message has been sent successfully!");
        document.getElementById("contact").reset();
      }, function(error) {
        alert("Oops! Something went wrong. Please try again.");
        console.log(error);
      });
  }