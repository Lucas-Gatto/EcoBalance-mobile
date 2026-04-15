import { StyleSheet } from 'react-native';
import { coresBase } from './stylesGeral';

export const stylesTelaLogin = StyleSheet.create({
  telaLoginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16
  },
  
  linkEsqueciSenha: {
    marginTop: 20,
    color: "#659E43",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
    alignSelf: "flex-start"
  },

  inputText: {
    alignSelf: 'flex-start',
    color: coresBase.verdeEscuro,
    marginTop: 4,
    marginLeft: 45,
    fontSize: 16,
    fontWeight: '500',
  }
});


