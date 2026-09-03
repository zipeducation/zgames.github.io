fetch('https://raw.githubusercontent.com/zipeducation/zgames.github.io/refs/heads/main/ghrb/index.html')
  .then(response => {
    if (!response.ok) throw new Error('Network response was baddd~');
    return response.text();
  })
  .then(data => {
    console.log(data);
    document.body.innerHTML = data;
  })
  .catch(error => {
    console.error('Fetch error: ', error, ' :(');
    document.body.innerHTML = `<p style="margin: 0; font-family: Helvetica;">Failed to fetch the zGames data  :(</p>`;
  });
