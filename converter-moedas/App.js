import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import PickerComponent from './components/Picker';
import Loading from './components/Loading';
import ButtonComponent from './components/ButtonComponent';
import ModalScreen from './components/Modal';

import { api } from './services/api';

export default function App() {
  const [moedas, setMoedas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [valorConverter, setValorConverter] = useState('');
  const [visible, setVisible] = useState(false);
  const [valorConvertido, setValorConvertido] = useState(0);

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
        setSelected(arrayMoedas[0].key);

      } catch (error) {
        console.error("Erro ao carregar moedas:", error);
      } finally {
        setLoading(false);
      }
    }
    loadMoedas();
  }, []);

  function closeModal() {
    setVisible(false);
  }

  async function converter() {
    if (valorConverter === 0 || valorConverter === '' || selected === null) {
      alert('Preencha todos os campos');
      return;
    }

    try {
      const response = await api.get(`/all/${selected}-BRL`);
      const value = response.data[selected].ask;

      setValorConvertido(value * valorConverter);
      setVisible(true);
    } catch (error) {
      console.error('Erro ao converter moeda:', error);
      alert('Erro ao converter moeda');
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Text style={styles.text}>Selecionar moedas</Text>
        <PickerComponent 
          moedas={moedas}
          selectedCoin={selected}
          onChange={(coin) => setSelected(coin)}
        />
      </View>

      <View style={styles.areaValor}>
        <Text style={styles.text}>Digite um valor para converter em real</Text>
        <TextInput
          placeholder='Ex: 1.50'
          style={styles.input}
          keyboardType='numeric'
          value={valorConverter}
          onChangeText={setValorConverter}
        />
      </View>

      <ButtonComponent onPress={converter} />

      <ModalScreen
        visible={visible}
        onClose={closeModal}
        coin={valorConverter}
        converter={selected}
        valor={valorConvertido}
      />
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
  area: {
    backgroundColor: 'white',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    width: '90%',
    padding: 8,
    marginBottom: 1
  },
  areaValor: {
    width: '90%',
    backgroundColor: 'white',
    padding: 8
  },
  input: {
    width: '100%',
    backgroundColor: 'lightgrey',
    borderRadius: 10,
    padding: 10
  },
  text: {
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5
  }
});
