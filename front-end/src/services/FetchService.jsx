function myFetch(url, requestMethod, jwt, requestBody) {
  const fetchData = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: requestMethod,
  };

  if (jwt) {
    fetchData.headers.Authorization = `Bearer ${jwt}`;
  }

  if (requestBody) {
    fetchData.body = JSON.stringify(requestBody);
  }

  // deleting (for git)
  // eslint-disable-next-line consistent-return
  return fetch(url, fetchData).then((response) => {
    if (response.status === 200) {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json();
      }
      return response.text();
    }
  });
}

export default myFetch;
