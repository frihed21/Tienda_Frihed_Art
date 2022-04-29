class Producto{
    constructor(tipo, nombre, tamanio, precio){
        this.tipo = tipo;
        this.nombre = nombre;
        this.tamanio = tamanio;
        this.precio = precio;
    }
}


let nombreUsuario;
document.getElementById("idform").addEventListener("submit", realizFormularioUsuario);

function realizFormularioUsuario(e) {
  e.preventDefault();
  nombreUsuario = document.getElementById("user").value;

  let listadoProductos = document.getElementById("listadoProductos");
  const productos = JSON.parse(localStorage.getItem(nombreUsuario));

  if (productos == null) {
    listadoProductos.innerHTML = "<h1>No hay productos para mostrar</h1>"
  } else {
    mostrarProductos(productos);
  }
  mostrarPanel();
  e.target.reset()
}

function mostrarProductos(productos) {
  let listadoProductos = document.getElementById("listadoProductos");
  listadoProductos.innerHTML = "";

  productos.forEach(producto => {
    let li = document.createElement("li");
    li.innerHTML = `<hr> ${producto.tipo} - ${producto.nombre} - ${producto.tamanio} - ${producto.precio} soles`;
    
    const botonBorrar = document.createElement("button");
    botonBorrar.innerText = "Borrar";
    botonBorrar.addEventListener("click", () => {
      eliminarProducto(producto);
    })
    li.appendChild(botonBorrar);
    
    listadoProductos.appendChild(li);
  });
}

function mostrarPanel() {
  const opciones = document.getElementById("opciones");

  opciones.innerHTML =
    `<h3>Bienvenido ${nombreUsuario}</h3>
    <form id="formulario-producto">
      <input type="text" id="tipo" placeholder="Tipo">
      <input type="text" id="nombre" placeholder="Nombre">
      <input type="text" id="tamanio" placeholder="Tamanio">
      <input type="number" id="precio" placeholder="Precio">
      <button type="submit">Agregar producto</button>
    </form>`;

  document.getElementById("formulario-producto").addEventListener("submit", agregarProducto);
}

function agregarProducto(e) {
  e.preventDefault();
  const tipo = document.getElementById("tipo").value;
  const nombre = document.getElementById("nombre").value;
  const tamanio = document.getElementById("tamanio").value;
  const precio = document.getElementById("precio").value;
  
  const producto = new Producto(tipo, nombre, tamanio, precio);

  const productosEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));
  if (productosEnLocalStorage == null) {
    localStorage.setItem(nombreUsuario, JSON.stringify([producto]));
    mostrarProductos([producto]);
  } else {
    productosEnLocalStorage.push(producto);
    localStorage.setItem(nombreUsuario, JSON.stringify(productosEnLocalStorage));
    mostrarProductos(productosEnLocalStorage);
  }
  e.target.reset();
}

function eliminarProducto(producto) {
  const productosEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));
  const nuevoArray = productosEnLocalStorage.filter(item => item.nombre != producto.nombre);
  localStorage.setItem(nombreUsuario, JSON.stringify(nuevoArray));
  mostrarProductos(nuevoArray);
}