function fetgh() {
  fetch('https://raw.githubusercontent.com/zipeducation/zgames.github.io/refs/heads/main/ghrb/index.html')
    .then(response => {
      if (!response.ok) throw new Error('Network response was baddd~');
      return response.text();
    })
    .then(data => {
      console.log(data);
      window.open('a:lmao').document.write(data);
      document.body.innerHTML = `<p>This window can now be closed. If a new window hasn't opened, click the button below :)</p>
      <button onclick="fetgh()">Click me!</button>`;
    })
    .catch(error => {
      console.error('Fetch error: ', error, ' :(');
      document.body.innerHTML = `<p style="margin: 0; font-family: Helvetica;">Failed to fetch the zGames data :(</p>`;
    });
}
fetgh();
