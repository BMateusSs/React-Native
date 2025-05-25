import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Input from './components/Input';
import Button from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
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
