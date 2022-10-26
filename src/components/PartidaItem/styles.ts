import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: '#fff'
  },
  textData:{
    textAlign: 'center',
    color: '#aaa'
  },
  viewConfronto:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoTime:{
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  slugTime:{
    fontWeight: 'bold',
  },
  slugPlacar:{
    fontWeight: 'bold',
    fontSize: 25,
    color: 'green'
  }
});