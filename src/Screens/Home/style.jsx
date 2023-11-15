import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 10,
    marginTop: 10,
    height: 56,
    width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerOptions: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  stories: {
    width: '100%',
    paddingLeft: 10,
    alignContent: 'center',
  },
  storiesCard: {
    marginRight: 14,
    textAlign: 'center'
  },
  storiesCardImage: {
    borderWidth: 2,
    padding: 2,
    borderColor: '#f7855a',
    width: 64,
    height: 64,
    borderRadius: '50%'
  },
  storiesCardNome: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 3,
  }
});
