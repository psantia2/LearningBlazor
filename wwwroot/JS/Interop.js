function showAlert(message)
{
    alert(message);
}
function showModal(toggleOn) {
    var myModal = new bootstrap.Modal(document.getElementById(toggleOn))
    myModal.show();
}

function hideModal(toggleOff) {
    var myModal = new bootstrap.Modal(document.getElementById(toggleOff))
    myModal.hide();
}