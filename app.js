let colors = [
    { number: 0, color: "#ff3333" },
    { number: 1, color: "#443006" },
    { number: 2, color: "#d0c71a" },
];

divs = [];

window.onload = function() {
    for (let i = 0; i < colors.length; i++) {
        let elem = document.createElement("div");
        elem.innerHTML = colors[i].number;
        elem.style.cssText =
            "line-height: 100px;vertical-align: 200px; middle;text-align:center;background-color:" +
            colors[i].color +
            ";";
        elem.addEventListener("click", function() {
            addOne(this);
        });
        document.body.appendChild(elem);
        divs.push(elem);

    }
};

function addOne(elem) {
    let newNum = parseInt(elem.textContent) + 1;
    if (newNum > colors.length -1 ) {
        newNum = 0;
    }
    elem.innerHTML = newNum;
}