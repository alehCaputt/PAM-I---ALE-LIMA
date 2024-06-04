import React from 'react';
import {View, StyleSheet} from 'react-native';
import BotaoProps from '../components/botaoProps';

const App = () => {
  const handlePress = () => {
    console.log ('Botão pressionado!');
  };
  
return (
  <View style={styles.container}>
  <BotaoProps label = "Clique aqui" corFundo="green"
  onPress={handlePress}/>
  <BotaoProps label="Clique Agora" corFundo="pink"
  onPress={handlePress}/>
  </View>
  
  );
};
const styles = StyleSheet.create( {
    container :{
      felx: 1,
      justifyContent:'center',
      alingItems: 'center',
    }, });

export default App;


