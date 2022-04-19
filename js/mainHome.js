function displayArticles() {
    // articles parent = 1st main_home div
    const MY_DIV = document.getElementById('main_home').getElementsByTagName('div')[0];

    fetch('json/main-articles.json')
        .then(function (r) {
            return r.text();
        })
        .then(function (data) {
            const JSON_OBJECT = JSON.parse(data);
            JSON_OBJECT.forEach(element => {
                // new article
                const MY_ARTICLE = document.createElement('article');
                MY_DIV.appendChild(MY_ARTICLE);

                // article tags (<h3>) & class preparation
                let tags = '';
                let fullClass = 'col-4 content show';
                element.categories.forEach((categorie) => {
                    tags += `<h3>${categorie}</h3>${'\n'}`;
                    fullClass += ` ${categorie}`;
                });

                // full article content
                let articleHtml = `<img src="${element.picture}" `;
                articleHtml += `alt="${element.alt}"/>`;
                articleHtml += tags;
                articleHtml += `<h4>${element.title}</h4>`;
                articleHtml += `<p>${element.text}</p>`;
                articleHtml += `<span><a href="${element.link}">${element.action}</a></span>`;

                MY_ARTICLE.className = fullClass;
                MY_ARTICLE.innerHTML = articleHtml;
            });
        });
    ;
}

function filterSelection(filter) {
    let articles = document.getElementsByClassName("content");
    // Add the "show" class to the filtered elements
    // Remove the "show" class from the elements that are not selected
    for (const article of articles) {
        article.classList.remove("show");
        if (article.classList.contains(filter) || filter === "all") {
            article.classList.add("show");
        }
    }

    let buttons = Array.from(document.getElementById('btnBar').children);
    buttons.pop(); //remove the hr element after the buttons !
    for (const button of buttons) {
        // remove active class
        button.classList.remove("active");
        // add active class to selected button
        if (button.outerText === filter) {
            button.classList.add('active');
        }
    }

}



