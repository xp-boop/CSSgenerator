const animationSelect = document.getElementById('animationSelect');
  const colorPicker = document.getElementById('colorPicker');
  const speedRange = document.getElementById('speedRange');
  const speedValue = document.getElementById('speedValue');
  const animatedBox = document.getElementById('animatedBox');
  const cssOutput = document.getElementById('cssOutput');
  const copyButton = document.getElementById('copyButton');

  function updateAnimation() {
    const animationName = animationSelect.value;
    const duration = speedRange.value + 's';

    animatedBox.style.animation = 'none';
    setTimeout(() => {
      animatedBox.style.animationName = animationName;
      animatedBox.style.animationDuration = duration;
      animatedBox.style.animationIterationCount = '1';
      animatedBox.style.animationTimingFunction = 'ease-in-out';
      animatedBox.style.animationFillMode = 'forwards';
    }, 20);
}