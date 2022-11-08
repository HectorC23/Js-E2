class Pizza {
    constructor(id, nombre,ingredientes,precio){
        this.id = id
        this.nombre = nombre
        this.ingredientes = ingredientes
        this.precio = precio
    }
}
let pizza1 = new Pizza (1, "Pizza nucbaZappi", ["salsa de tomate", "oregano", "aceitunas","queso mozarela"], 200)
let pizza2 = new Pizza (2, "Pizza cuatro quesos", ["salsa de tomate", "oregano", "aceitunas","queso mozarela", "queso gorgonzola", "queso fontina", "queso parmesano"], 400)
let pizza3 = new Pizza (3, "Pizza fugazzeta", ["salsa de tomate", "oregano", "aceitunas","queso mozarela", "cebolla"], 600)
let pizza4 = new Pizza (4, "Pizza con jamon", ["salsa de tomate", "oregano", "aceitunas","queso mozarela", "jamon"], 800)
let pizza5 = new Pizza (5, "Pizza calabresa", ["salsa de tomate", "oregano", "aceitunas","queso mozarela", "queso provolone", "morron", "calabresa"], 1000)
let pizza6 = new Pizza (6, "Pizza napolitana", ["salsa de tomate", "oregano", "aceitunas","queso mozarela", "tomate fresco", "anchoas", "orégano", "alcaparras", ], 1200)

const arrayDePizzas = [pizza1, pizza2, pizza3, pizza4, pizza5, pizza6]

const contenedor = document.getElementById("cont")
const form = document.getElementById("form")
const boton = document.getElementById("btn")
const input = document.getElementById("input")


form.addEventListener("submit", (e) => {
    e.preventDefault();
})

const verificarELImput = () =>  {

    let valorInput = input.value;
    
    const min = 1;
    const max = 6;
    if (valorInput === "") {
        contenedor.innerHTML = `
        <h2> ERROR </h2>

        <h3> NO INGRESO NINGUN VALOR  </h3>
        `
    } else if (valorInput < min || valorInput > max) {
        contenedor.innerHTML = `
        <h2> ERROR </h2>

        <h3> INGRESE UN VALOR ENTRE ${min} y ${max} </h3>
        `
    } else {

        let pizzaAgregar = arrayDePizzas[valorInput-1];
        contenedor.innerHTML = `
    
        <h2> ${pizzaAgregar.nombre} </h2>
    
        <h3> $ ${pizzaAgregar.precio} </h3>
        
        `
        console.log(arrayDePizzas[2]);
    }
}

boton.addEventListener("click", () => {
    verificarELImput();
})
