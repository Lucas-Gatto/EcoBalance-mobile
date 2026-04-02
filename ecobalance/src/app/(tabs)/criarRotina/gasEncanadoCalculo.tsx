import { stylesGeral } from "@/src/styles/stylesGeral";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function GasEncanado (){

    const [gasEncanado, setGasEncanado] = useState('')

    return (

        <View>
            <Text style={stylesGeral.subTituloPagina}>Consumo Mensal de Gás Natural</Text>

            <View>
                <Text style={[stylesGeral.inputText, {marginTop: 10}]}>Digite o valor em metros cúbicos (m³) da sua última conta de gás natural:</Text>
                <TextInput
                    style={[stylesGeral.input2, {marginTop: 20}]}
                    placeholder="Ex: 15.5"
                    value={gasEncanado}
                    onChangeText={setGasEncanado}
                    keyboardType="numeric"
                />
            </View>
        </View>
    )
}