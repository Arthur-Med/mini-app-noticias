import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import CardNoticia from '../card/CardNoticia';
import { NOTICIAS_TECNOLOGIA, NOTICIAS_ESPORTES } from '../noticias/noticias';

export default function ListaNoticiasScreen({ route, navigation }) {
  const categoria = route.params?.categoria || 'Tecnologia';

  const dados = categoria === 'Esportes' ? NOTICIAS_ESPORTES : NOTICIAS_TECNOLOGIA;

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}

        ListHeaderComponent={
          <Text style={styles.categoriaTitulo}>{categoria}</Text>
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

const styles = StyleSheet.create({
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
