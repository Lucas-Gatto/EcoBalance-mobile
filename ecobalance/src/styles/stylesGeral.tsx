import { StyleSheet } from "react-native";


export const coresBase = {
    verdeMedio: '#659E43',
    verdeEscuro: '#255f27',
    verdeClaro: '#f9fff9',
    cinza: '#D9D9D9',
    verdeBebe: '#f3faef',
    verdeSaturado: '#2a6906'
}

export const stylesGeral = StyleSheet.create({
    icon: {
       width: 34, 
        height: 34
    },

    tabBarStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#a7c596", // cor de fundo da barra
        height: 100,
        paddingTop: 15,                // altura da barra
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

    telaInteira: {
        paddingHorizontal: 28,
        paddingTop: 60,
        paddingBottom: 20,
        flex: 1,
        backgroundColor: coresBase.verdeClaro
    },

    tituloPagina: {
        fontSize: 35,
        fontFamily: "Jost-Bold",
        fontWeight: 900,
        color: coresBase.verdeEscuro
    },

    subTituloPagina: {
        fontFamily: "Jost-bold",
        fontSize: 18,
        marginTop: 15,
        marginLeft: 15,
        color: coresBase.verdeMedio,
        fontWeight: 600,
        marginBottom: 20
    },

    botaoGrande: {
        backgroundColor: coresBase.verdeMedio,
        alignSelf: 'center',
        padding: 10,
        width: '100%',
        height: 55,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    textoBotaogrande: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Jost-Bold',
        fontSize: 20
    }

});