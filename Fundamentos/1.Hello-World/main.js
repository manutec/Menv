const app = {
    data(){
        return {
            titulo: 'Este es un hola mundo con Vue'
        }
    }
};
Vue.createApp(app).mount('#app');
// Partimos de una estructura html5 básica 
// 1. Añadir el cdn de vue.
// 2. Crear un fichero javascript y enlazarlo en index.html justo debajo del titulo.
// 3. Crear en el body un div con un id.
// 4. En el fichero js, crear una constante que contiene un objeto. Ese objeto tiene una  funcion data() que retornará
//     las variables que queramos usar.
// 5. Crear un objeto Vue pasandole un primer argumento en la funcion createApp con la constante creada anteriormente
//     y enlazandolo al div con la funcion mount y pasandole el nombre del id.
// 6. Ahora se podrán recuperar las variables que hemos definido en la función data poniendo por ejemplo un h1 e invocando
//     a la variable {{ nombre-variable }}