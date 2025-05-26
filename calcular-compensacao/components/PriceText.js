import { View, Text, StyleSheet } from "react-native";

const PriceText = ({text}) => {
    return(
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default PriceText;

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 18,
    }
})