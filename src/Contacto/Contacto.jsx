const Contacto = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center px-16">
      <div className="flex justify-center items-start animate-jump-in mb-10">
        <img
          src="rainbow.png"
          className="w-20 h-20 object-cover transform scale-x-[-1]"
        />
        <h1
          className="text-5xl font-bold text-center items-center border-4 border-blue-500 py-3 px-4 inline-block rounded-lg shadow-lg bg-gradient-to-b from-blue-500 to-blue-300 text-white "
          id="contacto"
        >
          Contáctanos
        </h1>
        <img src="rainbow.png" className="w-20 h-20 object-cover" />
      </div>
      <div className="flex justify-center items-center mt-8 m-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-4 border-blue-500 rounded-lg p-6">
            <h2 className="text-blue-500 text-center font-bold text-2xl mb-5">
              ¿Aún no estás convencido?
            </h2>
            <p className=" text-justify mb-6">
              Contáctanos y te ayudaremos a resolver tus dudas. Si deseas
              obtener más información sobre nuestra guardería o si deseas
              visitar nuestro Centro Infantil ubicado en Algeciras, no dudes en
              programar una visita. Estaremos encantados de recibirte y
              mostrarte nuestras instalaciones siempre a tu disposición.
            </p>
            <div className="flex items-start justify-center space-x-8">
              <img src="children.png" alt="" className="w-60 h-60" />
              <div className="text-center space-y-3 flex flex-col items-start mt-16">
                <span className="list-disc list-inside space-y-2 text-start">
                  <li className="text-blue-500">
                    <strong>Teléfono:</strong>{" "}
                    <span className="text-black">(2) 2302360</span>
                  </li>
                  <li className="text-blue-500">
                    <strong>Dirección:</strong>{" "}
                    <span className="text-black">
                      Cl: 4 A 22 c 21 Br: El Palmar
                    </span>
                  </li>
                  <li className="text-blue-500">
                    <strong>Correo: </strong>{" "}
                    <span className="text-black">
                      colegiotalentos_@hotmail.com
                    </span>
                  </li>
                </span>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg p-6">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.59835401926!2d-76.20594252448083!3d4.101838435941114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e39c5f2a852fc0b%3A0xd84a0f5881435724!2sCl.%204a%20%2322c-21%2C%20Tulu%C3%A1%2C%20Valle%20del%20Cauca!5e0!3m2!1ses-419!2sco!4v1710781414884!5m2!1ses-419!2sco"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
