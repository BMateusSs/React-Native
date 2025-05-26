import { Modal, StyleSheet, Text, View, SafeAreaView } from 'react-native';

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
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('')


  function openModal(){
    if (!alcool && !gasolina){
      alert("Preencha os dois campos")
    } else{
      setVisible(true);
    }
    
  }

  function closeModal(){
    setVisible(false)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
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
          <Input
          value={alcool}
          onChange={setAlcool}
          />
        </View>

        <View style={styles.subSection}>
          <SubTitle
          sub="Gasolina (preço por litro)"
          />
          <Input
          value={gasolina}
          onChange={setGasolina}
          />
        </View>

        <ButtonMain
        onPress={openModal}
        text='Calcular'
        />

        <ModalScreen
        visible={visible}
        onClose={closeModal}
        alcool={alcool}
        gasolina={gasolina}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#212121',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subSection: {
    width: '80%',
    justifyContent: 'center'
  }
});