import { View, Text, StyleSheet } from "react-native";

const SubTitle = ({sub}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{sub}</Text>
        </View>
    )
}

export default SubTitle;

const styles = StyleSheet.create({
    container: {
        marginBottom: 5
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
})