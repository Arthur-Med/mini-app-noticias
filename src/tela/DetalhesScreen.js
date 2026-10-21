import React, { useLayoutEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function DetalhesScreen({ route, navigation }) {
  const { noticia } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: noticia.titulo,
    });
  }, [navigation, noticia.titulo]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.tagContainer}>
        <Text style={styles.tagText}>{noticia.categoria}</Text>
      </View>

      <Text style={styles.titulo}>{noticia.titulo}</Text>

      <Text style={styles.resumo}>{noticia.resumo}</Text>

      <View style={styles.divider} />

      <Text style={styles.conteudo}>{noticia.conteudo}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
