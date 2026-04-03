import { BotaoRetornar } from "@/src/components/botaoRetornar";
import { RootStackParamList } from "@/src/navigation/stackNavigator";
import { stylesGeral } from "@/src/styles/stylesGeral";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";

export default function ResultadoCalculo (){
const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
const route = useRoute<RouteProp<RootStackParamList, "ResultadoCalculo">>();
const { teste, rotinaNome } = route.params;

    return (
        <View style={stylesGeral.telaInteira}>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
            <BotaoRetornar onPress={() => navigation.goBack()}/>
            <Text style={stylesGeral.tituloPagina}>Resultado:</Text>
            </View>

            <View>
                <Text style={[stylesGeral.subTituloPagina, {marginTop: 40, fontWeight: 900, fontSize: 25}]}>Resultado Total: {teste.emissaoTotal}</Text>
                <View>
                    <Text style={[stylesGeral.inputText, {fontWeight: '700', marginBottom: 5, fontSize: 17, marginLeft: 20}]}>Valores por área:</Text>
                    <Text style={[stylesGeral.inputText, {fontWeight: '700', marginBottom: 5, fontSize: 17, marginLeft: 20}]}>Alimentos: {teste.emissaoAlimentos}</Text>
                    <Text style={[stylesGeral.inputText, {fontWeight: '700', marginBottom: 5, fontSize: 17, marginLeft: 20}]}>Gás: {teste.emissaoGas}</Text>
                    <Text style={[stylesGeral.inputText, {fontWeight: '700', marginBottom: 5, fontSize: 17, marginLeft: 20}]}>Veiculos: {teste.emissaoVeiculos}</Text>
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
