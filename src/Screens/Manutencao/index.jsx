import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const Manutencao = () => {

  const navigation = useNavigation();

  const handleVoltarParaHome = () => {
    navigation.navigate('Home');
  };

  const handleNavegarParaMensagem = () => {
    navigation.navigate('Mensagem');
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.textoCabecalho}>MARVELGRAM</Text>

        <View style={estilos.opcoesCabecalho}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Feather name="message-circle" size={24} color="white" onPress={handleNavegarParaMensagem} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={estilos.containerConteudo}>
        <Text style={estilos.texto}>Desculpe, estamos em manutenção.</Text>
        <Text style={estilos.texto}>Volte em breve!</Text>
      </View>

      <TouchableOpacity onPress={handleVoltarParaHome} style={estilos.botaoVoltar}>
        <Text style={estilos.textoBotao}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  cabecalho: {
    paddingHorizontal: 10,
    marginVertical: 15,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textoCabecalho: {
    color: 'white',
  },
  opcoesCabecalho: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  containerConteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  botaoVoltar: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#405DE6',
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
  },
});