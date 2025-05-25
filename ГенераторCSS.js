const animationSelect = document.getElementById('animationSelect');
const colorPicker = document.getElementById('colorPicker');
const speedRange = document.getElementById('speedRange');
const speedValue = document.getElementById('speedValue');
const animatedBox = document.getElementById('animatedBox');
const cssOutput = document.getElementById('cssOutput');
const copyButton = document.getElementById('copyButton');


animatedBox.style.backgroundColor = colorPicker.value;
speedValue.textContent = speedRange.value + ' с';


function generateAnimationCSS(animationName, color, duration) {
    return `
@keyframes ${animationName} {
    0% { background-color: red; }
    50% { background-color: yellow; }
    100% { background-color: green; }
}

#animatedBox {
    background-color: ${color};
    animation: ${animationName} ${duration} ease-in-out 1 forwards;
}`;
}


function updateAnimation() {
    const animationName = animationSelect.value;
    const duration = speedRange.value + 's';
    const color = colorPicker.value;
    

    animatedBox.style.animation = 'none';
    
    setTimeout(() => {

        animatedBox.style.animation = `${animationName} ${duration} ease-in-out 1 forwards`;
        animatedBox.style.backgroundColor = color;
        
        cssOutput.textContent = generateAnimationCSS(animationName, color, duration);
    }, 20);
}


colorPicker.addEventListener('input', updateAnimation);
speedRange.addEventListener('input', () => {
    speedValue.textContent = speedRange.value + ' с';
    updateAnimation();
});
animationSelect.addEventListener('change', updateAnimation);

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(cssOutput.textContent)
        .then(() => alert('CSS код скопирован!'))
        .catch(err => console.error('Ошибка:', err));
});


updateAnimation();