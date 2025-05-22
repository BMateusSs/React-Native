import { StyleSheet, Text, View } from 'react-native';

import Imagem from './components/Imagem';
import Botao from './components/Botao';

export default function App() {
  return (
    <View style={styles.container}>
      <Imagem/>

      <Botao
      texto="Iniciar"
      />

      <Botao
      texto="Limpar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
