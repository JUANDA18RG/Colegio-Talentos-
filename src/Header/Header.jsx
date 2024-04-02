import { useState, useEffect } from "react";
import { useMemo } from "react";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(
    () => [
      "Banner.jpg",
      "Banner2.jpg",
      "Banner3.jpg",
      "Banner5.jpg",
      "Banner4.jpg",
      "Banner6.jpg",
    ],
    []
  ); // Rutas de las imágenes

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambiar la imagen de fondo cada cierto tiempo
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambiar cada 5 segundos (5000 ms)

    return () => clearInterval(interval);
  }, [images]);

  const bgStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    transition: "background-image 0.6s ease-in-out",
  };

  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat animate-fade-left"
        style={bgStyle}
        id="home"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 to-transparent sm:bg-transparent"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 lg:justify-between">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              ¡Bienvenido al Portal Web del Colegio
              <strong className="block font-extrabold text-blue-700 mt-2">
                TALENTOS TULUA!
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Formamos Talentos para el Futuro, Preescolar y Básica Primaria
              con:
              <TypeAnimation
                sequence={[
                  "Creatividad ✒️",
                  2000,
                  "Innovación 🧠",
                  2000,
                  "Recreación ⚽",
                  2000,
                ]}
                speed={30}
                wrapper="span"
                repeat={Infinity}
                className="text-blue-600 ml-2"
              />
            </p>
          </div>
          <div className="flex justify-end  bg-white items-center border-4 border-blue-500 rounded-full animate-jump-in">
            <img
              src="Logo.jpg"
              alt=""
              className=" h-80 w-80 object-cover p-3 rounded-full"
            />
          </div>
        </div>
      </section>

      <div
        id="carouselExampleSlidesOnly"
        className="relative"
        data-twe-carousel-init
        data-twe-ride="carousel"
      ></div>
    </>
  );
};

export default Header;
