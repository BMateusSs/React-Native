import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AreaMoeda from './components/AreaMoeda';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <AreaMoeda/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subContainer: {
    flexDirection: 'row'
  }
});
