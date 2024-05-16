import React from "react";
import ImageSlider from "./ImageSlider";
import Image1 from "../../assets/images/image-1.webp"
import Image2 from "../../assets/images/image-2.webp"
import Image3 from "../../assets/images/image-3.webp"


const images = [
    Image1, Image2, Image3
]




const Home = () => {

    return (
        <>
            <ImageSlider images={images} />
        </>
    )
}

export default Home