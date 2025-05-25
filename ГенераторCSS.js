const animationSelect = document.getElementById('animationSelect');
  const colorPicker = document.getElementById('colorPicker');
  const speedRange = document.getElementById('speedRange');
  const speedValue = document.getElementById('speedValue');
  const animatedBox = document.getElementById('animatedBox');
  const cssOutput = document.getElementById('cssOutput');
  const copyButton = document.getElementById('copyButton');

  function updateAnimation() {
    const animatedBox = animationSelect.value;
    const duration = speedRange.value + 's';

    animatedBox.style.animation = 'none';
    setTimeout(() => {
      animatedBox.style.animationName = animationName;
      animatedBox.style.animationDuration = duration;
      animatedBox.style.animationIterationCount = '1';
      animatedBox.style.animationTimingFunction = 'ease-in-out';
      animatedBox.style.animationFillMode = 'forwards';
    }, 20);
    // Функция для генерации CSS-кода анимации
function generateAnimationCSS(animationName) {
    const cssCode = `
@keyframes ${animationName} {
    0% {
        background-color: red;
    }
    50% {
        background-color: yellow;
    }
    100% {
        background-color: green;
    }
}

.${animationName} {
    animation: ${animationName} 3s infinite;
}
    
#animatedBox {
  background-color: ${color};
  animation-name: ${animationName};
  animation-duration: ${duration};
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
`;
    return cssCode;
}

const animationName = 'colorChange';
const cssOutput = generateAnimationCSS(animationName);
console.log(cssOutput);}

colorPicker.addEventListener('input', () => {
    animatedBox.style.backgroundColor = colorPicker.value;
    generateCSS(animationSelect.value, colorPicker.value, speedRange.value + 's');
  });
speedRange.addEventListener('input', () => {
    speedValue.textContent = speedRange.value + ' с';
    updateAnimation();
  });
