import React from "react";
import { useState } from "react";
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };
  const photos = [
    {
      id: "p1",
      title: "Photo One",
      name: "/images/cmbm/1.png",
    },
    {
      id: "p2",
      title: "Photo Two",
      name: "/images/cmbm/2.png",
    },
    {
      id: "p3",
      title: "Photo Three",
      name: "/images/cmbm/3.png",
    },
    {
      id: "p4",
      title: "Photo Four",
      name: "/images/cmbm/4.png",
    },
    {
      id: "p5",
      title: "Photo Five",
      name: "/images/cmbm/5.png",
    },
  ];

  return (
    <div className="relative 2xl:w-full xl:w-3/4 h-56">
      {photos.map((photo) => (
        <div
          key={photo.id}
          // if the photo is the current photo, show it
          className={
            photos[currentIndex].id === photo.id ? "" : "hidden w-full h-full"
          }
        >
          <img
            src={photo.name}
            alt={photo.title}
            className="w-full max-h-full object-cover rounded-2xl shadow-2xl"
          />
          <div className="caption"> {photo.title}</div>
        </div>
      ))}
      {/* Previous button */}
      <button onClick={prev} className="absolute top-0 ">
        &lt;
      </button>

      {/* Next button */}
      <button onClick={next} className="next">
        &gt;
      </button>
      <div className="dots">
        {photos.map((photo) => (
          <span
            key={photo.id}
            // highlight the dot that corresponds to the current photo
            className={
              photos[currentIndex].id === photo.id ? "dot active" : "dot"
            }
            // when the user clicks on a dot, go to the corresponding photo
            onClick={() => setCurrentIndex(photos.indexOf(photo))}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
