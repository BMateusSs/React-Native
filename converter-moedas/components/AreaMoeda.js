import {View, Text, StyleSheet} from 'react-native'
import PickerComponent from './Picker';

const AreaMoeda = () => {
    return(
        <View style={styles.area}>
            <Text>Selecionar moedas</Text>
            <PickerComponent/>
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
        padding: 8
    }
})