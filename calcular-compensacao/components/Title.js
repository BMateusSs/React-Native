import {View, Text, StyleSheet} from 'react-native'

const Title = ({title}) => {
    return(
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 60

    }
})