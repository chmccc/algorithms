const displayReadyState = xhr => {
  const readyStateMap = [
    '0 UNSENT	Client has been created. open() not called yet',
    '1 OPENED	open() has been called',
    '2 HEADERS_RECEIVED	send() has been called',
    '3 LOADING Downloading',
    '4 DONE',
  ];
  const status = document.createElement('p');
  status.innerHTML = `${readyStateMap[xhr.readyState]}${
    xhr.responseURL ? `<br/>URL: ${xhr.responseURL}` : ''
  }`;
  const element = document.getElementById('status-changes');
  element.appendChild(status);
  element.scrollTop = element.scrollHeight;
};
const displayAPIResponse = xhr => {
  const statusParagraph = document.createElement('p');
  statusParagraph.textContent = `STATUS: ${xhr.status}, URL: ${xhr.responseURL}`;
  const responseParagraph = document.createElement('p');
  responseParagraph.className = 'api-response';
  responseParagraph.textContent = JSON.stringify(xhr.response, null, 2);
  const element = document.getElementById('api-responses');
  element.appendChild(statusParagraph);
  element.appendChild(responseParagraph);
  element.scrollTop = element.scrollHeight;
};

const requestAStarWarsCharacter = () => {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => displayReadyState(xhr);

  const onLoadCallback = () => {
    console.log(xhr);
    displayAPIResponse(xhr)
  };
  
  xhr.responseType = 'json'; // what do we expect? json!!

  xhr.open('GET', `https://swapi.co/api/people/${Math.ceil(Math.random() * 100)}`);

  xhr.setRequestHeader('Content-Type', 'application/json'); // what do we want? json!!

  xhr.addEventListener('load', onLoadCallback)

  xhr.send();
};

const button = document.getElementById('explore-button');
button.addEventListener('click', () => {
  requestAStarWarsCharacter()
})
