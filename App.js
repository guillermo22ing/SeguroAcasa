import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './Styles/styles'; // Asegúrate de que esta sea la ruta correcta de los estilos

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <StatusBar style="dark" />

      <TextInput
        placeholder="Correo electrónico"
        style={styles.textInput}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.textInput}
        secureTextEntry
      />

      <Text>No tienes cuenta? Registrarse</Text>

      {/* Botón que no navega, solo muestra un mensaje */}
      <Button title="Iniciar ssssss" onPress={() => alert('Iniciar sesión presionado')} />
    </View>
  );
};

export default Login;

