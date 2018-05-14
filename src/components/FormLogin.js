import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

export default props => (
  <View style={styles.container}>
    <View>
      <Text>WhatsApp Clone</Text>
    </View>
    <View>
      <TextInput placeholder='E-mail'/>
      <TextInput placeholder='Senha' />
      <Text>Cadastrar-se!</Text>
    </View>
    <View>
      <Button title="Acessar" onPress={() => false} />
    </View>
  </View>

);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 30
  }, 
  divTitulo:{flex: 1},
  divFormLogin:{flex: 2},
  divBotao:{flex: 2}
});