export default function Contenido() {
  return (
    <>
      <div className="flex justify-center items-center pt-24">
        <div className="flex justify-between items-start animate-jump-in">
          <img
            src="rainbow.png"
            className="w-20 h-20 object-cover transform scale-x-[-1]"
          />
          <h1
            className="text-5xl font-bold text-center items-center border-4 border-blue-500 py-3 px-4 inline-block rounded-lg shadow-lg bg-gradient-to-b from-blue-500 to-blue-300 text-white"
            id="nosotros"
          >
            Nuestro Proposito
          </h1>
          <img src="rainbow.png" className="w-20 h-20 object-cover" />
        </div>
      </div>
      <section className="scale-75">
        <div className=" px-4 sm:px-6 lg:px-8 animate-fade-left">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-48 sm:h-64 lg:h-full">
                <img
                  alt=""
                  src="Imagen1.jpg"
                  className="absolute inset-0 h-full w-full object-cover border-4 border-blue-500 rounded-lg hover:animate-shake"
                />
              </div>
            </div>
            <div className="relative flex items-center bg-gray-200">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 bg-gray-200"></span>
              <div className="p-4 sm:p-8 lg:p-12 flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold  text-center items-center bg-blue-500 p-2 text-white inline-block rounded-lg mb-4">
                  Proyecto Educativo
                </h2>
                <p className="mt-2 text-xl text-gray-600 justify-center text-justify">
                  Los primeros años en la vida de un niño son verdaderamente
                  cruciales y moldean no solo su crecimiento físico, sino
                  también su desarrollo cognitivo, emocional y social. Durante
                  este período, el cerebro del niño experimenta un crecimiento y
                  una plasticidad excepcionales, lo que significa que está
                  especialmente receptivo a nuevas experiencias y aprendizajes.
                  Es un momento en el que las interacciones con los cuidadores,
                  el entorno y las experiencias tempranas tienen un impacto
                  profundo y duradero en la formación de la arquitectura
                  cerebral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="scale-75 ">
        <div className=" px-4 sm:px-6 lg:px-8 animate-fade-left">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative flex items-center bg-gray-200">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-end-16 lg:block lg:w-16 bg-gray-200"></span>
              <div className="p-4 sm:p-8 lg:p-12 flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold  text-center items-center bg-blue-500 p-2 text-white inline-block rounded-lg mb-4">
                  Metodo Educativo
                </h2>
                <p className="mt-4  text-gray-600 text-xl text-justify">
                  El método educativo El circo de Pampito, implementado por el
                  Colegio Talentos, ofrece un enfoque innovador y adaptado a las
                  necesidades individuales de cada niño. Inspirado en la
                  diversión y el entretenimiento del circo, este método no solo
                  busca educar, sino también inspirar y motivar a los
                  estudiantes a través de experiencias lúdicas y participativas.
                </p>
              </div>
            </div>

            <div className="relative z-10 lg:py-16">
              <div className="relative h-48 sm:h-64 lg:h-full">
                <img
                  alt=""
                  src="Imagen2.jpg"
                  className="absolute inset-0 h-full w-full object-cover border-4 border-blue-500 rounded-lg hover:animate-shake"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="scale-75 ">
        <div className=" px-4 sm:px-6 lg:px-8 animate-fade-left">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-48 sm:h-64 lg:h-full">
                <img
                  alt=""
                  src="Imagen1.jpg"
                  className="absolute inset-0 h-full w-full object-cover border-4 border-blue-500 rounded-lg hover:animate-shake"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-200">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 bg-gray-200"></span>

              <div className="p-4 sm:p-8 lg:p-12 flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold  text-center items-center bg-blue-500 p-2 text-white inline-block rounded-lg mb-4">
                  Metodo Evaluativo
                </h2>
                <p className="mt-2 text-xl text-gray-600 justify-center text-justify">
                  El propósito fundamental de la evaluación en el ámbito
                  educativo es recabar información precisa sobre el progreso de
                  los niños y niñas, con el fin de ajustar el proceso de
                  enseñanza según sus necesidades reales. Esta información no
                  solo permite identificar fortalezas y áreas de mejora, sino
                  que también guía la personalización de la enseñanza, la
                  implementación de intervenciones específicas y el monitoreo
                  continuo del progreso de los estudiantes. En última instancia,
                  la evaluación busca mejorar el aprendizaje y el desarrollo de
                  los estudiantes, asegurando que la enseñanza se adapte de
                  manera efectiva a sus necesidades individuales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
