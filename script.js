var submitButton = document.getElementById("submitbtn")



function submit(e) {
    e.preventDefault()
    alert("Form Submited")
    window.location.href = "./index.html";
}


submitButton.addEventListener('click', submit)