import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import {View} from 'react-native'

const PickerComponent = ({moedas}) => {
    const [selected, setSelected] = useState('')
    return(
        <View>
            <Picker
            selectedValue={selected}
            onValueChange={(itemValue, indexValue) => {setSelected(itemValue)}}
            >
                <Picker.Item label="USD" key={0} value="USD"/>
                <Picker.Item label="BTC" key={1} value="BTC"/>
                <Picker.Item label="YNE" key={2} value="YNE"/>
            </Picker>
        </View>
    )
}

export default PickerComponent;

