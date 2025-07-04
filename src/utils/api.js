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

function addItem(name, imageUrl, weather, token) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}

function deleteItem(id, token) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}

function getUserInfo(token) {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}

function editProfileInfo({ name, avatar, token }) {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    body: JSON.stringify({
      name,
      avatar,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}

function toggleCardLike(id, isLiked, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: isLiked ? "DELETE" : "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleResponse);
}

export {
  getItems,
  addItem,
  deleteItem,
  handleResponse,
  baseUrl,
  getUserInfo,
  editProfileInfo,
  toggleCardLike,
};
