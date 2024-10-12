'use strict';

const logo = document.querySelector('.logo');
const messageDiv = document.createElement('div');

messageDiv.classList.add('message');

function handler() {
  const promise1 = Promise.resolve('Promise was resolved!');

  promise1.then((result) => {
    messageDiv.innerText = result;
    document.body.appendChild(messageDiv);
  });

  const promise2 = Promise.reject(new Error('Promise was rejected!'));

  promise2.catch((error) => {
    setTimeout(() => {
      messageDiv.classList.add('error-message');
      messageDiv.innerText = error.message;
    }, 3000);
  });
}

logo.addEventListener('click', handler);
