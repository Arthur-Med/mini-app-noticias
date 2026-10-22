// Aluno: Arthur José Barbosa Medeiros

import React, { useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

// ==========================================
// DADOS DAS NOTÍCIAS (TECNOLOGIA E ESPORTES)
// ==========================================
const NOTICIAS_TECNOLOGIA = [
  {
    id: '1',
    categoria: 'TECNOLOGIA',
    titulo: 'React Native é o bicho 🔥',
    resumo: 'A nova versão traz melhorias de performance...',
    conteudo:
      'A nova versão do React Native introduz importantes melhorias na nova Arquitetura e otimizações de compilação, tornando as animações e transições muito mais fluidas.',
  },
  {
    id: '2',
    categoria: 'TECNOLOGIA',
    titulo: 'IA generativa bate recordes',
    resumo: 'Modelos de linguagem estão cada vez mais avançados...',
    conteudo:
      'Modelos de inteligência artificial generativa continuam quebrando recordes de adoção e eficiência no desenvolvimento de software e criação de conteúdo.',
  },
  {
    id: '3',
    categoria: 'TECNOLOGIA',
    titulo: 'Memória RAM ta o olho da cara',
    resumo: 'Essa IA generativa ta acabando com tudo...',
    conteudo:
      'Com o aumento expressivo da demanda por data centers de Inteligência Artificial, a alta procura por chips de memória fez os preços de módulos de RAM dispararem no mercado global.',
  },
  {
    id: '4',
    categoria: 'TECNOLOGIA',
    titulo: 'TypeScript 5.x melhora performance',
    resumo: 'TypeScript veio para acabar com a fome no mundo...',
    conteudo:
      'A versão 5 do TypeScript traz reduções substanciais no tempo de tipagem e compilação, além de padronizar decoradores conforme o estágio final do ECMAScript.',
  },
];

const NOTICIAS_ESPORTES = [
  {
    id: '6',
    categoria: 'ESPORTES',
    titulo: 'Brasil vence amistoso preparatório',
    resumo: 'Seleção brasileira tem boa atuação e vence com gols no segundo tempo.',
    conteudo:
      'A seleção brasileira de futebol realizou uma grande partida no amistoso internacional, dominando a posse de bola e convertendo oportunidades decisivas na etapa final.',
  },
  {
    id: '7',
    categoria: 'ESPORTES',
    titulo: 'Final do campeonato tem recorde de público',
    resumo: 'Mais de 70 mil torcedores acompanham a decisão no estádio.',
    conteudo:
      'Com ingressos esgotados semanas antes, o clássico da grande final coroou a equipe mandante em uma partida eletrizante decidida nos minutos finais dos acréscimos.',
  },
  {
    id: '8',
    categoria: 'ESPORTES',
    titulo: 'Novo recorde mundial na natação',
    resumo: 'Atleta supera a marca anterior por dois décimos nos 100m livre.',
    conteudo:
      'Em um desempenho histórico nas piscinas, o recorde mundial dos 100 metros nado livre foi superado com uma arrancada impressionante nos metros finais.',
  },
  {
    id: '9',
    categoria: 'ESPORTES',
    titulo: 'Rodada da Champions League tem surpresas',
    resumo: 'Grandes clubes europeus tropeçam na fase de grupos.',
    conteudo:
      'A rodada desta semana na Liga dos Campeões entregou partidas disputadas do início ao fim e resultados surpreendentes que embolaram a classificação dos grupos.',
  },
];

// ==========================================
// COMPONENTE REUTILIZÁVEL: CARDNOTICIA
// ==========================================
function CardNoticia({ noticia, onPress }) {
  return (
    <TouchableOpacity style={cardStyles.card} activeOpacity={0.7} onPress={onPress}>
      <Text style={cardStyles.categoria}>{noticia.categoria}</Text>
      <Text style={cardStyles.titulo}>{noticia.titulo}</Text>
      <Text style={cardStyles.resumo}>{noticia.resumo}</Text>
    </TouchableOpacity>
  );
}

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  categoria: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#8c959f',
    letterSpacing: 0.8,
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  titulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1f2c',
    marginBottom: 6,
    lineHeight: 22,
  },
  resumo: {
    fontSize: 13,
    color: '#57606a',
    lineHeight: 18,
  },
});

// ==========================================
// TELA: LISTA DE NOTÍCIAS
// ==========================================
function ListaNoticiasScreen({ route, navigation }) {
  const categoria = route.params?.categoria || 'Tecnologia';
  const dados = categoria === 'Esportes' ? NOTICIAS_ESPORTES : NOTICIAS_TECNOLOGIA;

  return (
    <View style={listaStyles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={listaStyles.listContent}
        ListHeaderComponent={
          <Text style={listaStyles.categoriaTitulo}>{categoria}</Text>
        }
        renderItem={({ item }) => (
          <CardNoticia
            noticia={item}
            onPress={() => {
              navigation.navigate('Detalhes', { noticia: item });
            }}
          />
        )}
      />
    </View>
  );
}

const listaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  categoriaTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 16,
    marginTop: 4,
  },
});

// ==========================================
// TELA: DETALHES DA NOTÍCIA
// ==========================================
function DetalhesScreen({ route, navigation }) {
  const { noticia } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: noticia.titulo,
    });
  }, [navigation, noticia.titulo]);

  return (
    <ScrollView style={detalhesStyles.container} contentContainerStyle={detalhesStyles.content}>
      <View style={detalhesStyles.tagContainer}>
        <Text style={detalhesStyles.tagText}>{noticia.categoria}</Text>
      </View>

      <Text style={detalhesStyles.titulo}>{noticia.titulo}</Text>
      <Text style={detalhesStyles.resumo}>{noticia.resumo}</Text>

      <View style={detalhesStyles.divider} />

      <Text style={detalhesStyles.conteudo}>{noticia.conteudo}</Text>
    </ScrollView>
  );
}

const detalhesStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  tagContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#e7f0fd',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 12,
  },
  tagText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0969da',
    textTransform: 'uppercase',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2328',
    lineHeight: 28,
    marginBottom: 12,
  },
  resumo: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#57606a',
    lineHeight: 22,
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e1e4e8',
    marginBottom: 20,
  },
  conteudo: {
    fontSize: 16,
    color: '#24292f',
    lineHeight: 26,
  },
});

// ==========================================
// TELA: SOBRE (HAMOO APP)
// ==========================================
function SobreScreen({ navigation }) {
  return (
    <View style={sobreStyles.container}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/736x/be/ca/7f/beca7f8b2b069956de3e60076cd8f008.jpg',
        }}
        style={sobreStyles.logo}
        resizeMode="cover"
      />

      <Text style={sobreStyles.nomeApp}>Hamoo App</Text>
      <Text style={sobreStyles.versao}>Versão 1.6.7</Text>

      <View style={sobreStyles.cardDescricao}>
        <Text style={sobreStyles.descricao}>
          Mini app de notícias muito bom e informativo 👍👍
        </Text>
      </View>

      <TouchableOpacity
        style={sobreStyles.botaoVoltar}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Notícias')}
      >
        <Ionicons name="arrow-back" size={20} color="#ffffff" style={{ marginRight: 8 }} />
        <Text style={sobreStyles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const sobreStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    width: 110,
    height: 110,
    borderRadius: 22,
    marginBottom: 16,
  },
  nomeApp: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2328',
    marginBottom: 4,
  },
  versao: {
    fontSize: 13,
    color: '#656d76',
    marginBottom: 20,
  },
  cardDescricao: {
    backgroundColor: '#f6f8fa',
    borderRadius: 12,
    padding: 18,
    width: '100%',
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#d0d7de',
  },
  descricao: {
    fontSize: 14,
    color: '#24292f',
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 8,
  },
  botaoVoltar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0969da',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

// ==========================================
// NAVEGADORES (STACK, TAB E DRAWER)
// ==========================================
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
