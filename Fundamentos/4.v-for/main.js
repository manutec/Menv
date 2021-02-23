const app = {
    data(){
        return {
            titulo: 'Mi Banco con Vue.js',
            cantidad: 500,
            enlace: 'https://youtube.com',
            estado: true,
            servicios: ['transferencias','pagos','giros','cheques']
        }
    }
};
Vue.createApp(app).mount('#app');

// bucle for 
//se muestran dos formas de realizarlo. La primera es la mas simple, itera la lista 
// muestra el valor. La segunda, muestra también el index de la lista.