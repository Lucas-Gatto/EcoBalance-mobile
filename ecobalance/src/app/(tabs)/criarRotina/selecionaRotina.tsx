import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Alert } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import api from "@/src/services/api";

export default function SelecionaRotina({ calculoData, updateCalculo }: any){
    const [listaRotinas, setListaRotinas] = useState<any[]>([]);
    const [carregando, setCarregando] = useState(false);

    useEffect(() => {
        const carregarRotinas = async () => {
            setCarregando(true);

            // #region Conexão Front-Back (Buscar Rotinas para Cálculo)
            try {
                const response = await api.get('/rotinas/usuario/lista');
                const rotinasFormatadas = response.data.map((rotina: any) => ({
                    label: rotina.nome,
                    value: rotina._id,
                    rotina
                }));
                setListaRotinas(rotinasFormatadas);
            } catch (error: any) {
                Alert.alert("Erro", "Não foi possível carregar suas rotinas.");
            } finally {
                setCarregando(false);
            }
            // #endregion
        };

        carregarRotinas();
    }, []);

    return (

        <View>
            <Text>Selecione uma rotina pré cadastrada ou cadastre uma nova</Text>

            <View>
                {carregando ? (
                    <ActivityIndicator size="small" color="#659E43" />
                ) : (
                <Dropdown
                    data={listaRotinas}
                    search
                    labelField="label"
                    valueField="value"
                    value={calculoData.rotinaId}
                    placeholder="Selecione uma rotina"
                    onChange={(item) => {
                        updateCalculo('rotinaId', item.value);
                        updateCalculo('rotinaNome', item.rotina.nome);
                        updateCalculo('rotinaTipoGas', item.rotina.tipoGas || '');
                    }}
                    style={{padding: 10, borderColor: '#000', borderWidth: 1}}
                    />
                )}
            </View>
        </View>
    )
}
