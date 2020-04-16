import * as React from 'react';
import { Text, View, StyleSheet, Card, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class inicio extends React.Component {

  render() {
    return (
      <View style={styles.prim}>

        <View style={{ alignItems: 'center', marginTop: '20%' }}>
          <Image
            style={{ width: 200, height: 200 }}
            source={require('../../../Melhor_Lugar/src/img/location.gif')}
          />
          <TouchableOpacity style={styles.press} onPress={() => Actions.maps()}>
            <Text style={{ alignItems: 'center', fontSize: 20, color: '#fff', marginTop: 10 }}>
              > Localizar agora!
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={{ textAlign: 'center', fontSize: 16, color: '#ddd', marginTop: '60%' }}>
            Cadastrar meu negocio!
            </Text>
        </TouchableOpacity>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  prim: {
    backgroundColor: '#000',
    height: '100%',
    width: '100%'
  }
});