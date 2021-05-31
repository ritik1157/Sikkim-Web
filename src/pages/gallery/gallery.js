import React from "react";
import images from "../../Asset/images";
import "./gallery.scss";
import Header from "../../component/Header";

const Gallery = () => {
    return (
        <div className="gallery-container">
            <Header />

            <div className="images-container">
                {images.imageGallery.map((imglink, idx) => (
                    <div key={idx} className="img-wrapper">
                        <img src={imglink} alt={`img_${idx}`}></img>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
