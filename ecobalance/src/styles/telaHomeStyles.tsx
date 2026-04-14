import { StyleSheet } from 'react-native';
import { coresBase, stylesGeral } from './stylesGeral';

export const StylesTelaHome = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderColor: coresBase.verdeMedio,
        borderRadius: 50,
        marginRight: 15,
    },
    cabecalho: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        marginBottom: 20,

    }
});


