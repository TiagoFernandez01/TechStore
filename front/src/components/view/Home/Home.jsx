import React from "react";
import ImageSlider from "../ImageSlider";
import Image1 from "../../../assets/images/image-1.webp"
import Image2 from "../../../assets/images/image-2.webp"
import Image3 from "../../../assets/images/image-3.webp"
import Headphones from "../../../assets/images/headphones.webp"
import phone from "../../../assets/images/phone.webp"
import "../../Styles/styles.css"
import { TbTruckDelivery } from "react-icons/tb";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { LuWatch } from "react-icons/lu";
import BuyForCateories from "../BuyForCategories/BuyForCategories.jsx"


const images = [
    Image1, Image2, Image3
]




const Home = () => {

    return (
        <>
            <body>

                <section>
                    <ImageSlider images={images} />
                </section>

                <section>
                    <div className="md:grid md:grid-cols-2 gap-12 sm:grid mx-4">
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


                    <div className="text-xl flex flex-wrap justify-between mx-4 font-bold items-center bg-white h-auto mb-4 py-4">

                        <div className="flex items-center ml-4 gap-5 mb-4 lg:mb-0 w-full lg:w-auto">
                            <TbTruckDelivery className="text-5xl text-purple-600" />
                            <p>Entrega <br />inmediata</p>
                        </div>

                        <div className="flex items-center gap-5 mb-4 lg:mb-0 w-full lg:w-auto">
                            <BsFillBoxSeamFill className="text-5xl text-purple-600" />
                            <p>Envío gratis <br /> en compras <br /> mayores a $10.000</p>
                        </div>

                        <div className="flex items-center gap-5 mb-4 lg:mb-0 w-full lg:w-auto">
                            <BiSolidOffer className="text-5xl text-purple-600" />
                            <p>Precios bajos <br /> garantizados</p>
                        </div>

                        <div className="flex items-center gap-2 mr-4 mb-4 lg:mb-0 w-full lg:w-auto">
                            <LuWatch className="text-5xl text-purple-600" />
                            <p>Disponibilidad <br /> para vos 24/7</p>
                        </div>

                    </div>
                </section>

                <section>
                    <BuyForCateories/>
                </section>

            </body>


        </>
    )
}

export default Home