const horizontalnav = (myclass, mylist) => {
    let string = "";
    for(let i of mylist) {
        string +=  `<li><a href="#">${i}</a></li>`;
    }

    return `<nav><ul class="horizontal-nav ${myclass}">${string}</ul></nav>`;
}

module.exports = horizontalnav;