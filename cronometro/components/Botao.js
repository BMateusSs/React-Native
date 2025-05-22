import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Botao = ({texto, onPress}) => {
    return(
        <View style={styles.btn}> 
            <TouchableOpacity
            onPress={onPress}
            >
                <Text style={styles.btnText}>{texto}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Botao;

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        height: 40,
        margin: 17,
        borderRadius: 10
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#00aeef'
    }
})