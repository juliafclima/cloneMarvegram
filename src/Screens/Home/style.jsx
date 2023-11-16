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
    height: 114,
    width: '100%',
    paddingLeft: 10,
    paddingVertical: 10,
    alignContent: 'center',
  },
  storiesCard: {
    marginRight: 14,
    textAlign: 'center',
  },
  storiesCardImage: {
    borderWidth: 2,
    borderColor: '#f7855a',
    width: 64,
    height: 64,
    borderRadius: 50,
  },
  storiesCardNome: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 3,
    fontWeight: 200,
  },
  content: {
    width: '100%',
    marginVertical: 15,
  },
  contentHeader: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  contentHeaderPoints: {
    flexDirection: 'row',
    gap: 3,
  },
  contentHeaderLeft: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  contentHeaderLeftText: {
    color: "#fff",
  },
  contentImage: {
    width: "100%",
    height: 300,
  },
  contentFooter: {
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 4,
  },
  contentFooterLeft: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
});
