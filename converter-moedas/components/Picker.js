import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";

const PickerComponent = ({ moedas, selectedCoin, onChange }) => {
  return (
    <View>
      <Picker
        selectedValue={selectedCoin}
        onValueChange={(itemValue) => onChange(itemValue)}
      >
        {moedas.map((item) => (
          <Picker.Item 
            value={item.value} 
            label={item.label} 
            key={item.key} 
          />
        ))}
      </Picker>
    </View>
  );
};

export default PickerComponent;
