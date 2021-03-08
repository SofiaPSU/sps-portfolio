async function showPhrase() {
  const responseFromServer = await fetch('/step_one_servlet');
  const textFromResponse = await responseFromServer.text();

  const dateContainer = document.getElementById('phrase-container');
  dateContainer.innerText = textFromResponse;
}
