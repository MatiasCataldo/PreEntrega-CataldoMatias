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

class Compra{
  constructor(carritoDeCompras){
      this.carrito = carritoDeCompras
  }
  obtenerSubtotal(){
      if (this.carrito.length > 0){ 
          return this.carrito.reduce((total, prenda)=> total + prenda.precio, 0)
      }
  }
}

const carrito = []

const bicicletas = [{imagen: '🚲', codigo: 1, nombre: 'Specialized Epic World Cup S-Works', precio: 1840000},
                  {imagen: '🚲', codigo: 2, nombre: 'Trek Supercaliber', precio: 1650000},
                  {imagen: '🚲', codigo: 3, nombre: 'Scott Spark', precio: 1540000},
                  {imagen: '🚲', codigo: 4, nombre: 'Santa Cruz V10', precio: 1540000},
                  {imagen: '🚲', codigo: 5, nombre: 'Pivot Phoenix', precio: 3540000},
                  {imagen: '🚲', codigo: 6, nombre: 'Canyon LUX', precio: 1770000},
                  {imagen: '🚲', codigo: 7, nombre: 'Orbea Oiz', precio: 1440000},
                  {imagen: '🚲', codigo: 8, nombre: 'KTM Scarp', precio: 1540000},
                  {imagen: '🚲', codigo: 9, nombre: 'BH lynx race evo', precio: 1840000},
                  {imagen: '🚲', codigo: 10, nombre: 'Yeti SB160 T3', precio: 2540000},
                  {imagen: '🚲', codigo: 11, nombre: 'Wilier Urta SLR', precio: 2940000},
                  {imagen: '🚲', codigo: 12, nombre: 'Giant Glory', precio: 1740000}]

function buscarBicicleta(codigo){ 
  let resultado = bicicletas.find((bicicleta)=> bicicleta.codigo === parseInt(codigo))
  return resultado 
}

function finalizarCompra(){
  const shopping = new Compra(carrito)
  console.log(`El costo total de su compra es de $ ${shopping.obtenerSubtotal()}. Muchas gracias por tu compra!`)
}

function comprar(codigo){
  let bicicletaElegida = buscarBicicleta(codigo)
  if (bicicletaElegida !== undefined) {
      carrito.push(bicicletaElegida)
      alert(`✅ ${bicicletaElegida.nombre.toUpperCase()} se agregó al carrito. `)
      let respuesta = confirm('¿Deseas llevar otra bicicleta?')
      if (respuesta === true) {
          codigo =  parseInt(prompt("Ingrese el codigo numerico del tipo de bicicleta a buscar: "))
          comprar(codigo)
      } 
      else{
          console.table(carrito)
          finalizarCompra()
      }
  } 
  else{
      alert('⛔️ Error en el código ingresado. Refresca para comenzar de nuevo.')
  }
}

function validaCodigo(codigo){
  let codigoValido = false
  if (codigo > 0 && codigo <= 12)
    codigoValido = true
  return codigoValido
}
 
function mostrarCuotas(){
  let intereses = " sin interes."
  console.log("Todas nuestras bicicletas tienen: 😎")
  for (let cuotas = 1; cuotas <= 12; cuotas++){
    if (cuotas == 3 || cuotas == 6 || cuotas == 9 || cuotas == 12){
      console.log(cuotas + " cuotas sin intereses disponibles")
    }
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
      console.log("El precio de la Santa Cruz V10 es: $3.540.000}")
      break
    case 5:
      console.log("El precio de la Pivot Phoenix es: $3.540.000")
      break
    case 6:
      console.log("El precio de la Canyon LUX es: $1.770.000")
      break
    case 7:
      console.log("El precio de la Orbea Oiz es:$1,440,000")
      break
    case 8:
      console.log("El precio de la KTM Scarp es: $1.540.000")
      break
    case 9:
      console.log("El precio de la BH lynx race evo es: $1.840.000")
      break
    case 10:
      console.log("El precio de la Yeti SB160 T3 es: $2.540.000")
      break
    case 11:
      console.log("El precio de la Wilier Urta SLR es: $2.940.000")
      break
    case 12:
      console.log("El precio de la Giant Glory es: $1.740.000")
      break
    default:
      console.warn("Seleccion Incorrecta ⚠️")
      break
  }
}

function confirmarCompra(codigo){
  let respuestaComprar = confirm("Desea comprar la bicicleta?")
  if (respuestaComprar === true)
    comprar(codigo)
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
    confirmarCompra(codigo)
  }
  else{
    console.warn("Gracias por visitar nuestra Pagina Web😊")
  }
}

consultarProductos()