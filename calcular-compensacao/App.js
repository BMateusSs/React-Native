import { Modal, StyleSheet, Text, View } from 'react-native';

import Input from './components/Input';
import ButtonMain from './components/Button';
import Title from './components/Title';
import Logo from './components/Logo';
import SubTitle from './components/SubTitle';
import ModalScreen from './components/Modal';

import logo from './img/logo.png'
import { useState } from 'react';

export default function App() {
  const [visible, setVisible] = useState(false);

  function openModal(){
    setVisible(true);
  }

  function closeModal(){
    setVisible(false)
  }

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
        sub="Gasolina (preço por litro)"
        />
        <Input/>
      </View>

      <ButtonMain
      onPress={openModal}
      text='Calcular'
      />

      <ModalScreen
      visible={visible}
      onClose={closeModal}
      />
      
      
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
