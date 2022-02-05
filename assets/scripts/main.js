function renderMenu() {
    let menuListItem = [{
            text: "Overview",
            target: "#overview",
            icon: "icon-coffee",
        },
        {
            text: "Feature",
            target: "#feature",
            icon: "icon-puzzle-piece",
        },
        {
            text: "Team",
            target: "#team",
            icon: "icon-group",
        },
    ];

    let menuList = document.querySelector("#menu-list");
    menuList.innerHTML = "";

    for (let menu of menuListItem) {
        let span = document.createElement("span");
        span.innerHTML =
            "<a href='" +
            menu.target +
            "'><li><i class='" +
            menu.icon +
            "'></i> " +
            menu.text +
            "</li></a>";

        menuList.appendChild(span);
    }
}

renderMenu();