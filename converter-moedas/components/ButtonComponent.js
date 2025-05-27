import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonComponent = ({onPress}) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.text}>Converter</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fb4b57',
        width: '90%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    }
})