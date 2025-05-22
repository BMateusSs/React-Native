import { View, Text, StyleSheet } from "react-native";

const Frase = ({texto}) => {
    return(
        <View>
            <Text style={style.frase}>{texto}</Text>
        </View>
    )
}

export default Frase;

const style = StyleSheet.create({
    frase: {
        fontSize: 20,
        color: '#dd7b22',
        margin: 30, 
        fontStyle: 'italic',
        textAlign: 'center'
    }
})