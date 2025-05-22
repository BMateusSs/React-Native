import { StyleSheet, Text, View } from 'react-native';

import Imagem from './components/Imagem';
import Botao from './components/Botao';
import Timer from './components/Timer';

export default function App() {
  return (
    <View style={styles.container}>
      <Imagem/>

      <Timer
      texto="0.0"
      />

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
