class Producto{
  constructor(tipo, nombre, tamanio, precio){
      this.tipo = tipo;
      this.nombre = nombre;
      this.tamanio = tamanio;
      this.precio = precio;
  }
}	

let productos = JSON.parse(localStorage.getItem("productos")) ?? [];
document.getElementById("formulario-producto").addEventListener("submit", agregarProducto);
          

function agregarProducto(e) {
  e.preventDefault();
  const formulario = new FormData(e.target);
  const tipo = formulario.get("tipo");
  const nombre = formulario.get("nombre");
  const tamanio = formulario.get("tamanio");
  const precio = formulario.get("precio");
  const producto = new Producto(tipo, nombre, tamanio, precio);
 if(camposCorrectos(producto)) {
  productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarProductos();
    e.target.reset();
 }
}
  
function mostrarProductos() {
let listadoProductos = document.getElementById("listadoProductos");
listadoProductos.innerHTML = "";

productos.forEach((producto) => {
  let li = document.createElement("li");
  li.innerHTML = `
  <hr> 
  ${producto.tipo} - 
  ${producto.nombre && producto.nombre + " - "}
  ${producto.tamanio && producto.tamanio + " - "}
  ${producto.precio && producto.precio + " soles"}`;

  const botonBorrar = document.createElement("button");
  botonBorrar.innerText = "Borrar";
  botonBorrar.classList.add("btn", "btn-danger");
  botonBorrar.addEventListener("click", () => {
    eliminarProducto(producto);
  });
  li.appendChild(botonBorrar);
  li.classList.add("card");
    li.setAttribute("data-tilt","");/* le da la capacidad de ser un item que se mueva */
    li.setAttribute("data-tilt-scale", "1.1");/* escala */


  listadoProductos.appendChild(li);
});
}


function eliminarProducto(producto) {
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    productos = productos.filter(item => item.tipo != producto.tipo);
    localStorage.setItem("productos", JSON.stringify(productos));
    mostrarProductos();
    Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
  }
});
}

mostrarProductos();