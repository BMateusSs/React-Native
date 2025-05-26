import { View, Modal, StyleSheet, Text, SafeAreaView } from "react-native";

import Title from "./Title";
import ButtonMain from "./Button";
import PriceText from "./PriceText";
import { useEffect, useState } from "react";

const ModalScreen = ({visible, onClose, alcool, gasolina}) => {
    const [compensa, setCompensa] = useState('')
    Calcular

    function Calcular(){
        const al = parseFloat(alcool)
        const gas = parseFloat(gasolina)
        const comp = al/gas

        if (comp < 0.7){
            setCompensa('álcool')
        } else{
            setCompensa('gasolina')
        }
    }

    useEffect(()=> {
        if (visible){
            Calcular();
        }
    }, [visible, alcool, gasolina])

    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <SafeAreaView style={styles.modalContent}>

                    <Text style={styles.title}>Compensa usar {compensa}</Text>

                    <Title
                    title='Com os preços:'
                    />

                    <PriceText
                    text={"Álcool: R$ " + alcool}
                    />

                    <PriceText
                    text={"Gasolina: R$ " + gasolina}
                    />

                    <ButtonMain
                    text='Calcular novamente'
                    onPress={onClose}
                    />
                </SafeAreaView>
            </View>
        </Modal>
    )
}

export default ModalScreen;

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContent: {
        backgroundColor: '#212121',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 10,
    },
    title: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 20
    }
});