const zoomInHandler = (data, image) => {
  const distanceX = data.offsetX + "px";
  const distanceY = data.offsetY + "px";

  image.style.transformOrigin = `${distanceX} ${distanceY}`;
  image.style.transform = "scale(2.5)";
};

const zoomOutHandler = (data) => {
  data.style.transformOrigin = `center`;
  data.style.transform = "scale(1)";
};

const imageZoomHandler = () => {
  const imageContainer = document.querySelector(".selected-image_container");
  const image = document.querySelector(".selected-product_image");

  imageContainer.addEventListener("mousemove", (event) =>
    zoomInHandler(event, image)
  );

  imageContainer.addEventListener("mouseleave", (event) =>
    zoomOutHandler(image)
  );
};

export { imageZoomHandler };
