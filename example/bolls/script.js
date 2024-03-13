let bg = document.getElementById('bg');
let shadow_left = document.getElementById('shadow_left');
let shadow_right = document.getElementById('shadow_right');
let ayat = document.getElementById('ayat');
let bottom = document.getElementById('bottom');
let atas = document.getElementById('atas');
let kiri = document.getElementById('kiri');
let kanan = document.getElementById('kanan');
let lamp = document.getElementById('lamp');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Adjust the parallax effect for each image
    // bg.style.bottom = value * 0.5 + 'px'; // Adjust the multiplier as needed
    ayat.style.marginTop = value * 0.7 + 'px'; // Adjust the multiplier as needed
    // atas.style.top = value * -0.3 + 'px'; // Adjust the multiplier as needed
    bottom.style.top = value * 0.3 + 'px'; // Adjust the multiplier as needed
    kiri.style.left = value * -0.4 + 'px'; // Adjust the multiplier as needed
    shadow_left.style.left = value * -0.4 + 'px'; // Adjust the multiplier as needed
    kanan.style.left = value * 0.4 + 'px'; // Adjust the multiplier as needed
    shadow_right.style.left = value * 0.4 + 'px'; // Adjust the multiplier as needed
    // lamp.style.top = value * 0.6 + 'px'; // Adjust the multiplier as needed
});

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
    const element = document.getElementById(id),
        text = element.innerText.split("");

    element.innerText = "";

    text.forEach((value, index) => {
        const outer = document.createElement("span");

        outer.className = "outer";

        const inner = document.createElement("span");

        inner.className = "inner";

        inner.style.animationDelay = `${rand(-5000, 0)}ms`;

        const letter = document.createElement("span");

        letter.className = "letter";

        letter.innerText = value;

        letter.style.animationDelay = `${index * 1000 }ms`;

        inner.appendChild(letter);

        outer.appendChild(inner);

        element.appendChild(outer);
    });
}

enhance("channel-link");