import { stylesGeral } from "@/src/styles/stylesGeral";
import React from "react";
import { View, Text, FlatList } from "react-native";
import { StylesTelaHome } from "../../styles/telaHomeStyles";
import { Image } from "react-native";
import { fonte } from "@/src/styles/fontes";
import Conquistas from "./telaConquistas";

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

const niveis = [
    {
        id: 1,
        imagemNivel: require("../../assets/nivel.png"),
        desbloqueado: false,
    }
];

export default function home() {
    return (
        <View style={stylesGeral.telaInteira}>
            <View>
                <Text>Bem vindo ao EcoBalance</Text>
            </View>
            <View style={StylesTelaHome.cabecalho}>
                <Image source={require("../../assets/avatar.png")} style={StylesTelaHome.avatar} />
                <Text style={fonte.titulo}>Olá, usuário!</Text>
            </View>
            <FlatList

                data={niveis}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false}
                renderItem={({ item }) => (
                    <View
                        style={{

                            justifyContent: "center",
                            alignContent: "center",
                            alignItems: "center",

                        }}
                    >
                        <Image
                            source={item.imagemNivel}
                            style={{ width: 200, height: 110, marginBottom: 10 }}
                        />

                    </View>
                )}
            />
            <View>
                <Text style={fonte.titulo}>Últimas Conquistas</Text>
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