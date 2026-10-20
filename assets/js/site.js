
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.message;
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = 'Random Dog Image';
    document.body.appendChild(imgElement);
  })
  .catch(error => console.error('Error fetching dog image:', error));