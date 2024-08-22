import React,{ useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import symbolOff from './assets/pictures/symbol-off.png';
import symbolOn from './assets/pictures/symbol-on.png';

export default function App() {
    const [isActive,setIsActive] = useState(false);

function handleSymbol(){
  setIsActive((oldValue:boolean)=>{
    return !oldValue
  })
}

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleSymbol}>
        <Image
          source={isActive ? symbolOn : symbolOff} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
