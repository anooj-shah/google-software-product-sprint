function getMessages() {
  fetch('/data').then(response => response.json()).then((messages) => {
    const messagesElement = document.getElementById('messages-container');
    messagesElement.innerHTML = "";
    console.log(messages);
    for (i of messages) {
      messagesElement.appendChild(createListElement(i.message))
    }
    // work on displaying the score too
  });
}

function createListElement(message) {
  const element = document.createElement('li');
  element.innerText = message;
  return element;
}
