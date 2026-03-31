import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";

export default function DietaRotina() {

    const [dieta, setDieta] = useState('');
    const [carneBovina, setCarneBovina] = useState('');
    const [carneSuina, setCarneSuina] = useState('');
    const [frango, setFrango] = useState('');
    const [peixe, setPeixe] = useState('');
    const [leite, setLeite] = useState('');
    const [ovos, setOvos] = useState('');
    const [leguminosas, setLeguminosas] = useState('');
    const [frutas, setFrutas] = useState('');
    const [cereais, setCereais] = useState('');

    {/*Define os campos das dietas*/}
    const renderCampos = () => {
        switch (dieta){
            case "carnivora":
                return (
                    <>
                        {renderInput("Carne Bovina (Pedaços)", carneBovina, setCarneBovina)}
                        {renderInput("Carne Suina (Pedaços)", carneSuina, setCarneSuina)}
                        {renderInput("Frango (Pedaços)", frango, setFrango)}
                        {renderInput("Peixe (Pedaços)", peixe, setPeixe)}
                        {renderInput("Leite (Litros)", leite, setLeite)}
                        {renderInput("Ovos (Unidade)", ovos, setOvos)}
                    </>
                )
            case "pescetariana":
                return (
                    <>
                        {renderInput("Peixe (Pedaços)", peixe, setPeixe)}
                        {renderInput("Leite (Litros)", leite, setLeite)}
                        {renderInput("Ovos (Unidade)", ovos, setOvos)}
                        {renderInput("Leguminosas (Porçoes)", leguminosas, setLeguminosas)}
                        {renderInput("Frutas e Vegetais (Porçoes)", frutas, setFrutas)}
                        {renderInput("Cereais Integrais (Porçoes)", cereais, setCereais)}
                    </>
                )
            case "Vegana":
                return (
                    <>
                        {renderInput("Leguminosas (Porçoes)", leguminosas, setLeguminosas)}
                        {renderInput("Frutas e Vegetais (Porçoes)", frutas, setFrutas)}
                        {renderInput("Cereais Integrais (Porçoes)", cereais, setCereais)}
                    </>
                )
            case "Vegetariana":
                return (
                    <>
                        {renderInput("Leite (Litros)", leite, setLeite)}
                        {renderInput("Ovos (Unidade)", ovos, setOvos)}
                        {renderInput("Leguminosas (Porçoes)", leguminosas, setLeguminosas)}
                        {renderInput("Frutas e Vegetais (Porçoes)", frutas, setFrutas)}
                        {renderInput("Cereais Integrais (Porçoes)", cereais, setCereais)}
                    </>
                )
            default: 
                return (
                    <>
                        {renderInput("Carne Bovina (Pedaços)", carneBovina, setCarneBovina)}
                        {renderInput("Carne Suina (Pedaços)", carneSuina, setCarneSuina)}
                        {renderInput("Frango (Pedaços)", frango, setFrango)}
                        {renderInput("Peixe (Pedaços)", peixe, setPeixe)}
                        {renderInput("Leite (Litros)", leite, setLeite)}
                        {renderInput("Ovos (Unidade)", ovos, setOvos)}
                        {renderInput("Leguminosas (Porções)", leguminosas, setLeguminosas)}
                        {renderInput("Frutas e Vegetais (Porções)", frutas, setFrutas)}
                        {renderInput("Cereais Integrais (Porções)", cereais, setCereais)}
                    </>
                );
        }
    }

    const renderInput = (label: string, value: string, onChange: (t:string) => void) =>(        
        <View>
            <Text>{label}</Text>
            <TextInput
            value={value}
            onChangeText={onChange}/>
        </View>
    )

    return (
        <View>

            <View>
                <Text>Fale um pouco sobre sua dieta quando segue essa rotina</Text>
            </View>

            <View>
                <Text>Selecione sua dieta:</Text>
                <Text>Aqui vai ter um dropdrown</Text>

                {/*Parte temporaria. Problemas com dropdown */}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>{['onivora', 'carnivora', 'pescetariana', 'Vegana', 'Vegetariana'].map((tipo) => (
                <TouchableOpacity
                    key={tipo}
                    onPress={() => setDieta(tipo)}
                    style={{
                        padding: 10,
                        backgroundColor: dieta === tipo ? '#2e7d32' : '#ccc',
                        borderRadius: 5
                    }}
                    >
                    <Text style={{ color: 'white', fontSize: 12 }}>{tipo.toUpperCase()}</Text>
                </TouchableOpacity>
                ))}
            </View>
            </View>


            <View>
                <ScrollView>
                    <Text>Porções consumidas por semana:</Text>
                    {renderCampos()}
                   
                </ScrollView>
            </View>

        </View>
    );
}