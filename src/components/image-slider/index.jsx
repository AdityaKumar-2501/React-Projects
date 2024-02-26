import React, { useEffect, useState } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import "./style.css";

function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setloading] = useState(false); // whenever using a fetch request use loading state to wait till data is loaded.
  const [errMessage, setErrMessage] = useState(null);

  async function fetchImages(geturl) {
    try {
      setloading(true);
      const response = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setloading(false);
      }
    } catch (e) {
      setErrMessage(e.message);
      setloading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  console.log(images);

  if (loading) {
    return <div>Loading the data ! please Wait</div>;
  }
  if (errMessage !== null) {
    return <div>Error occured {errMessage}</div>;
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide == 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide == images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="container">
      <FaArrowCircleLeft
        className="arrow arrow-left"
        onClick={() => handlePrevious()}
      />
      {images && images.length
        ? images.map((image, index) => (
            <img
              key={image.id}
              src={image.download_url}
              alt={image.download_url}
              className={currentSlide == index ? "current-image" : "hide-image"}
            />
          ))
        : null}
      <FaArrowCircleRight
        className="arrow arrow-right"
        onClick={() => handleNext()}
      />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide == index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImageSlider;
