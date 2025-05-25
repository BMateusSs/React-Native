import { View, Modal, StyleSheet, Text } from "react-native";

import Button from "./Button";
import gas from '../img/gas.png'
import Logo from "./Logo";
import Title from "./Title";
import ButtonMain from "./Button";
import { useState } from "react";

const ModalScreen = ({visible, onClose}) => {

    return(
        <View style={styles.container}>
            <Modal
            animationType="slide"
            visible={visible}
            >
                <View style={styles.subContainer}>
                    <Logo
                    logo={gas}
                    />

                    <Text style={styles.title}>Compensa usar...</Text>

                    <Title
                    title='Com os preços:'
                    />
                    
                    <ButtonMain
                    text='Calcular novamente'
                    onPress={onClose}
                    />
                
                </View>
            </Modal>
        </View>
    )
}

export default ModalScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#212121' 
    },
    title: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 20
    }
})