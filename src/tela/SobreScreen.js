import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SobreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/be/ca/7f/beca7f8b2b069956de3e60076cd8f008.jpg' }}
        style={styles.logo}
        resizeMode="cover"
      />

      <Text style={styles.nomeApp}>Hamoo App</Text> 
      <Text style={styles.versao}>Versão 1.6.7</Text>

      <View style={styles.cardDescricao}>
        <Text style={styles.descricao}>
          Mini app de notícias muito bom e informativo 👍👍
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botaoVoltar}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Notícias')}
      >
        <Ionicons name="arrow-back" size={20} color="#ffffff" style={{ marginRight: 8 }} />
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  descricaoSecundaria: {
    fontSize: 13,
    color: '#57606a',
    lineHeight: 20,
    textAlign: 'center',
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
