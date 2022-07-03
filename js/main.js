let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let tel = document.getElementById("tel")
let password = document.getElementById("password")
let button = document.getElementById("button")
let starwars=document.getElementById("starwars")
let wrapper=document.getElementById("wrapper")

button.addEventListener("click", buttonForm)


//object for flags
let flags = {
    flag1: true,
    flag2: true,
    flag3: true,
    flag4: true,
    flag5: true,
}


//maim function
function buttonForm() {

    lastNameF()
    firstNameF()
    emailF()
    passwordF()
    telF()

    if (/[A-Z |a-z|^0-9]/.test(firstName.value) && /[A-Z |a-z|^0-9]/.test(lastName.value) && /[A-Z|a-z]/.test(lastName.value) &&
        /[A-Z |a-z]|@/.test(email.value) && firstName.value.length <= 20 && lastName.value.length <= 20 &&
        /@/.test(email.value) && /[0-9]/.test(tel.value) && tel.value.length == 18 && password.value.length >= 8 &&
        password.value.length <= 16 && /[A-Z |a-z|0-9]/.test(password.value))

    {
        starwars.style="display:block"
        wrapper.style="display:none"
    
    }
}


//functions onButtonClick
function firstNameF() {
    if (flags.flag1 == true) {
        if (!/[A-Z |a-z]/.test(firstName.value) || / /.test(firstName.value) || firstName.value.length > 20 || /[0-9]/.test(firstName.value)) {
            firstName.classList.add("red")
            firstName.nextElementSibling.style = "display:block"
            firstName.value = ""
        } else {
            firstName.classList.remove("red")
            firstName.classList.add("green")
            firstName.nextElementSibling.style = "display:none"
            flags.flag1 = false
        }
    }
}

function lastNameF() {
    if (flags.flag2 == true) {
        if (!/[A-Z|a-z]/.test(lastName.value) || lastName.value.length >= 20 ||
            /[0-9]/.test(lastName.value) || / /.test(lastName.value)) {
            lastName.classList.add("red")
            lastName.nextElementSibling.style = "display:block"
            lastName.value = ""
        } else {
            lastName.classList.add("green")
            lastName.classList.remove("red")
            lastName.nextElementSibling.style = "display:none"
            flags.flag2 = false
        }
    } else return
}

function emailF() {
    if (flags.flag3 == true) {
        if (!/[A-Z |a-z]/.test(email.value) || !/@/.test(email.value)) {
            email.classList.add("red")
            email.nextElementSibling.style = "display:block"
            email.value = ""
        } else {
            email.classList.remove("red")
            email.classList.add("green")
            email.nextElementSibling.style = "display:none"
            flags.flag3 = false
        }
    }
}

function passwordF() {
    if (flags.flag4 == true) {
        if (password.value.length < 8 ||
            password.value.length > 16 || !/[A-Z |a-z|0-9]/.test(password.value)) {
            password.classList.add("red")
            password.nextElementSibling.style = "display:block"
            password.value = ""
        } else {
            password.classList.add("green")
            password.classList.remove("red")
            password.nextElementSibling.style = "display:none"
            flags.flag4 = false
        }
    }
}

function telF() {
    if (flags.flag5 == true) {
        if (!/[0-9]/.test(tel.value) || tel.value.length !== 18) {
            tel.nextElementSibling.style = "display:block"
            tel.classList.add("red")
            tel.value = ""
        } else {
            tel.classList.add("green")
            tel.classList.remove("red")
            tel.nextElementSibling.style = "display:none"
            flags.flag5 = false
        }
    }
}







// клік не по елементу
document.onclick = function (e) {
    if (e.target.id !== "firstName") {
        console.log(e.target)
    }
};


///маска телефону
window.addEventListener("DOMContentLoaded", function () {
    [].forEach.call(document.querySelectorAll('#tel'), function (input) {
        var keyCode;

        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+38(___) ___ __ __",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)

    });

});






//


var byline = document.getElementById('byline');   // Find the H2
bylineText = byline.innerHTML;                    // Get the content of the H2
bylineArr = bylineText.split('');                 // Split content into array
byline.innerHTML = '';                            // Empty current content

var span;         // Create variables to create elements
var letter;

for(i=0;i<bylineArr.length;i++){                  // Loop for every letter
  span = document.createElement("span");          // Create a <span> element
  letter = document.createTextNode(bylineArr[i]); // Create the letter
  if(bylineArr[i] == ' ') {                       // If the letter is a space...
    byline.appendChild(letter);         // ...Add the space without a span
  } else {
    span.appendChild(letter);           // Add the letter to the span
    byline.appendChild(span);           // Add the span to the h2
  }
}