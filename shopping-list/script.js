const shoppingSection = document.querySelector('#shopping-list');
const unorderedList = document.createElement('ul');
shoppingSection.appendChild(unorderedList);

const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', addToList);

const inputBox = document.querySelector('input');

function addToList() {
  if (inputBox.value == '') return;
  const li = document.createElement('li');
  li.textContent = inputBox.value;
  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.textContent = 'X';
  deleteBtn.setAttribute('class', 'delete-btn');
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });
  li.appendChild(deleteBtn);
  unorderedList.appendChild(li);
  inputBox.value = '';
}

inputBox.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    // addBtn.click();
    addToList();
  }
});
