const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Al mirar tus lindos ojos, sentí un sentimiento inexplicable, pero ¿Te cuento un secreto? Me enamore')
    alert('Si pudiese ser una parte de tí, elejiería ser tus lagrimas. Porque tus lagrimas son concebidas en tu corazón, nacen en tus ojos, viven en tus mejillas, y se mueren en tus labios')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})