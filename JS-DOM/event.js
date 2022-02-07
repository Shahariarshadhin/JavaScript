function makeBlue() {
    document.body.style.backgroundColor = 'blue';

}

function makeRed() {
    document.body.style.backgroundColor = 'red';

}

const yellowButton = document.getElementById('make-yellow-btn');

yellowButton.onclick = makeYellow;

function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}


const greenButton = document.getElementById('make-green-btn');

greenButton.onclick = function() {
    document.body.style.backgroundColor = 'green';
}

const pinkButton = document.getElementById('make-pink-btn');

pinkButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'hotpink';
})

const cyanButton = document.getElementById('make-cyan-btn');

cyanButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'cyan';
})

document.getElementById('make-lightblue-btn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';

})

document.getElementById('make-lime-btn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lime';
})

document.getElementById('make-black-btn').addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
})