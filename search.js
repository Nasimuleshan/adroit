const searchIndex = [
  { url: 'index.html', title: 'Home', content: 'Welcome...' },
  { url: 'about.html', title: 'About', content: 'About our company...' },
  { url: 'products.html', title: 'Products', content: 'Our products...' }
];

function handleSearch(event) {
  event.preventDefault(); // Critical - stops form submission to index.html
  
  const query = document.getElementById('universalSearchInput').value.toLowerCase();
  const results = searchIndex.filter(item => 
    item.title.toLowerCase().includes(query) || 
    item.content.toLowerCase().includes(query)
  );

  displayResults(results);
}

function displayResults(results) {
  const container = document.getElementById('searchResults');
  container.innerHTML = '';

  if (results.length === 0) {
    container.innerHTML = '<p>No results found</p>';
    return;
  }

  results.forEach(item => {
    const resultElement = document.createElement('div');
    resultElement.innerHTML = `
      <h3><a href="${item.url}">${item.title}</a></h3>
      <p>${item.content.substring(0, 100)}...</p>
    `;
    container.appendChild(resultElement);
  });
}