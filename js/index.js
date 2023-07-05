// Muestra u oculta el botón dependiendo de la posición de desplazamiento
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Realiza el desplazamiento hacia arriba suave al hacer clic en el botón
function scrollToTop() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}



function validaCodigo(codigo){
  let codigoValido = false
  if (codigo > 0 && codigo < 7)
    codigoValido = true
  return codigoValido
}
 
function mostrarCuotas(){
  let intereses = " sin interes."
  console.log("Todas nuestras bicicletas tienen: 😎")
  for (let i = 1; i <= 12; i++){
    if(i > 6)
      intereses = " con interes."
    console.log( i + " cuota(s)" + intereses)
  }
}

function mostrarPrecio(codigo){
  switch(codigo){
    case 1:
      console.log("El precio de la Specialized Epic World Cup S-Works es:$1.840.000")
      break
    case 2:
      console.log("El precio de la Trek Supercaliber es: $1.650.000")
      break
    case 3:
      console.log("El precio de la Scott Spark es: $1.540.000")
      break
    case 4:
      console.log("El precio de la Santa Cruz V10 es: $1.540.000")
      break
    case 5:
      console.log("El precio de la Pivot Phoenix es: $1.540.000")
      break
    case 6:
      console.log("El precio de la Canyon LUX es: $1.540.000")
      break
    default:
      console.warn("Seleccion Incorrecta ⚠️")
      break
  }
}

function compra(){
  let respuestaComprar = confirm("Desea comprar la bicicleta?")
  if (respuestaComprar === true)
    alert("✅La bicicleta es tuya. Muchas Gracias por la compra!")
  else{
    alert("🔔Recuerde que las ofertas son por tiempo limitado.")
  }

}

function consultarProductos(){
  let respuesta = confirm("Deseas consultar el precio de alguna bicicleta?")
  if(respuesta === true){
    let codigo =  parseInt(prompt("Ingrese el codigo numerico del tipo de bicicleta a buscar: "))
    while (!validaCodigo(codigo)){
      codigo = parseInt(prompt("❌El codigo ingresado no es valido. Vuelva a ingresar el codigo numerico del tipo de bicicleta a buscar: "))
    }
    mostrarPrecio(codigo)
    mostrarCuotas()
    compra()
    
  }
  else{
    console.warn("Gracias por visitar nuestra Pagina Web😊")
  }
}

consultarProductos()