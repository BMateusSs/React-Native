import { View, Image } from "react-native";

const Imagem = ({image}) => {
    return(
        <View >
            <Image
            source={image}
            style={{width: 200, height:200}}
            />
        </View>
    )
}

export default Imagem;