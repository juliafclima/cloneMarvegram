import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export const Manutencao = () => {

  const navigation = useNavigation();

  const handleVoltarParaHome = () => {
    navigation.navigate('Home');
  };

  const handleNavigateToMensagem = () => {
    navigation.navigate('Mensagem');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>MARVELGRAM</Text>

        <View style={styles.headerOptions}>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Feather name="message-circle" size={24} color="white" onPress={handleNavigateToMensagem} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.text}>Desculpe, estamos em manutenção.</Text>
        <Text style={styles.text}>Volte em breve!</Text>
      </View>

      <TouchableOpacity onPress={handleVoltarParaHome} style={styles.botaoVoltar}>
        <Text style={styles.textBotao}>Voltar para Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  header: {
    paddingHorizontal: 10,
    marginVertical: 15,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
  },
  headerOptions: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
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
  textBotao: {
    color: 'white',
    fontSize: 16,
  },
});
