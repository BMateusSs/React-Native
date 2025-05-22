import { StyleSheet, Text, View } from 'react-native';

import Imagem from './components/Imagem';

export default function App() {
  return (
    <View style={styles.container}>
      <Imagem/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
