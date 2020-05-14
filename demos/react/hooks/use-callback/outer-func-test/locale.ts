export function saveInput({ target }: React.ChangeEvent<HTMLInputElement>): void {
  const http = new XMLHttpRequest();

  http.open('GET', `/a/b/c?input=${target.value}`, true);
  http.send();
}