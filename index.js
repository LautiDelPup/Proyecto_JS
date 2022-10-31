let nombre = prompt("Bienvenid@ a mi sitio de comida rapida, cual es tu nombre?")

let producto = parseInt(prompt(`Hola ${nombre} escoge el producto que deseas comprar: 1.Hamburguesa - 2.Pizza - 3.Papas fritas - 4-Torpedo`))

let totalCompra = 0
let seguirComprando = true
let decision
while (seguirComprando === true) {
    if (producto === 1) {
        totalCompra = totalCompra + 800
    } else if (producto === 2) {
        totalCompra = totalCompra + 1000
    } else if (producto === 3) {
        totalCompra = totalCompra + 450
    } else if (producto === 4) {
        totalCompra = totalCompra + 1250
    } else {
        producto = parseInt(prompt("Escoge un producto de la lista : 1. Hamburguesa - 2. Pizza - 3. Papas fritas - 4. - Torpedo"))
        continue
    }
    decision = parseInt(prompt("Quieres seguir comprando? 1.SI - 2.NO"))
    if (decision === 1) {
        producto = parseInt(prompt("Escoge el producto que deseas comprar: 1.Hamburguesa - 2.Pizza - 3.Papas fritas - 4-Torpedo"))
    } else {
        seguirComprando = false
    } 
}
function descuento(totalCompra) {
    let resultado = totalCompra * 0.9
    alert(`${nombre} Gracias por su compra.Te regalamos un 10% de descuento en tu compra y el total es $ ${resultado}`)
}

if (totalCompra >= 2200) {
    descuento(totalCompra)

} else {

    alert(`${nombre} El total de tu compra es ${totalCompra}`)
}
