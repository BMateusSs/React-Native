import { View, Image, StyleSheet } from "react-native";

const Logo = ({logo}) => {
    return(
        <View style={styles.logo}>
            <Image
            source={logo}
            style={styles.size}
            />
        </View>
    )
}

export default Logo;

const styles = StyleSheet.create({
    logo: {
        backgroundColor: 'white',
        width: 150,
        height: 150,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    size: {
        width: 120,
        height: 120,
    }
})