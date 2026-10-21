import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export default function CardNoticia({ noticia, onPress }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.categoria}>{noticia.categoria}</Text>
      <Text style={styles.titulo}>{noticia.titulo}</Text>
      <Text style={styles.resumo}>{noticia.resumo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
