import {View, Text, StyleSheet} from 'react-native'

const Timer = ({texto}) => {
    return(
        <View>
            <Text style={style.timer}>{texto}</Text>
        </View>
    )
}

export default Timer;

const style = StyleSheet.create({
    timer: {
        marginTop: -160,
        fontSize: 65,
        color: 'white',
        fontWeight: 'bold'
    }
})
