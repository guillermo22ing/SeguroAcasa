import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({


container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Añadido un padding general
},

titulo: {
    fontSize: 32, // Ajustado el tamaño para que sea más apropiado
    fontWeight: 'bold',
    color: '#3B53F7',
    marginBottom: 20, // Espacio debajo del título
},

subtitulo: {
    fontSize: 16,
    color: '#3B53F7',
    marginBottom: 20,
},

textInput: {
    borderWidth: 1,
    borderColor: '#3B53F7',
    padding: 10,
    paddingStart: 20,
    width: '100%', // Cambiado a 100% para ocupar el ancho completo
    height: 50,
    marginBottom: 15, // Espacio entre inputs
    borderRadius: 5,
    backgroundColor: '#fff',
},

image: {
    // Estilos para imágenes (puedes ajustar según necesites)
    width: 100, // Ejemplo de ancho
    height: 100, // Ejemplo de alto
    marginBottom: 20, // Espacio debajo de la imagen (opcional)
},

button: {
    width: '30%', 
    height: 40,
    backgroundColor: '#3B53F7', 
    borderRadius: 5,
    justifyContent: 'center', // Centra el contenido
    alignItems: 'center', // Centra el texto
    marginTop: 15,
},

buttonText: {
    color: 'white', // Color del texto del botón
    fontWeight: 'bold',
},
});

export default styles;

