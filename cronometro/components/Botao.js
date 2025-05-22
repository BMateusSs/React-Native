import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const Botao = ({texto, onPress}) => {
    return(
        <View> 
            <TouchableOpacity
            onPress={onPress}
            >
                <Text>{texto}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Botao;