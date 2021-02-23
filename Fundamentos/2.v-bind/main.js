const app = {
    data(){
        return {
            cantidad: 1000,
            enlace: 'https://youtube.com'
        }
    }
};
Vue.createApp(app).mount('#app');

// Aqui se muestra como podemos crear contenido javascript dentro de las llaves {{}}
// para ello creamos una variable cantidad y hacemos una operacion ternaria
// Si por el contrario, queremos mostrar esa variable en un atributo de una etiqueta html 
// por ejemplo un enlace, no podremos usar <a href="{{ variable }}"></a>
// tendremos que usar v-bind o la forma abreviada :
// https://bluuweb.github.io/vue-udemy/01-fundamentos/#llaves-dobles