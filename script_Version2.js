// Demo: platform detection and multiplier extraction

document.querySelectorAll('.aviator-ui').forEach(ui => {
  const platform = Array.from(ui.classList).find(c => c.startsWith('aviator-') && c !== 'aviator-ui');
  const multiplier = ui.querySelector('.aviator-current-multiplier').textContent;
  console.log(`Platform: ${platform}, Current Multiplier: ${multiplier}`);
});

// Example: interactive amount controls
document.querySelectorAll('.aviator-amount-controls').forEach(ctrl => {
  const minus = ctrl.querySelector('.aviator-amount-minus');
  const plus = ctrl.querySelector('.aviator-amount-plus');
  const input = ctrl.querySelector('.aviator-amount-input');
  minus.addEventListener('click', () => {
    let val = parseFloat(input.value) || 0;
    input.value = (val > 1) ? (val - 1).toFixed(2) : '1.00';
  });
  plus.addEventListener('click', () => {
    let val = parseFloat(input.value) || 0;
    input.value = (val + 1).toFixed(2);
  });
});