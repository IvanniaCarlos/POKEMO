$(document).ready(function() {
    $('#btnBuscar').click(function() {
        let nombrePokemon = $('#campoBuscar').val().toLowerCase();

        // NOS PREGUNTAMOS SI EXISTE O NO ES VACIO
        if (nombrePokemon) {
            buscarPokemon(nombrePokemon);
        };    
    });

    // SOLICITAR POKEMON A LA API
    function buscarPokemon(pokemon) {
        $.ajax({
            type: "GET",
            url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
            dataType: "json",
            success: function (data) {
                renderPokeData(data);
            }
        });

        // LIMPIAMOS EL INPUT
        $('#campoBuscar').val('');
    }

    function renderPokeData(data) {
        // Eliminar el div auxiliar
        $('.card').remove();

        let div = $('<div></div>');
        div.addClass('poke card');

        let name = $('<h3></h3>');
        name.addClass('card-title');
        name.append(data.id + ' ' + data.name.toUpperCase());
        div.append(name);

        let img = $('<img />');
        img.attr('src', data.sprites.other["official-artwork"].front_default);
        img.addClass('card-img');
        div.append(img);

        let body = $('<div></div>');
        body.addClass('card-body');

        // LOGICA PARA MOSTRAR LOS TIPOS
        let pokeType = data.types;
        let tipos = '';

        pokeType.forEach(function(type, index, array) {
            // SI NO ES EL ULTIMO AGREGO GUIÓN
            if (index < array.length - 1) {
                tipos += `${type['type']['name']} - `.toUpperCase();
            }
            else {
                tipos += `${type['type']['name']}`.toUpperCase();
            }
        });

        body.append(`<div>Tipo: ${tipos}</div>`);
        div.append(body);

        $('#pokemon-container').append(div);
    };

    buscarPokemon(1);
});




    function responder(respuesta) {
        if (respuesta === 'Sí') {
          alert('Has seleccionado la opción "Sí"!wow si tuviste infancia amig@¡');
        } else if (respuesta === 'No') {
          alert('Has seleccionado la opción "No" !te falta cultura amig@¡');
        } else {
          alert('Respuesta no reconocida.');
        }
      }

      // ARRAY CON  PALABRAS DE MAS DE 6CARACTERISTICAS

let palabras = [ "pikachu", "BULBASAUR","MACHOKE","VOLTORB","GOLDUCK"];

console.log(palabras.filter(p => p.length > 6));


//STRINGS
let vocales = ['M','A','C','H','O','K',];

console.log(vocales);
vocales.push('E');
console.log(vocales);

let Persona = {
    nombre: 'Diana',
    apellido: 'Carlos',
    edad: 16,
    genero: 'Femenino',
    intereses: ['leer','cantar'],
    bio: function() {
        console.log(`${this.nombre} ${this.apellido} tiene ${this.edad} años.\nSus intereses son: ${this.intereses[0]} y ${this.intereses[1]}.`);
    },
    saludo: function() {
        console.log(`Hola, yo soy ${this.nombre},mucho gusto`);
    }
}

Persona.bio();
Persona.saludo();
