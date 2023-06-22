import React, { useState } from "react";
import Modal from "react-modal";
import "../App.css";
import AnimatedPage from "../AnimatedPage";

// modal styles
const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "80%",
    maxHeight: "100%",
    border: "none",
    background: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "999",
    position: "absolute",
  },
};

function Resume() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedImageIndex(null);
    setModalIsOpen(false);
  };

  const images = [
    require("../assests/images/resumePg1.PNG"),
    require("../assests/images/resumePg2.PNG"),
    require("../assests/images/resumePg3.PNG"),
  ];

  const navigateToNextImage = () => {
    setSelectedImageIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  const navigateToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  };

  const renderImages = () => {
    return images.map((imageSrc, index) => (
      <img
        className={`resumeImg ${selectedImageIndex === index ? "selected" : ""}`}
        src={imageSrc}
        alt={`resume page ${index + 1}`}
        onClick={() => handleImageClick(imageSrc, index)}
        key={index}
      />
    ));
  };

  return (
    <AnimatedPage>
      <div className="pageBox">
        <h2 className="pageTitles">Resume</h2>
        <div className="resumeImagesContainer">{renderImages()}</div>

        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles}>
          <img className="modalImage" src={selectedImage} alt="resume page" />
          <button className="modalArrow left" onClick={navigateToPreviousImage}>
            &lt;
          </button>
          <button className="modalArrow right" onClick={navigateToNextImage}>
            &gt;
          </button>
        </Modal>
      </div>
    </AnimatedPage>
  );
}

export default Resume;
