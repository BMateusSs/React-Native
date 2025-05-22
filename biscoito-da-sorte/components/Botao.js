import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Botao = ({onClick}) => {
    return(
        <View style={style.containerButton}>
            <TouchableOpacity
            onPress={onClick}
            >
                <Text style={style.text}>Abrir Biscoito</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Botao;

const style = StyleSheet.create({
    containerButton: {
        width: '40%',
        height: 35,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#dd7b22',
        alignItems: 'center',
        justifyContent: 'center'

    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#dd7b22'
    }
})