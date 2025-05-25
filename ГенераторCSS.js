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
`;
    return cssCode;
}

// Пример использования функции
const animationName = 'colorChange'; // Убедитесь, что имя анимации задано здесь
const cssOutput = generateAnimationCSS(animationName);
console.log(cssOutput);}

colorPicker.addEventListener('input', () => {
    animatedBox.style.backgroundColor = colorPicker.value;
    generateCSS(animationSelect.value, colorPicker.value, speedRange.value + 's');
  });
