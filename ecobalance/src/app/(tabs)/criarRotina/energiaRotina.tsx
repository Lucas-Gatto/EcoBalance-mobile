import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function EnergiaRotina ({ calculoData, updateCalculo }: any){

    return (

        <View>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>Consumo Mensal de Energia</Text>

            <View>
                <Text>Digite o valor de kWh da sua última conta de energia elétrica:</Text>
                <TextInput
                value={calculoData.energiaEletrica.kwh}
                onChangeText={(text) => updateCalculo('energiaEletrica', { ...calculoData.energiaEletrica, kwh: text })}
                keyboardType="numeric"
                style={{borderWidth: 1, borderColor: '#bbb'}}/>
            </View>
        </View>
    )
}
