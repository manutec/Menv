const app = {
    data(){
        return {
            titulo: 'Mi Banco con Vue.js',
            cantidad: 500,
            enlace: 'https://youtube.com',
            estado: true
        }
    }
};
Vue.createApp(app).mount('#app');

// Usamos v-if v-else-if y v-else para mostrar o no una etiqueta si una variables es true o false