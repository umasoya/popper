// handler function
function selectedHandler(e) {
    if (!e.shiftKey) {
        let selected = document.getSelection().toString ();
        if (selected.length > 0) {
            doPopup(selected);
        }
    }
}

// Event Listener
document.onkeyup = selectedHandler;
document.onmouseup = selectedHandler;

function doPopup(selected) {
    console.log(selected);
}
