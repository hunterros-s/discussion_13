window.addEventListener("load", function() {
    this.document.querySelector("h1").classList.add("heading")
})

document.addEventListener("dblclick", function() {
    alert(new Date().toString());
})

document.getElementById("toggle").addEventListener("change", function() {
    let email = document.getElementById("emailBox")
    if (this.checked) {
        email.classList.remove("hidden")
    } else {
        email.classList.add("hidden")
    }
});