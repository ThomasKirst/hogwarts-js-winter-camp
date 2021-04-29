const weasleys = [
  'Ginny',
  'Ron',
  'Fred',
  'George',
  'Percy',
  'Charly',
  'Bill',
  'Arthur',
  'Molly',
];

showWeasleys(weasleys);

const headerContainer = document.querySelector('header');

const moveButton = document.createElement('button');
moveButton.innerText = 'Send Weasleys on Vacation';
moveButton.classList.add('button', 'rounded');

moveButton.addEventListener('click', () => {
  const weasleysInABox = document.querySelectorAll('.weasley-box');

  if (weasleysInABox.length > 0) {
    weasleysInABox.forEach((weasleyInABox) => weasleyInABox.remove());
    moveButton.innerText = 'Bring the Weasleys back';
  } else {
    showWeasleys(weasleys);
    moveButton.innerText = 'Send Weasleys on Vacation';
  }
});

headerContainer.appendChild(moveButton);

function showWeasleys(weasleys) {
  const weasleysHouseContainer = document.querySelector('.weasleys-house');

  weasleys.forEach((weasley) => {
    const weasleyInABox = document.createElement('div');
    weasleyInABox.innerText = weasley;
    weasleyInABox.classList.add('weasley-box', 'rounded', 'shadow');
    weasleysHouseContainer.appendChild(weasleyInABox);
  });
}
