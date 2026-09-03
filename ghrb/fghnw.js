function fetgh() {
  fetch('https://thegportal.github.io/ghrb/index.html')
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
      document.body.innerHTML = `<p style="margin: 0; font-family: Helvetica;">Failed to fetch the GHub data  :(<br>Report a problem:</p>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScbnf5yjlLtawLyMVYepb8VwwCwgtV4fABgQOi0eBD3_E2npQ/viewform?embedded=true" width="640" height="425" style="border: 2px solid black; border-radius: 5px;">Loading…</iframe>`;
    });
}
fetgh();
