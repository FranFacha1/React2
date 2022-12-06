// import React, { useState } from "react";
// import "./Carrusel.css"
// const Carrusel = ( {imagenes} ) => {

//     // const img = "https://casapropiacolombia.com/sites/default/files/inline-images/JARDINERIA%202_5.jpg"

//     const [imagenActual, setImagenActual] = useState(0);
//     const cantidad = imagenes?.length;

//     if (Array.isArray(imagenes) || cantidad === 0)
//     return;

//     return (

//     <div className="container-carrusel">
      
//       <div className="carrusel">

//         <button className="boton"></button>
//         {imagenes.map ((imagen, index) => {
//             return <img key={index} src={imagen}></img>

//         }
//         )}

//         <button className="boton"></button>

//         {/* <img className="img-carrusel" src={img}></img> */}
      
//       </div>

//         {/* <button className="boton"></button>
//         <button className="boton"></button>
//         <button className="boton"></button> */}

//     </div>
//   );
// };

// export default Carrusel;
