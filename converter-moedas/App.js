import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AreaMoeda from './components/AreaMoeda';
import Loading from './components/Loading';
import { api } from './services/api';


export default function App() {
  const [moedas, setMoedas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMoedas() {
      try {
        const response = await api.get('all');

        let arrayMoedas = [];
        Object.keys(response.data).map((key) => {
          arrayMoedas.push({
            key: key,
            label: key,
            value: key
          });
        });
        setMoedas(arrayMoedas);
      } catch (error) {
        console.error("Erro ao carregar moedas:", error);
      } finally {
        setLoading(false);
      }
    }
    loadMoedas();
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <View style={styles.container}>
      <AreaMoeda moedas={moedas} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  });