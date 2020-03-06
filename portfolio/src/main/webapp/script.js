function getMessages() {
  fetch('/data').then(response => response.json()).then((messages) => {
    const messagesElement = document.getElementById('messages-container');
    messagesElement.innerHTML = "";
    console.log(messages);
    for (i of messages) {
      if (i.score == -2) {
        messagesElement.appendChild(createListElement(i.message + " Score: n/a"));
      }
      else {
        messagesElement.appendChild(createListElement(i.message + " Score: " + i.score));
      }
    }
  });
}

function createListElement(message) {
  const element = document.createElement('li');
  element.innerText = message;
  return element;
}
