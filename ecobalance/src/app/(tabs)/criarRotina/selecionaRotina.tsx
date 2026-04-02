import { stylesGeral } from "@/src/styles/stylesGeral";
import React, { useState,  } from "react";
import { View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";


export default function SelecionaRotina (){

    const [listaRotinas, setListaRotinas] = useState([]);

    return (

        <View>
            <Text style={[stylesGeral.inputText, {marginTop:30}]}>Selecione uma rotina pré cadastrada ou cadastre uma nova</Text>

            <View>
                <Dropdown
                    data={listaRotinas}
                    search
                    labelField="label"
                    valueField="value"
                    value={listaRotinas}
                    placeholder=""
                    onChange={(item) => {
                        setListaRotinas(item.value);
                    }}
                    style={[stylesGeral.input2, {marginTop: 20}]}
                    />
            </View>
        </View>
    )
}