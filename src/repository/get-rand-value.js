const endpoint =
  "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=5";

export async function getRandValue() {
  const resp = await fetch(endpoint);

  return resp.json();
}
