const led = document.querySelector(".connection-led");
const text = document.querySelector(".connection-text");
const container = document.querySelector(".test-connection");

const onlineHandler = (data) => {
  if (data.status === 200 || data.status < 300) {
    container.style.border = `1px solid #00ff00`;
    text.innerText = "You Are Online";
    led.style.backgroundColor = "#00ff00";
  }
};

const offlineHandler = () => {
  container.style.border = `1px solid #ff0000`;
  text.innerText = "No Internet Connection";
  led.style.backgroundColor = "#ff0000";
};

const connectionHandler = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    onlineHandler(response);
  } catch (error) {
    console.log("There is no internet connection");
    offlineHandler();
  }
};

setInterval(() => {
  connectionHandler();
}, 3000);

export { connectionHandler };
