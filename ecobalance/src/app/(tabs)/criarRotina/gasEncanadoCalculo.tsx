import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function GasEncanado ({ calculoData, updateCalculo }: any){

    return (

        <View>
            <Text>Consumo Mensal de Gás Natural</Text>

            <View>
                <Text>Digite o valor em metros cúbicos (m³) da sua última conta de gás natural:</Text>
                <TextInput
                    style={{borderWidth: 1, borderColor: '#bbb', padding: 10, marginTop: 10}}
                    placeholder="Ex: 15.5"
                    value={calculoData.gasNatural.m3}
                    onChangeText={(text) => updateCalculo('gasNatural', { ...calculoData.gasNatural, m3: text })}
                    keyboardType="numeric"
                />
            </View>
        </View>
    )
}
