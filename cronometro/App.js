import { StyleSheet, Text, View } from 'react-native';

import Imagem from './components/Imagem';
import Botao from './components/Botao';
import Timer from './components/Timer';
import { useRef, useState } from 'react';

export default function App() {
  const [numero, setNumero] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const intervalRef = useRef(null);

  function getIniciar(){
    if (ativo) return;

    setAtivo(true);
    intervalRef.current = setInterval(() => {setNumero((anterior) => anterior + 0.1);}, 100 )
  }

  function getPausar(){
    clearInterval(intervalRef.current)
    setAtivo(false)
    setNumero(0)
  }

  return (
    <View style={styles.container}>
      <Imagem/>

      <Timer
      texto={numero.toFixed(1)}
      />
      <View style={styles.containerBotao}>
        <Botao
      texto="Iniciar"
      onPress={getIniciar}
      />

      <Botao
      texto="Limpar"
      onPress={getPausar}
      />
      </View>
      
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

  containerBotao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40
  }
});
