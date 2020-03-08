function getMessages() {
  const INVALID_SENTIMENT_SCORE = 2;
  fetch('/data').then(response => response.json()).then((messages) => {
    const messagesElement = document.getElementById('messages-container');
    messagesElement.innerHTML = "";
    console.log(messages);
    for (i of messages) {
      const printableScore = (i.score == INVALID_SENTIMENT_SCORE ? "n/a" : i.score);
      messagesElement.appendChild(createListElement(i.message + " Score: " + printableScore));
    }
  });
}

function createListElement(message) {
  const element = document.createElement('li');
  element.innerText = message;
  return element;
}
