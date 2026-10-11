'use strict';

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');
const amountButtons = [...document.querySelectorAll('.amount-button')];
const customAmount = document.querySelector('#custom-amount');
const generateButton = document.querySelector('#generate-pix');
const amountError = document.querySelector('#amount-error');
const displayAmount = document.querySelector('#display-amount');
const pixCode = document.querySelector('#pix-code');
const copyButton = document.querySelector('#copy-code');
const copyStatus = document.querySelector('#copy-status');

let selectedAmount = 25;

function currency(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function updateSimulation(value) {
  const amount = Number(value);
  if (!Number.isFinite(amount) || amount < 1 || amount > 100000) {
    amountError.hidden = false;
    amountError.textContent = 'Informe um valor entre R$ 1,00 e R$ 100.000,00.';
    customAmount.setAttribute('aria-invalid', 'true');
    return;
  }

  selectedAmount = Math.round(amount * 100) / 100;
  amountError.hidden = true;
  customAmount.removeAttribute('aria-invalid');
  displayAmount.textContent = currency(selectedAmount);
  const formatted = selectedAmount.toFixed(2).replace('.', '-');
  pixCode.value = `SIMULACAO-PIX-CRUZADA-${formatted}`;
  copyStatus.hidden = true;
}

amountButtons.forEach((button) => {
  button.setAttribute('aria-pressed', String(Number(button.dataset.amount) === selectedAmount));
  button.addEventListener('click', () => {
    amountButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle('selected', active);
      item.setAttribute('aria-pressed', String(active));
    });
    customAmount.value = '';
    updateSimulation(button.dataset.amount);
  });
});

customAmount.addEventListener('input', () => {
  amountButtons.forEach((button) => {
    const active = customAmount.value !== '' && Number(button.dataset.amount) === Number(customAmount.value);
    button.classList.toggle('selected', active);
    button.setAttribute('aria-pressed', String(active));
  });
});

generateButton.addEventListener('click', () => {
  const value = customAmount.value === '' ? selectedAmount : Number(customAmount.value);
  updateSimulation(value);
});

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(pixCode.value);
    copyStatus.textContent = 'Código demonstrativo copiado. Ele não realiza pagamentos.';
  } catch (error) {
    pixCode.focus();
    pixCode.select();
    const copied = document.execCommand('copy');
    copyStatus.textContent = copied
      ? 'Código demonstrativo copiado. Ele não realiza pagamentos.'
      : 'Não foi possível copiar automaticamente. Selecione e copie o código manualmente.';
  }
  copyStatus.hidden = false;
});

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  menuToggle.textContent = isOpen ? '×' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    menuToggle.textContent = '☰';
  });
});

document.querySelector('#current-year').textContent = new Date().getFullYear();
updateSimulation(selectedAmount);
