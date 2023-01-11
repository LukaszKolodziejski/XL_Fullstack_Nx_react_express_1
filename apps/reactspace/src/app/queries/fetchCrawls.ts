export default async function fetchCrawls() {
  //   const response = await fetch(`/api/crawls`);
  //   const response = await fetch(`http://localhost:8084/api/`);
  const response = await fetch(`/api/crawls`);

  return response.json();
}
