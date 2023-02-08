
const carritoCelulares=[
    {
        id:1,
        img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone12-202209?wid=680&hei=528&fmt=jpeg&qlt=90&.v=1661958189616",
        nombre:"Iphone 12",
        color:"violeta",
        precio:331849,
        stock:1
    },
    {
        id:2,
        img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphonese-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1646415838921",
        nombre:"Iphone SE",
        color:"Negro",
        precio:354299,
        stock:1
    },
    {
        id:3,
        img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone13-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1661958176452",
        nombre:"Iphone 13",
        color:"Verde Oscuro",
        precio:410849,
        stock:1
    },
    {
        id:4,
        img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1663611329492",
        nombre:"Iphone 14 Pro",
        color:"Violeta",
        precio:667820,
        stock:1
    },
    {
        id:5,
        img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1661958160674",
        nombre:"Iphone 14",
        color:"Celeste",
        precio:472999,
        stock:1
    },
    {
        id:6,
        img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-pro-202210?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1664578794100",
        nombre:"Ipad Pro",
        color:"Negro",
        precio:385999,
        stock:1
    },
    {
        id:7,
        img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-air-202203?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1674662574485",
        nombre:"Ipad Air",
        color:"Violeta",
        precio:557999,
        stock:1
    },
    {
        id:8,
        img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-ipad-mini-202109?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1674662574477",
        nombre:"Ipad Mini",
        color:"Violeta",
        precio:288218,
        stock:1
    },
    {
        id:9,
        img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-ipad-202109?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1674662574498",
        nombre:"Ipad (9th Generation)",
        color:"Blanco",
        precio:174999,
        stock:1
    },
    {
        id:10,
        img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-card-40-ipad-202210?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1665519729404",
        nombre:"Ipad (10th Generation)",
        color:"Rosa",
        precio:290999,
        stock:1
    }
]
let carrito = [];
const contenedor = document.querySelector('#contenedor')
const carritoContenedor = document.querySelector('#carritoContenedor')
const vaciarCarrito = document.querySelector('#vaciarCarrito')
const precioTotal= document.querySelector('#precioTotal')
const procesarCompra = document.querySelector('#procesarCompra')
const activarFuncion = document.querySelector('#activarFuncion')
const totalProceso = document.querySelector('#totalProceso')
const buttonFinalizarCompra = document.querySelector('#buttonn')
if(activarFuncion)
{
    activarFuncion.addEventListener('click', procesarPedido)
}





document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    mostrarCarrito()

    document.querySelector('#activarFuncion').click(procesarPedido)
})


    carritoCelulares.forEach((prod) =>
    {
        const {id,nombre ,precio, img, stock,color}= prod
        if(contenedor)
        {
            contenedor.innerHTML += 
            `
                <div class="card">
                    <img src="${img}" class="card-img-top mt-2 " alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${nombre}</h5>
                            <p class="card-text">Precio: $ ${precio}</p>
                            <p class="card-text">Color: ${color}</p>
                            <p class="card-text">Cantidad: ${stock}</p>
                            <button onclick="agregarProducto(${id})" class="btn btn-primary">Agregar al carrito</button>
                        </div>
                </div>
            `
        }
        
    }) 


    


if(procesarCompra)
{
    procesarCompra.addEventListener('click', ()=>{
        if(carrito.length==0)
        {
            Swal.fire({
                title: 'Oops... Tu carrito esta vacio!',
                text: 'Agrega algo al carrito para continuar con la compra',
                icon: 'error',
                confirmButtonText: "aceptar",
            })
        }else
        {
            location.href = "compra.html";
            procesarPedido();
        }
    
    
    })
}
if(vaciarCarrito)
{
    vaciarCarrito.addEventListener('click', ()=>{
        carrito.length= [];
        mostrarCarrito();
    })
}

function agregarProducto (id) {

    const existe = carrito.some((prod) => prod.id === id)

    if(existe){
        const prod = carrito.map(prod=>{
            if(prod.id == id)
            {
                prod.stock++
            }
        })
    }else
    {
        const item = carritoCelulares.find((prod) => prod.id === id)
        carrito.push(item)
        
    }

    mostrarCarrito();


}

const mostrarCarrito = ()=>{
    const modalBody = document.querySelector('.modal .modal-body')
    if(modalBody)
    {
        modalBody.innerHTML= '';
    carrito.forEach((producto) =>{
        const {id,nombre ,precio, img, stock,color}= producto
        modalBody.innerHTML+= 
        `
            <div class="modal-contenedor">
                <div>
                    <img class="img-fluid img-carrito" src="${img}" >
                
                </div>
                <div>
                
                <p>Producto:${nombre} </p>
                <p>Precio:${precio} </p>
                <p>Color:${color} </p>
                <p>Cantidad:${stock} </p>
                <button onclick="eliminarProducto( ${id})" class="btn btn-danger">Eliminar producto</button>
                </div>
            
            
            
            
            </div>

        `
        
    })
    }
    
    if(carrito.length=== 0)
    {
        modalBody.innerHTML= ` 
        <p class="text-center text-primary parrafo"> Aun no agregaste nada.</p>
        `
    }else
    {

    }
    carritoContenedor.textContent= carrito.length
    if(precioTotal)
    {
        precioTotal.innerText= carrito.reduce((acc, prod) => acc + prod.stock * prod.precio, 0)
    }
    
    guardarStorage();
}

function eliminarProducto(id) {
    const juegoId= id;
    carrito= carrito.filter((juego)=> juego.id !== juegoId);
    mostrarCarrito();
    
}

function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function procesarPedido() {
    carrito.forEach((prod)=>{
        const listaCompra= document.querySelector('#lista-compra tbody')
        const {id,nombre ,precio, img, stock}= prod

        const row = document.createElement('tr')
        row.innerHTML +=`
                            <td>
                                <img class="img-fluid img-carrito " src="${img}" />
                            </td>
                            <td>${nombre}</td>
                            <td>${precio}</td>
                            <td>${stock}</td>
                            <td>${precio * stock}</td>
        
        
                        `

                        listaCompra.appendChild(row)

    })

    totalProceso.innerText= carrito.reduce((acc, prod) => acc + prod.stock * prod.precio, 0)
    buttonFinalizarCompra.addEventListener('click', () =>{
        Swal.fire({
            icon: 'success',
            title: 'Excelente...Su compra se ha realizado correctamente',
            html:
    
    '<a href="index.html">Regresar al menu</a> ' 
   
        })
    })

    localStorage.clear();
}


