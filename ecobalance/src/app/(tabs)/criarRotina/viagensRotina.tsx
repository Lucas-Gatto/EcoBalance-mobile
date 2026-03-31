import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import Checkbox from 'expo-checkbox'; // Verifique se a importação está assim

export default function ViagemRotina() {
  // Estados devem ficar dentro da função do componente
  const [viagem, setViagem] = useState<string | null>(null);
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const data = [
    { label: 'Trabalho', value: '1' },
    { label: 'Lazer', value: '2' },
    { label: 'Viagem de Aplicativo', value: '3' },
    { label: 'Outros', value: '4' },
  ];

  return (
    <View>
      <Text>Fale brevemente das viagens realizadas no último mês</Text>

      <View>
        <Text>Fez alguma viagem no último mês?</Text>
        <Text>Considere viagens longas ou curtas, como viagens de carro de aplicativo, etc.</Text>
        
        <View>
          {['Sim', 'Não'].map((tipo) => (
            <TouchableOpacity
              key={tipo}
              onPress={() => setViagem(tipo)}
            >
              <Text style={{ color: viagem === tipo ? '#fff' : '#000' }}>{tipo}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Dropdown - Adicionado estilo para aparecer na tela */}
        <Dropdown
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Selecione um item' : '...'}
          searchPlaceholder="Pesquisar..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />

        {/* Checkbox - Removi o 'disabled' para você conseguir testar */}
        <View>
          <Checkbox 
            value={isChecked} 
            onValueChange={setChecked} 
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text>Confirmo que as informações são verdadeiras</Text>
        </View>

      </View>
    </View>
  );
}
