import {View, Text, StyleSheet} from 'react-native'

const AreaMoeda = () => {
    return(
        <View style={styles.area}>
            <Text>Selecionar moedas</Text>
        </View>
    )
}

export default AreaMoeda;

const styles = StyleSheet.create({
    area: {
        backgroundColor: 'white',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        width: '70%',
        height: 40,
        padding: 8
    }
})