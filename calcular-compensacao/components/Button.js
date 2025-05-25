import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({onPress}) => {
    return(
        <View style={styles.button}>
            <TouchableOpacity
            onPress={onPress}
            >
                <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'orange',
        width: '80%',
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    }
})