import React from "react";
import ImageSlider from "../ImageSlider";
import Image1 from "../../../assets/images/image-1.webp"
import Image2 from "../../../assets/images/image-2.webp"
import Image3 from "../../../assets/images/image-3.webp"
import Headphones from "../../../assets/images/headphones.webp"
import phone from "../../../assets/images/phone.webp"
import "../../Styles/styles.css"

const images = [
    Image1, Image2, Image3
]




const Home = () => {

    return (
        <>
            <ImageSlider images={images} />

            <div className="md:grid md:grid-cols-2 gap-12 sm:grid">
                <div className="bg-[#b11f1c] lg:flex lg:justify-between items-center mb-8 p-4">
                    <div className="py-4 gap-4 ml-10 mt-10 md:ml-20 md:mt-20 lg:ml-20 lg:mt-16 space-y-7">
                        <p className="text-white text-lg">Ofertas de temporada</p>
                        <h3 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white">Hasta<br />30% menos</h3>
                        <p className="text-white">En Smartphones seleccionados</p>
                        <button className="bg-white py-2 px-4 rounded mt-2 hover:bg-gray-200">Tienda</button>
                    </div>
                    <div className="flex justify-end w-full lg:w-auto lg:max-w-[50%]">
                        <img src={phone} alt="celular rojo" className="object-contain w-full h-full max-h-80 lg:max-h-full gradient" />
                    </div>
                </div>

                <div className="bg-[#643da7] lg:flex lg:justify-between items-center mb-8 p-4">
                    <div className="py-4 gap-4 ml-10 mt-10 md:ml-20 md:mt-20 lg:ml-20 lg:mt-16 space-y-7">
                        <p className="text-white text-lg">Recién llegados</p>
                        <h3 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white">Lleva tu<br />sonido<br />donde quieras</h3>
                        <p className="text-white">Mejores marcas de audífonos</p>
                        <button className="bg-white py-2 px-4 rounded mt-2 hover:bg-gray-200">Comprar</button>
                    </div>
                    <div className="flex justify-end w-full lg:w-auto lg:max-w-[50%]">
                        <img src={Headphones} alt="Auriculares violetas" className="object-contain w-full h-full max-h-80 lg:max-h-full gradient" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home