import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  topView:{
    flexDirection: 'row',
    borderBottomWidth:1
  },
  logo:{
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginRight: 15
  },
  titles: {
    fontWeight: 'bold',
    marginBottom: 8
  },
  btnTabela:{
    flexDirection: 'row',
    backgroundColor: 'green',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtBtn:{
    fontWeight:'bold',
    color: '#fff',
    marginLeft: 8
  },
  viewBtnSelectRodada:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
  slugRodada:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14
  }
});