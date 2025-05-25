import { View, TextInput, StyleSheet } from "react-native";

const Input = ({value, onChange}) => {
    return(
        <View style={styles.input}>
            <TextInput
            placeholder="Ex: 4.60"
            value={value}
            onChangeText={onChange}
            />
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderRadius: 5,
        marginBottom: 20
    }
})