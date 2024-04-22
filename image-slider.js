import React, { useState } from 'react';
// import "../CSS/image-slider.css"; 


const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sliderStyles ={
    height: "100%", 
    position: "relative", 
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px", 
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${images[currentImageIndex].url})`,
  };


  const leftArrowStyles = {
    position: "absolute",
    top: "50%", 
    transform: "translate(0, -50%)",
    left: "-64px",
    fontSize: "45px", 
    color: "#fff" , 
    zIndex: 1, 
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%", 
    transform: "translate(0, -50%)",
    right: "-64px",
    fontSize: "45px", 
    color: "#fff" , 
    zIndex: 1, 
    cursor: "pointer",
  };

  const goToPrevious =() =>{
    const isFirstSlide = currentImageIndex===0;
    const newIndex = isFirstSlide ? images.length - 1 : currentImageIndex -1; 
    setCurrentImageIndex(newIndex); 
  }; 

  const goToNext =() => {
    const isLastSlide = currentImageIndex === images.length -1;  
    const newIndex = isLastSlide ? 0 : currentImageIndex + 1; 
    setCurrentImageIndex(newIndex); 
  }

  const dotscontainerStyles = {
    display: "flex", 
    justifyContent: "center", 
  }

  const dotStyles = { 
    margin: "0 3px", 
    cursor:"pointer", 
    fontSize:"20px",
  }

  const goToSlide = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
  };

  return (
    <div style= {sliderStyles}>
      <div style = {leftArrowStyles} onClick={goToPrevious}> &#9756; </div>
      <div style = {rightArrowStyles} onClick={goToNext}> &#9758; </div>

        <div style = {slideStyles}></div>
        <div style= {dotscontainerStyles}>
          {images.map((image, imageIndex) =>(
            <div key = {imageIndex} style={dotStyles} onClick={()=>goToSlide(imageIndex)}
            > 
            &#9917; 
            </div>
          ))}
        </div>
    </div>
    
  );
};

export default ImageSlider;
