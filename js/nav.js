// on click, scroll to the top of the document
function nav(to) {
    let pageToShow = document.getElementById(to);

    let pages = document.getElementsByTagName('main');
    for (const page of pages) {
        if (!page.classList.contains('hidden')) {
            page.classList.toggle('hidden');
            break;
        }
    }
    pageToShow.classList.remove('hidden');
}

// PAS BIEN !
// }function nav(to) {
//     let pageToHide;
//     let pageToShow = document.getElementById(to);
//
//     let pages = document.getElementsByTagName('main');
//     for (const page of pages) {
//         if (page.style.display !== "none") {
//             page.style.display = "none";
//         }
//     }
//     pageToShow.style.display = "inline-block";
// }

