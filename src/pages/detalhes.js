import * as React from 'react';
import { Text, View, StyleSheet, Card, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatGrid } from 'react-native-super-grid';
 
export default class detalhes extends React.Component {
  
  render() {
    const items = [
      { name: 'EMERGENCIAS', code: '#1abc9c' }, 
    ];
    return (
      <View style={{height:'100%',backgroundColor:'#000'}}>
        <Image
          style={{width: 50, height: 50,alignSelf:'center'}}
          source={require('../../../Melhor_Lugar/src/img/location.gif')}
        />
        <Text style={{textAlign:'center', fontSize:20,color:'#ddd'}}>Hospital Regional em Caicó - RN</Text>
        <View style={{height:'100%'}}>
      <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
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
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    height: 500,
    width: 395
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