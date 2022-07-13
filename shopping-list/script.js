const shoppingSection = document.querySelector('#shopping-list');
const unorderedList = document.createElement('ul');
shoppingSection.appendChild(unorderedList);

const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', addToList);

const inputBox = document.querySelector('input');

unorderedList.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.closest('li').remove();
  }
  console.log(e);
});

function addToList() {
  if (inputBox.value == '') return;
  const li = document.createElement('li');
  li.textContent = inputBox.value;
  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.textContent = 'X';
  deleteBtn.setAttribute('class', 'delete-btn');
  li.appendChild(deleteBtn);
  unorderedList.appendChild(li);
  li.scrollIntoView({ block: 'end' });
  inputBox.value = '';
  inputBox.focus();
}

inputBox.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    // addBtn.click();
    addToList();
  }
});
