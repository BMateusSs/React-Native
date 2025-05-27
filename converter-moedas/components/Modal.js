import { Modal, View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const ModalScreen = ({ visible, onClose, coin, converter, valor }) => {
  return (
    <Modal visible={visible} 
    animationType="slide" 
    transparent={true}
    onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.valorConvertido}>{coin} {converter}</Text>
          <Text style={styles.text}>corresponde a</Text>
          <Text style={styles.valorConvertido}>R$ {valor}</Text>

          <View style={styles.button}>
            <TouchableOpacity
            onPress={onClose}
            >
                <Text style={styles.textButton}>Calcular novamente</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </Modal>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '80%',
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  valorConvertido: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 18,
    paddingTop: 8,
    paddingBottom: 8,
    fontWeight: '500'
  },
  button: {
    marginTop: 15
  },
  textButton: {
    color: '#fb4b57',
    fontSize: 17,
    fontWeight: 'bold'
  }
});
