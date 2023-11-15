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
    height: 115,
    alignContent: 'center',
  },
  storiesCard: {
    alignContent: 'center',
    borderWidth: 2,
    borderColor: '#f7855a',
    borderRadius: 50,
  },
  storiesCardImage: {
    width: 64,
    height: 64,
    borderRadius: '50%'
  }
});
