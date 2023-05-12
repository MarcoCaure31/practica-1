var cocaCola = ['3lt', '2lt', '500ml', '300ml'];
var precio = [13, 10, 5, 3];

if (cocaCola.length !== precio.length) {
  console.log('Los arrays no tienen la misma longitud');
} else {
  for (var i = 0; i < cocaCola.length; i++) {
    var producto = cocaCola[i];
    var precioProducto = precio[i];
    console.log('El precio de la CocaCola de', producto, 'es de', precioProducto + 'bs');
  }
}
