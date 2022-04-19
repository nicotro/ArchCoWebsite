function tableContent()
{
    const MY_DATA = document.getElementById('main_data');
    const MY_TABLE = MY_DATA.getElementsByTagName('table')[0];

    fetch('json/main-articles.json')
        .then(function (r) {
            return r.text();
        })
        .then(function (data) {
            const JSON_OBJECT = JSON.parse(data);
            JSON_OBJECT.forEach(element => {
                // new table line
                const MY_TR = document.createElement('tr');
                MY_TABLE.appendChild(MY_TR);
                // title
                const MY_TD_TITLE = document.createElement('td');
                MY_TD_TITLE.innerText = element.title;
                MY_TR.appendChild(MY_TD_TITLE);

                const ALL_CATEGORIES = ["building", "house", "interior", "design"];
                const CURRENT_ELEMENT_CATEGORIES = element.categories;
                let status = '';
                for (let i = 0; i < ALL_CATEGORIES.length; i++) {
                    CURRENT_ELEMENT_CATEGORIES.includes(ALL_CATEGORIES[i]) ? status = "check" : status = "clear";
                    const MY_TD = document.createElement('td');
                    MY_TD.innerHTML = `<p><span class="material-icons ${status}">${status}</span></p>`;
                    MY_TR.appendChild(MY_TD);
                }
            });
        });
    ;
}
