import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';
import Logo from './components/Logo';
import SubTitle from './components/SubTitle';

import logo from './img/logo.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Logo
      logo={logo}
      />

      <Title
      title="Qual a melhor opção?"
      />

      <View style={styles.subSection}>
        <SubTitle
        sub="Álcool (preço por litro)"
        />
        <Input/>
      </View>

      <View style={styles.subSection}>
        <SubTitle
        sub="Álcool (preço por litro)"
        />
        <Input/>
      </View>

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

  subSection: {
    width: '80%',
    justifyContent: 'center'
  }
});
