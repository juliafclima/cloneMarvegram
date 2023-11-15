import { StyleSheet, View, Text } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>MARVELGRAM</Text>
        <View style={styles.headerOptions}>
          <AntDesign name="hearto" size={24} color="black" />
          <Feather name="message-circle" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 10,
    marginTop: 10,
    height: 56,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerOptions: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  }
});
