import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonMain = ({onPress, text}) => {
    return(
        <View style={styles.button}>
            <TouchableOpacity
            onPress={onPress}
            >
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonMain;

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'orange',
        width: '80%',
        borderRadius: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    }
})