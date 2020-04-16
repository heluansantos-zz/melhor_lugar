import * as React from 'react';
import { Text, View, StyleSheet, Card, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatGrid } from 'react-native-super-grid';
import { Actions } from 'react-native-router-flux';
 
export default class submenu extends React.Component {
  
  render() {
    const items = [
      { name: 'EMERGENCIAS', code: '#1abc9c' }, { name: 'SALAO DE BELEZA', code: '#2ecc71' },
      { name: 'RESTAURANTES', code: '#3498db' }, { name: 'LIVRARIAS', code: '#9b59b6' },
      { name: 'SUPER MERCADOS', code: '#34495e' }, { name: 'OFICINAS', code: '#16a085' },
      { name: 'CAFE', code: '#27ae60' }, { name: 'PAPELARIAS', code: '#2980b9' },
      { name: 'PIZZARIAS', code: '#8e44ad' }, { name: 'CASA DE SHOW', code: '#2c3e50' },
      { name: 'DESTRIBUIDORAS', code: '#f1c40f' }, { name: 'APARTAMENTOS', code: '#e67e22' },
      { name: 'INFORMATICA', code: '#e74c3c' }, { name: 'COMPRA E VENDA', code: '#ecf0f1' },
      { name: 'SALAO DE BELEZA F', code: '#95a5a6' }, { name: 'BAR', code: '#f39c12' },
      { name: 'SALAO DE BELEZA M', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
      { name: 'CLINICA VETERINARIA', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
    ];
    return (
      <View style={{height:'100%',backgroundColor:'#000'}}>
        <Image
          style={{width: 50, height: 50,alignSelf:'center'}}
          source={require('../../../Melhor_Lugar/src/img/location.gif')}
        />
        <Text style={{textAlign:'center', fontSize:20,color:'#ddd'}}>Emergencias em Caicó - RN</Text>
        <View style={{height:'100%'}}>
      <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => Actions.detalhes()}>
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
          </TouchableOpacity>
        )}
      />
      </View>
     </View> 
    );
  }
}
 
const styles = StyleSheet.create({
  gridView: {
    backgroundColor:'#000',
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
});