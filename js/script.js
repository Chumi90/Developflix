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
const elem_gen_28 = document.getElementById('genero-28');
//console.log(elem_gen_28);
const elem_gen_53 = document.getElementById('genero-53');
//console.log(elem_gen_53);
const elem_gen_12 = document.getElementById('genero-12');
//console.log(elem_gen_12);

/**Creamos un Article para meter dentro de este una imagen y un texto (a), cada película tendrá su Article */
//Vamos a usar la función create element para luego utilizar un text content
//Con las posiciones vamos a recorrer el array de estructuras y obtener la imagen (poster_path) y el título (original_title)
const route='https://image.tmdb.org/t/p/w500';
for (let i=0;i<action_movies.length;i++){
    const article_movies= document.createElement('article'); //Creamos un articulo
    const img_movies = document.createElement('img'); //Creamos una imagen
    const a_title=document.createElement('a'); //Creamos un párrafo para indicar el título
    article_movies.textContent=''; //Dejamos vacío el articulo dado que será con lo que hagamos un Display Flex
    elem_gen_28.appendChild(article_movies); //Agregamos el Articulo a div de genero
    //console.log(peliculas[action_movies[i]].poster_path);
    img_movies.src=route+peliculas[action_movies[i]].poster_path; //Introducimos la imagen en el src del HTML
    img_movies.title=peliculas[action_movies[i]].original_title; //Introducimos el título original a la etiqueta img
    article_movies.appendChild(img_movies); //Hacemos que las imágenes sean el hijo de nuestro articulo
    a_title.textContent=peliculas[action_movies[i]].title; //Introducimos el título de la película en un párrafo
    a_title.href=route+peliculas[action_movies[i]].poster_path;
    article_movies.appendChild(a_title); //Hacemos que el <a> del título sea el hijo del articulo
}

for (let i=0;i<thriller_movies.length;i++){
    const article_movies= document.createElement('article'); //Creamos un articulo
    const img_movies = document.createElement('img'); //Creamos una imagen
    const a_title=document.createElement('a'); //Creamos un párrafo para indicar el título
    article_movies.textContent=''; //Dejamos vacío el articulo dado que será con lo que hagamos un Display Flex
    elem_gen_53.appendChild(article_movies); //Agregamos el Articulo a div de genero
    //console.log(peliculas[action_movies[i]].poster_path);
    img_movies.src=route+peliculas[thriller_movies[i]].poster_path; //Introducimos la imagen en el src del HTML
    img_movies.title=peliculas[thriller_movies[i]].original_title; //Introducimos el título original a la etiqueta img
    article_movies.appendChild(img_movies); //Hacemos que las imágenes sean el hijo de nuestro articulo
    a_title.textContent=peliculas[thriller_movies[i]].title; //Introducimos el título de la película en un párrafo
    a_title.href=route+peliculas[thriller_movies[i]].poster_path;
    article_movies.appendChild(a_title); //Hacemos que el párrafo del título sea el hijo del articulo
}

for (let i=0;i<aventuras_movies.length;i++){
    const article_movies= document.createElement('article'); //Creamos un articulo
    const img_movies = document.createElement('img'); //Creamos una imagen
    const a_title=document.createElement('a'); //Creamos un párrafo para indicar el título
    article_movies.textContent=''; //Dejamos vacío el articulo dado que será con lo que hagamos un Display Flex
    elem_gen_12.appendChild(article_movies); //Agregamos el Articulo a div de genero
    //console.log(peliculas[action_movies[i]].poster_path);
    img_movies.src=route+peliculas[aventuras_movies[i]].poster_path; //Introducimos la imagen en el src del HTML
    img_movies.title=peliculas[aventuras_movies[i]].original_title; //Introducimos el título original a la etiqueta img
    article_movies.appendChild(img_movies); //Hacemos que las imágenes sean el hijo de nuestro articulo
    a_title.textContent=peliculas[aventuras_movies[i]].title; //Introducimos el título de la película en un párrafo
    a_title.href=route+peliculas[aventuras_movies[i]].poster_path;
    article_movies.appendChild(a_title); //Hacemos que el párrafo del título sea el hijo del articulo
}