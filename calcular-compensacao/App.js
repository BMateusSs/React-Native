import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title
      title="Qual a melhor opção?"
      />

      <Input
      />

      <Input/>

      <Button/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
