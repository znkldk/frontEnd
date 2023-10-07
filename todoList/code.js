let a = document.querySelector("ul")

var button = document.getElementById("add")
button.addEventListener("click", e => {

    var textBox = document.querySelector("input")
    var newli = document.createElement("li")
    var newBtn = document.createElement("button")
    newBtn.textContent = "Delete";
    newBtn.classList.add("sağa-dayalı-buton");
    var validText = true
    if (textBox.value === "") {
        validText = false
    } else {
        var secenekler = document.querySelectorAll("li");

        secenekler.forEach(secenek => {
            if (secenek.textContent.trim().replace("Delete", "") === textBox.value) {
                validText = false
            }
        })
    }
    if (!validText) {
        return
    }
    newli.textContent = textBox.value
    newli.appendChild(newBtn)
    a.appendChild(newli)

    var deleteButtons = document.getElementsByClassName("sağa-dayalı-buton")
    deleteButtons = Array.from(deleteButtons)
    deleteButtons.forEach(deleteBtn => {
        deleteBtn.addEventListener("click", e => {
            deleteBtn.parentElement.remove();
        })



    });
    textBox.value = ""

})


