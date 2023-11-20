import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  mensagemUsuario: {
    alignSelf: 'flex-end',
    backgroundColor: '#3498db',
    borderRadius: 8,
    margin: 8,
    padding: 10,
    maxWidth: '70%',
  },
  mensagemOutro: {
    alignSelf: 'flex-start',
    backgroundColor: '#5ea8da',
    borderRadius: 8,
    margin: 8,
    padding: 10,
    maxWidth: '70%',
  },
  textoMensagem: {
    color: 'white',
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  botaoEnviar: {
    backgroundColor: '#2ecc71',
    borderRadius: 20,
    padding: 10,
  },
  textoBotaoEnviar: {
    color: 'white',
    fontWeight: 'bold',
  },
});