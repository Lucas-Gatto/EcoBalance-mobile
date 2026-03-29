import { TouchableOpacity, Text, StyleSheet } from "react-native";

type BotaoCriarContaProps = { // Define os tipos de props que o componente espera. Assim, quando alguém usar o BotaoConcluir, o TypeScript vai garantir que a função onPress seja passada corretamente.
  onPress: () => void;
  navigation?: any;
};

export function BotaoCriarConta({ onPress }: BotaoCriarContaProps) {
    return (
        <TouchableOpacity
            style={styles.BotaoCriarConta}
            onPress={() => console.log("Botão Criar Conta pressionado")}
        >
            <Text style={styles.texto}>Criar Conta</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    BotaoCriarConta: {
        backgroundColor: '#659E43',
        alignSelf: 'center',
        padding: 10,
        width: '50%',
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 20,
    },
    texto: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
