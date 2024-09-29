import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#34434D',
  },
  subtitulo: {
    fontSize: 15,
    color: 'blue',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    paddingStart: 20,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
});

export default styles;
