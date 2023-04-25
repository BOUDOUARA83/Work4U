function cancelEdit() {
    window.history.back();
}

document.getElementById("confirm-btn").addEventListener("click", function() {

    var updateMessage = document.getElementById("update-message");

    updateMessage.textContent = "Information has been updated!";

    updateMessage.classList.add("update-message");

});