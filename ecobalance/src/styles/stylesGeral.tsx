import { StyleSheet } from "react-native";


export const coresBase = {
    verdeMedio: '#659E43',
    verdeEscuro: '#2D462E',
    verdeClaro: '2D462E',
    cinza: '#D9D9D9',
    verdeBebe: '#f3faef',
    verdeSaturado: '#2a6906'
}

export const stylesGeral = StyleSheet.create({
    icon: {
       width: 30, 
        height: 30
    },

    tabBarStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#a7c596", // cor de fundo da barra
        height: 85,
        paddingTop: 10,                // altura da barra
        borderTopLeftRadius: 10,    // arredondar cantos
        borderTopRightRadius: 10,
    },

    textInput : {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 100,
        marginBottom: 15,
    },

});