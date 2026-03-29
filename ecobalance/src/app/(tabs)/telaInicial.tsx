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

  const slides = [
    { imagem: require("../../assets/frame1.png"), texto: "Entenda seu impacto" },
    { imagem: require("../../assets/arvore.png"), texto: "Conquiste!" }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={stylesTelaInicial.container}>

      {/* Carrossel de imagens */}
      <Text style={fonte.titulo}>{slides[index].texto}</Text>
      <Image source={slides[index].imagem} style={stylesTelaInicial.imagem} />
       

      {/* Botões */}
      <BotaoCriarConta onPress={handleCriarConta} />
      <LinkTenhoConta />
    </View>
  );
}


