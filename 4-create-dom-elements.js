const weasleys = ['Ginny', 'Ron', 'George', 'Fred', 'Percy', 'Bill'];

const addButton = document.createElement('button');
addButton.innerText = 'Show me Weasleys in a box!';
addButton.addEventListener('click', () => {
  showWeasleysInABox(weasleys);
});

const removeButton = document.createElement('button');
removeButton.innerText = 'Hide Weasleys in a box!';
removeButton.addEventListener('click', () => {
  deleteWeasleysInABox('weasleyBox');
});

document.body.appendChild(addButton);
document.body.appendChild(removeButton);

function showWeasleysInABox(weasleys) {
  weasleys.forEach((weasley) => {
    const weasleyInABox = document.createElement('div');
    weasleyInABox.innerText = weasley;
    weasleyInABox.classList.add('weasleyBox', 'rounded', 'shadow');
    document.body.appendChild(weasleyInABox);
  });
}

function deleteWeasleysInABox(className) {
  const weasleysInABox = document.querySelectorAll(`.${className}`);
  console.log(weasleysInABox);
  weasleysInABox.forEach((weasley) => {
    weasley.classList.add('hidden');
    // setTimeout(() => weasley.remove(), 2000);
  });
}
