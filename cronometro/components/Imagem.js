import {View, Image} from 'react-native'
import watch from '../assets/cronometro.png'

const Imagem = () => {
    return(
        <View>
            <Image 
            source={watch}
            style={{width: 250, height: 300}}
            />
        </View>
    )
}

export default Imagem;
