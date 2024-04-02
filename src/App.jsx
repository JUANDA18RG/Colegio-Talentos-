import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Contenido from "./Contenido/Contenido";
import Contacto from "./Contacto/Contacto";
import { Suspense } from "react";

function App() {
  return (
    <Suspense>
      <Navbar />
      <Header />
      <Contenido />
      <Contacto />
    </Suspense>
  );
}

export default App;
