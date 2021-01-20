(() => {
  const apiBox = document.getElementById('response-box');
  const whoami = document.getElementById('whoami');

  function render(data) {
    if (data.error) {
      return `<p class='response-para'>Error: <span class='response-text'>${data.error}</span></p>
      `;
    }
    return `
      <p class='response-para'>IP address: <span class='response-text'>${data.ipaddress}</span></p>
      <p class='response-para'>language: <span class='response-text'>${data.language}</span></p>
      <p class='response-para'>software: <span class='response-text'>${data.software}</span></p>
    `;
  }

  whoami.addEventListener('click', () => {
    fetch(window.location.href + 'api/whoami')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        apiBox.innerHTML = render(data);
      })
      .catch((err) => {
        const data = { error: 'Unable to reach the API server.' };
        apiBox.innerHTML = render(data);
      });
  });
})();
