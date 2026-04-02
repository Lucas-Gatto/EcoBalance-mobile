import { stylesGeral } from "@/src/styles/stylesGeral";
import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function EnergiaRotina (){

    const [energiaEletrica, setEnergiaEletrica] = useState('')

    return (

        <View>
            <Text style={stylesGeral.subTituloPagina}>Consumo Mensal de Energia</Text>

            <View>
                <Text style={[stylesGeral.inputText, {marginTop: 15}]}>Digite o valor de kWh da sua última conta de energia elétrica:</Text>
                <TextInput
                value={energiaEletrica}
                onChangeText={setEnergiaEletrica}
                keyboardType="numeric"
                style={[stylesGeral.input2, {marginTop: 15}]}/>
            </View>
        </View>
    )
}