
var personaje = {
    nombre: "John Doe",
    edad: 35,
    esFamoso: true,
    peliculas: ["Pelicula 1", "Pelicula 2", "Pelicula 3"],
    habilidades: ["Habilidad 1", "Habilidad 2", "Habilidad 3"],
        saludar: function() {
      console.log("¡Hola! Mi nombre es", this.nombre);
    },
    
    // Método : Obtener información de las películas
    obtenerInformacionPeliculas: function() {
      console.log("Las películas en las que he participado son:");
      for (var i = 0; i < this.peliculas.length; i++) {
        console.log("- ", this.peliculas[i]);
      }
    }
  };
  
  console.log("Nombre:", personaje.nombre);
  console.log("Edad:", personaje.edad);
  console.log("Es famoso:", personaje.esFamoso);
  console.log("Peliculas:", personaje.peliculas);
  console.log("Habilidades:", personaje.habilidades);
  
  personaje.saludar();
  personaje.obtenerInformacionPeliculas();
  //saludar: Este método muestra un saludo en la consola, incluyendo el nombre del personaje. Utiliza la propiedad nombredentro del objeto mediante this.nombre.
//obtenerInformacionPeliculas:peliculasdentro del objeto y muestra cada una de ellas.
  