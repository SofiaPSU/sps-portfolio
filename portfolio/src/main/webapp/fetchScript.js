async function showPhrase() {
  const responseFromServer = await fetch('/step_one_servlet');

  const jsonFromResponse = await responseFromServer.json();

  const jsonString = jsonFromResponse.phrases[Math.floor(Math.random() * jsonFromResponse.phrases.length)];

  const jsonContainer = document.getElementById('json-container');
  jsonContainer.innerText = jsonString;
}