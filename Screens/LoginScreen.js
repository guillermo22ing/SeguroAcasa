import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../Styles/styles'; // Asegúrate de que esta sea la ruta correcta de los estilos

const LoginScreen = ({ navigation }) => {
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

      {/* Botón que navega a la pantalla de Home */}
      <Button title="Iniciar sesión" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default LoginScreen;
