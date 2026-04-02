import { BotaoRetornar } from "@/src/components/botaoRetornar";
import { RootStackParamList } from "@/src/navigation/stackNavigator";
import { stylesGeral } from "@/src/styles/stylesGeral";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function ResultadoCalculo (){

    const [resultadoCalculo] = useState('')
    const [resultadoAlimentos] = useState('')
    const [resultadoGas] = useState('')
    const [resultadoVeiculos] = useState('')

const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={stylesGeral.telaInteira}>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
            <BotaoRetornar onPress={() => navigation.goBack()}/>
            <Text style={stylesGeral.tituloPagina}>Resultado:</Text>
            </View>

            <View>
                <Text style={[stylesGeral.subTituloPagina, {marginTop: 40, fontWeight: 900, fontSize: 25}]}>Resultado Total:{resultadoCalculo}</Text>
                <View>
                    <Text style={[stylesGeral.inputText, {fontWeight: '700', marginBottom: 5, fontSize: 17, marginLeft: 20}]}>Valores por área:</Text>
                    <Text style={[stylesGeral.inputText, {fontWeight: '700', marginBottom: 5, fontSize: 17, marginLeft: 20}]}>Alimentos: {resultadoAlimentos}</Text>
                    <Text style={[stylesGeral.inputText, {fontWeight: '700', marginBottom: 5, fontSize: 17, marginLeft: 20}]}>Gás: {resultadoGas}</Text>
                    <Text style={[stylesGeral.inputText, {fontWeight: '700', marginBottom: 5, fontSize: 17, marginLeft: 20}]}>Veiculos: {resultadoVeiculos}</Text>
                </View>
            </View>

            <View>
                <Text style={[stylesGeral.subTituloPagina, {marginTop: 40, fontWeight: 900, fontSize: 25}]}>Valores Mundiais:</Text>
                <View>
                    <Text style={[stylesGeral.inputText, {fontWeight: '700', marginBottom: 5, fontSize: 17, marginLeft: 20}]}>Valores por área:</Text>
                    <Text style={[stylesGeral.inputText, {fontWeight: '700', marginBottom: 5, fontSize: 17, marginLeft: 20}]}>Alimentos: </Text>
                    <Text style={[stylesGeral.inputText, {fontWeight: '700', marginBottom: 5, fontSize: 17, marginLeft: 20}]}>Gás: </Text>
                    <Text style={[stylesGeral.inputText, {fontWeight: '700', marginBottom: 5, fontSize: 17, marginLeft: 20}]}>Veiculos: </Text>
                </View>
            </View>
        </View>
    )
}