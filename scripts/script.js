document.querySelector('.boton-buscar').addEventListener('click', function(){
    document.querySelector('.links').classList.toggle('desactivar')
    document.querySelector('.buscador-header').classList.toggle('activo');
    document.querySelector('.contenedor-tabla').classList.toggle('off');
})

const header = document.querySelector(".header-links")
const abrir = document.querySelector(".abrir-header")
const cerrar = document.querySelector(".cerrar-header")

abrir.addEventListener("click", () =>{
    header.classList.add("visible");
})

cerrar.addEventListener("click", () =>{
    header.classList.remove("visible");
})

document.addEventListener("keyup", e=>{
    if(e.key==="Escape")e.target.value=""
    if(e.target.matches("#buscador")){
        document.querySelectorAll(".articuloBuscador").forEach(itemBuscador=>{
            itemBuscador.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?itemBuscador.classList.remove("filtro")
            :itemBuscador.classList.add("filtro")
        })
    }
})