const phoneInput = document.getElementById('person_phone');

phoneInput.addEventListener('input', () => {
  const phone = phoneInput.value;

  if (phone.length !== 12) {
    phoneInput.setCustomValidity('Номер телефона должен содержать 12 символов.');
    phoneInput.reportValidity();
    return;
  }

  if (!phone.startsWith('375')) {
    phoneInput.setCustomValidity('Номер телефона должен начинаться с 375.');
    phoneInput.reportValidity();
    return;
  }

  
  
  phoneInput.setCustomValidity('');
});

const menu = document.querySelector('.menu>i');
const links = document.querySelector('.links');
menu.addEventListener('click',showMenu)
function showMenu(event)
{
    if (event.type === 'click')
    links.classList.toggle('activeMenu');
}
