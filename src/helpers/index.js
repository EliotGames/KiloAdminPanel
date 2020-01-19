const API_URL = "https://eliot-project.herokuapp.com/api/";

export const API = {
  async get(url, params) {
    const res = await fetch(`${API_URL}${url}`, {
      ...params
    });

    return await res.json();
  },

  async post(url, body, params) {
    const res = await fetch(`${API_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
      ...params
    });

    return await res.json();
  },

  async patch(url, body, params) {
    const res = await fetch(`${API_URL}${url}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
      ...params
    });

    return await res.json();
  }
};

export function formatLastUpdateMessage(date) {
  const diffInSeconds = (new Date().getTime() - new Date(date).getTime()) / 1000;

  if (diffInSeconds < 60) {
    return `${diffInSeconds.toFixed()} seconds ago`;
  }

  if (diffInSeconds < 60 * 60) {
    const minutes = (diffInSeconds / 60).toFixed();

    if (minutes < 2) {
      return `A minute ago`;
    } else {
      return `${minutes} minutes ago`;
    }
  }

  if (diffInSeconds < 60 * 60 * 24) {
    const hours = (diffInSeconds / 60 / 60).toFixed();

    if (hours < 2) {
      return `An hour ago`;
    } else {
      return `${hours} hours ago`;
    }
  }

  return "More than day ago";
}
