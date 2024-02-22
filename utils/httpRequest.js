const BASE_USL = "https://fakestoreapi.com/";

const postData = async (userData) => {
  const response = await fetch(`${BASE_USL}auth/login`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();
  return result;
};

const getData = async (data) => {
  const response = await fetch(`${BASE_USL}${data}`);
  const result = await response.json();
  return result;
};

export { postData, getData };
