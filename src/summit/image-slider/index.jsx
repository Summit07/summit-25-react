import React, { useEffect, useState } from "react";
import "./styles.css";

const ImageSlider = ({ url, page = 1, limit = 5 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl, page = 1, limit = 5) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      console.log(data, getUrl);

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setErrorMsg(e);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== " ") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading Dataaaa...........</div>;
  }
  if (error !== null) {
    return <div>Error Occourd please refresh..........</div>;
  }

  return (
    <div className="container">
      <span onClick={handlePrevious} className="arrow arrow-left">
        &larr;
      </span>
      {images && images.length > 0
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}

      <span onClick={handleNext} className="arrow arrow-right">
        &rarr;
      </span>
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
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
};

export default ImageSlider;
