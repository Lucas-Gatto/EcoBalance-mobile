import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../app/(tabs)/telaHome";
import TelaPerfil from "../app/(tabs)/telaPerfil";
import TelaConquistas from "../app/(tabs)/telaConquistas";
import TelaCalculos from "../app/(tabs)/telaCalculos";
import TelaRotina from "../app/(tabs)/telaRotina";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#a7c596", // cor de fundo da barra
          height: 60,                 // altura da barra
          borderTopLeftRadius: 10,    // arredondar cantos
          borderTopRightRadius: 10,
        },
      }}
    >
      <Tab.Screen name="Calculos" component={TelaCalculos} />
      <Tab.Screen name="Rotina" component={TelaRotina} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Conquistas" component={TelaConquistas} />
      <Tab.Screen name="Perfil" component={TelaPerfil} />
      
   
    </Tab.Navigator>
  );
}
