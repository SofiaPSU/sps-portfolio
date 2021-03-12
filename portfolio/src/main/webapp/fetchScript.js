async function showPhrase() {
  const responseFromServer = await fetch('/random_response');
  const jsonFromResponse = await responseFromServer.json();
  const jsonString = jsonFromResponse[Math.floor(Math.random() * jsonFromResponse.length)];
  const jsonContainer = document.getElementById('json-container');
  jsonContainer.innerText = jsonString;
}