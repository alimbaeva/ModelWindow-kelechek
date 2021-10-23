
const nav = this.document.querySelector('nav');
const linkItems = ['news', 'music', 'videos', 'photos', 'events'];
const ul = this.document.createElement('ul');
for (let i = 0; i < linkItems.length; i++) {

    let a = this.document.createElement('a');
    a.append(linkItems[i]);
    let li = this.document.createElement('li');
    li.setAttribute('onclick', 'clickFan');
    li.appendChild(a);
    ul.appendChild(li);
}
nav.append(ul);

class Mouse {
    constructor(elem, color1, color2) {
        this.elem = elem;
        this.color1 = color1;
        this.color2 = color2;
    }

    syyles() {
        let btnStyle = document.querySelector(`${this.elem}`);
        btnStyle.style.cssText = `
            background-color: ${this.color1};
            color: ${this.color2};
            `
    }
}

function mouseOut() {
    let stil = new Mouse('.texts__btn', 'red', 'white');
    stil.syyles();
}

function mouLeave() {
    let stil = new Mouse('.texts__btn', 'white', 'red');
    stil.syyles();
}

function mouseOut2() {
    let stil = new Mouse('.modalWindow__btn', 'red', 'white');
    stil.syyles();
}

function mouLeave2() {
    let stil = new Mouse('.modalWindow__btn', 'white', 'red');
    stil.syyles();
}
function mouseOut3() {
    let stil = new Mouse('.modal-close ', 'red', '');
    stil.syyles();
}

function mouLeave3() {
    let stil = new Mouse('.modal-close ', 'white', '');
    stil.syyles();
}

function funClick() {
    let overlayn = document.querySelector('.overlay');
    overlayn.style.display = 'block';
    let nones = document.querySelector('.modal');
    nones.style.display = 'block';

}
function funClose() {
    let overlayn = document.querySelector('.overlay');
    overlayn.style.display = 'none';
    let nones = document.querySelector('.modal');
    nones.style.display = 'none';
}


const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
})

console.log(linkItems.length);

