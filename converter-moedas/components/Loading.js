import {View, ActivityIndicator, StyleSheet} from 'react-native'

const Loading = () => {
    return(
        <View style={styles.container}>
            <ActivityIndicator 
            color="#fff"
            size="large"/>
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101215',
    }
})