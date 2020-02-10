


// simple validation 

window.addEventListener('DOMContentLoaded', function () {

    let name = document.getElementById("name");
    let lastname = document.getElementById("lastname");
    let email = document.getElementById("email");
    let phoneumber = document.getElementById("phoneumber");


    let checkBoxOne = document.getElementById("checkboxOne");
    let checkBoxTwo = document.getElementById("checkboxTwo");


    sendBtn.addEventListener("click", (e) => {


        function validateForm() {
            if (name.value == "") {
                alert("Name must be filled out");

            }

            if (lastname.value == "") {
                alert("Last Name must be filled out");

            }

            if (email.value == "") {
                alert("Email must be filled out");

            }

            if (phoneumber.value == "") {
                alert("Phone number must be filled out");

            }

            if (name.value == "" || lastname.value == "" || email.value == "" || phoneumber.value == "") {
                e.preventDefault()
            }

            if (checkBoxOne.checked != true || checkBoxTwo.checked != true) {
                alert(" you do not agree with the rules (checkbox)")
                e.preventDefault()
            }
        }
        validateForm()

    })
})










