import { BotaoCriarConta } from "../../components/botaoCriarConta";
import { LinkTenhoConta } from "../../components/linkTenhoConta";
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/stackNavigator";
import { stylesTelaInicial } from "../../styles/telaInicialStyles";
import { fonte } from "../../styles/fontes";

type NavigationProp = StackNavigationProp<RootStackParamList, "TelaCadastro">;

export default function TelaInicial() {
  const navigation = useNavigation<NavigationProp>();

  const handleCriarConta = () => {
    navigation.navigate("TelaCadastro");
  };

  const imagens = [
    require("../../assets/frame1.png"),
    require("../../assets/arvore.png"),
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 5000); // troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={stylesTelaInicial.container}>
      <Text style={fonte.titulo}>Olá, esta é a tela inicial!</Text>

      {/* Carrossel de imagens */}
      <Image source={imagens[index]} style={stylesTelaInicial.imagem} />

      {/* Botões */}
      <BotaoCriarConta onPress={handleCriarConta} />
      <LinkTenhoConta />
    </View>
  );
}


