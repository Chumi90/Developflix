import peliculas from './peliculas.js'

//Genero de las peliculas: Acción (28), thriller(53), Aventura(12)

//const num_movies = peliculas.length
//console.log(num_movies); // Ya sabemos que tenemos 20 películas

/* Hay que acceder a cada uno de los generos de las películas de Acción */
/* Hay que conocer las posiciones del array donde se encuentra */
//console.log(peliculas[1].genre_ids); //Comprueba que accediendo al primer elemento del array y al genero_id de la película tengo el Género

function pos_action_movies (peliculas){ //Saco la posición donde se encuentran las peliculas de Acción
    let p_action_movies=[];//Creo un array vacío para hacer push cuando encuentre una película del Genero Acción (28)
    for (let i=0; i<peliculas.length;i++){ //Recorreremos el array completo de peliculas
        for(let n=0; n<peliculas[i].genre_ids.length;n++){ //Recorremos el array de los generos de cada película.
            if(peliculas[i].genre_ids[n] == 28){
                p_action_movies.push(i);// Guardo las películas que son de Genero acción
            }
        }
    }
    return p_action_movies;
}
const action_movies = pos_action_movies(peliculas);//Tenemos la posición de las películas de acción
console.log(action_movies);

/* Hay que acceder a cada uno de los generos de las películas de Thriller */
/* Hay que conocer las posiciones del array donde se encuentra */
function pos_thriller_movies (peliculas){ //Saco la posición donde se encuentran las peliculas de Acción
    let p_action_movies=[];//Creo un array vacío para hacer push cuando encuentre una película del Genero Thriller (53)
    for (let i=0; i<peliculas.length;i++){ //Recorreremos el array completo de peliculas
        for(let n=0; n<peliculas[i].genre_ids.length;n++){ //Recorremos el array de los generos de cada película.
            if(peliculas[i].genre_ids[n] == 53){
                p_action_movies.push(i);// Guardo las películas que son de Genero acción
            }
        }
    }
    return p_action_movies;
}
const thriller_movies = pos_thriller_movies(peliculas);//Tenemos la posición de las películas de thriller
console.log(thriller_movies);

/* Hay que acceder a cada uno de los generos de las películas de Aventura */
/* Hay que conocer las posiciones del array donde se encuentra */
function pos_aventura_movies (peliculas){ //Saco la posición donde se encuentran las peliculas de Acción
    let p_action_movies=[];//Creo un array vacío para hacer push cuando encuentre una película del Genero Aventuras (12)
    for (let i=0; i<peliculas.length;i++){ //Recorreremos el array completo de peliculas
        for(let n=0; n<peliculas[i].genre_ids.length;n++){ //Recorremos el array de los generos de cada película.
            if(peliculas[i].genre_ids[n] == 12){
                p_action_movies.push(i);// Guardo las películas que son de Genero acción
            }
        }
    }
    return p_action_movies;
}
const aventuras_movies = pos_aventura_movies(peliculas);//Tenemos la posición de las películas de aventuras
console.log(aventuras_movies);

/* probando para acceder a la carpeta
document.addEventListener("DOMContentLoaded", function() {
    console.log("El script.js ha sido cargado correctamente.");
});
*/
const elemento = document.getElementById('genero-28');