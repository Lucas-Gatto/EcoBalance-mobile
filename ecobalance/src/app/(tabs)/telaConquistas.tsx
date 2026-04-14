import { fonte } from "@/src/styles/fontes";
import React from "react";
import { View, Text, Image, FlatList, Touchable, TouchableOpacity } from "react-native";
import { StylesTelaConquistas } from "../../styles/telaConquistasStyles";
import { stylesGeral } from "@/src/styles/stylesGeral";

const conquistas = [
    {
        id: 1,
        titulo: "Primeiro teste",
        descricao: "Realizou seu primeiro teste de pegada de carbono",
        imagem: require("../../assets/trofeu.png"),
        desbloqueado: false,
    },
    {
        id: 2,
        titulo: "Primeira Redução",
        descricao: "Reduziu sua pegada de carbono pela primeira vez",
        imagem: require("../../assets/trofeu.png"),
        desbloqueado: false,
    },
    {
        id: 3,
        titulo: "1º Mês Sustentável",
        descricao: "Manteve uma pegada de carbono reduzida por um mês",
        imagem: require("../../assets/trofeu.png"),
        desbloqueado: false,
    },
    {
        id: 4,
        titulo: "3º Mês Sustentável",
        descricao: "Manteve uma pegada de carbono reduzida por três meses",
        imagem: require("../../assets/trofeu.png"),
        desbloqueado: false,
    },
];

export default function TelaConquistas() {
    return (
        <View style={stylesGeral.telaInteira}>
            <View style={StylesTelaConquistas.cabecalho}>
                <Image source={require("../../assets/trofeu.png")} style={stylesGeral.icones} />
                <Text style={stylesGeral.tituloPagina}>Conquistas</Text>
            </View>
            <View>
                <Text>Últimas Conquistas</Text>
                <TouchableOpacity>
                    <Text style={fonte.subtitulo}>Ver todas</Text>
                </TouchableOpacity>
                <FlatList
                    data={conquistas}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginVertical: 10,
                                opacity: item.desbloqueado ? 1 : 0.4, // cinza se bloqueado
                            }}
                        >
                            <Image
                                source={item.imagem}
                                style={{ width: 40, height: 40, marginRight: 10 }}
                            />
                            <View>
                                <Text style={{ fontWeight: "bold" }}>{item.titulo}</Text>
                                <Text>{item.descricao}</Text>
                            </View>
                        </View>
                    )}
                />

            </View>

        </View>

    );
}