// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function getGreeting() {
  console.log('Fetching greeting.');

  // The fetch() function returns a Promise because the request is asynchronous.
  const responsePromise = fetch('/data');

  // When the request is complete, pass the response into handleResponse().
  responsePromise.then(handleResponse);
}

function handleResponse(response) {
  console.log('Handling the response.');
  // response.text() returns a Promise, because the response is a stream of content and not a simple variable.
  const textPromise = response.text();
  textPromise.then(addGreetingToDom);
}

function addGreetingToDom(greeting) {
  console.log('Adding greeting to dom: ' + greeting);
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerHTML = greeting;
}
