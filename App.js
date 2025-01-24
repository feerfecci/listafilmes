
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import api from './src/Services/api';
import Filmes from './src/Filmes';
import { useEffect, useState } from 'react';

export default function App() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      //pegamos o response direto da api pelo metodo da URL
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
    }
    loadFilmes();
  },
    ///para p setState funcionar quando abre o app ssó deixar vazio:
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        ///a pk precisa estar em string
        keyExtractor={item => String(item.id)}
        renderItem={
          ({ filme }) => { <Filmes data={filme} /> }
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});