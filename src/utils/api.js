const baseUrl = "http://localhost:3001";

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

function getItems() {
  return fetch(`${baseUrl}/items`).then(handleResponse);
}

function addItem(name, imageUrl, weather) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then(handleResponse);
}

function deleteItem() {
    fetch(`${baseUrl}/items/_id`, {
      method: "DELETE",
      body: JSON.stringify({
        name: "",
        imageUrl: "",
        weather: "",
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
  }

export { getItems,addItem,deleteItem };
