export function saveInput({ target }) {
  const http = new XMLHttpRequest();

  http.open('GET', `/a/b/c?input=${target.value}`, true);
  http.send();
}