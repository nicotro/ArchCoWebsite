

// When the user scrolls down 720px from the top of the document,
// show the button (720px = header height)
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    //Get the button:
    let myButton = document.getElementById("footer_topbutton");

    if (document.body.scrollTop > 720 || document.documentElement.scrollTop > 720) {
        myButton.classList.add('show');
    } else {
        myButton.classList.remove('show');
    }
}

// on click, scroll to the top of the document
function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}