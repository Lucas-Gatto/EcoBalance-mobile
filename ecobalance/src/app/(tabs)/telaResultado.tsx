import { BotaoRetornar } from "@/src/components/botaoRetornar";
import { RootStackParamList } from "@/src/navigation/stackNavigator";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";

export default function ResultadoCalculo (){
const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
const route = useRoute<RouteProp<RootStackParamList, "ResultadoCalculo">>();
const { teste, rotinaNome } = route.params;

    return (
        <View>
            <BotaoRetornar onPress={() => navigation.goBack()}/>
            <Text>Resultado:</Text>
            {rotinaNome ? <Text>Rotina utilizada: {rotinaNome}</Text> : null}

            <View>
                <Text>Resultado Total: {teste.emissaoTotal}</Text>
                <View>
                    <Text>Valores por área:</Text>
                    <Text>Alimentos: {teste.emissaoAlimentos}</Text>
                    <Text>Gás: {teste.emissaoGas}</Text>
                    <Text>Veiculos: {teste.emissaoVeiculos}</Text>
                </View>
            </View>

            <View>
                <Text>Valores Mundiais:</Text>
                <View>
                    <Text>Valores por área:</Text>
                    <Text>Alimentos: </Text>
                    <Text>Gás: </Text>
                    <Text>Veiculos: </Text>
                </View>
            </View>
        </View>
    )
}
