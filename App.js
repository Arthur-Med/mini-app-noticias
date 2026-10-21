// Aluno: Arthur José Barbosa Medeiros

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import ListaNoticiasScreen from './src/tela/ListaNoticiasScreen';
import DetalhesScreen from './src/tela/DetalhesScreen';
import SobreScreen from './src/tela/SobreScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BotaoMenu({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={{ marginLeft: 16 }}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Ionicons name="menu" size={26} color="#1f2328" />
    </TouchableOpacity>
  );
}

function TecnologiaStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#1f2328',
      }}
    >
      <Stack.Screen
        name="TecnologiaLista"
        component={ListaNoticiasScreen}
        initialParams={{ categoria: 'Tecnologia' }}
        options={{
          title: 'Notícias',
          headerLeft: () => <BotaoMenu navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Detalhes"
        component={DetalhesScreen}
        options={{
          title: 'Detalhes', 
          headerBackTitle: 'Voltar',
        }}
      />
    </Stack.Navigator>
  );
}

function EsportesStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#1f2328',
      }}
    >
      <Stack.Screen
        name="EsportesLista"
        component={ListaNoticiasScreen}
        initialParams={{ categoria: 'Esportes' }}
        options={{
          title: 'Notícias',
          headerLeft: () => <BotaoMenu navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Detalhes"
        component={DetalhesScreen}
        options={{
          title: 'Detalhes', 
          headerBackTitle: 'Voltar',
        }}
      />
    </Stack.Navigator>
  );
}

function NoticiasTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarActiveTintColor: '#0969da',
        tabBarInactiveTintColor: '#656d76',
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600', marginBottom: 4 },
        tabBarStyle: { height: 60, paddingBottom: 6 },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Tecnologia') {
            iconName = 'hardware-chip-outline';
          } else if (route.name === 'Esportes') {
            iconName = 'trophy-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Tecnologia" component={TecnologiaStack} />
      <Tab.Screen name="Esportes" component={EsportesStack} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Drawer.Navigator
        initialRouteName="Notícias"
        screenOptions={{
          drawerActiveTintColor: '#0969da',
          drawerActiveBackgroundColor: '#e7f0fd',
          drawerInactiveTintColor: '#444746',
          drawerLabelStyle: { fontSize: 15, fontWeight: '600' },
          headerTitleAlign: 'center',
        }}
      >
        <Drawer.Screen
          name="Notícias"
          component={NoticiasTabs}
          options={{
            headerShown: false,
            drawerIcon: ({ color, size }) => (
              <Ionicons name="newspaper-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Sobre"
          component={SobreScreen}
          options={{
            headerShown: true,
            title: 'Sobre',
            drawerIcon: ({ color, size }) => (
              <Ionicons name="information-circle-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
