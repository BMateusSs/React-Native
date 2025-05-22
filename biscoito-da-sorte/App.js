import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Imagem from './components/Imagem';
import Botao from './components/Botao';
import Frase from './components/Frase';

import fechado from './assets/biscoito.png'
import aberto from './assets/biscoitoAberto.png'

export default function App() {
  const [frase, setFrase] = useState("Clique no botão para abrir o biscoito.");
  const frases = [
    "Acredite em si mesmo e tudo será possível.",
    "Grandes oportunidades surgirão em breve.",
    "Você terá uma surpresa agradável ainda esta semana.",
    "Seu sorriso abrirá portas onde quer que vá.",
    "A sorte favorece os corajosos.",
    "A paciência é a chave para grandes conquistas.",
    "Um novo caminho está prestes a se abrir diante de você.",
    "Confie no processo, mesmo quando não entender o caminho.",
    "Você é mais forte do que imagina.",
    "Alguém pensa em você com carinho neste momento.",
    "O sucesso está mais perto do que você pensa.",
    "Siga seu coração e ele te levará ao destino certo.",
    "Um gesto gentil mudará o dia de alguém.",
    "Seus esforços serão recompensados em breve.",
    "Hoje é um bom dia para começar algo novo.",
    "A felicidade bate à porta de quem acredita.",
    "Você será reconhecido pelo seu talento.",
    "Boas notícias chegarão quando você menos esperar.",
    "A resposta que você procura está dentro de você.",
    "A energia que você transmite volta para você."
];

  const [img, setImagem] = useState(fechado);


  function handleBisc(){
     let randomNumb = Math.floor(Math.random() * frases.length);

     setFrase( '"' + frases[randomNumb] + '"')
     setImagem(aberto)
  }

  return (
    <View style={styles.container}>
      <Imagem
      image={img}
      />

      <Frase
      texto={frase}
      />

      <Botao
      onClick={handleBisc}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
