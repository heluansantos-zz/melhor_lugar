import React, { Component } from 'react';
import {ScrollView, View, Text, StyleSheet, Dimensions,
    PermissionsAndroid, Platform, Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default class App extends Component {
    state = {
        currentLongitude: 'unknown', //Initial Longitude
        currentLatitude: 'unknown', //Initial Latitude
        places: [
            {
                id: 1,
                title: 'Ouro Branco RN',
                description: 'Minha localização...',
                latitude: 12312,
                longitude: 123213,
            },
        ]
    }


    ////////////////////////////////////////////////////////////////////

    componentDidMount = () => {
        var that = this;
        //Checking for the permission just after component loaded
        if (Platform.OS === 'ios') {
            this.callLocation(that);
        } else {
            async function requestLocationPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                            'title': 'Location Access Required',
                            'message': 'This App needs to Access your location'
                        }
                    )
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //To Check, If Permission is granted
                        that.callLocation(that);
                    } else {
                        alert("Permission Denied");
                    }
                } catch (err) {

                    alert("err", err);
                    console.log(err)
                }
            }
            requestLocationPermission();
        }
    }
    callLocation(that) {
        Geolocation.getCurrentPosition(
            (position) => {
                const currentLongitude = JSON.stringify(position.coords.longitude);
                const currentLatitude = JSON.stringify(position.coords.latitude);
                that.setState({ currentLongitude: currentLongitude });
                that.setState({ currentLatitude: currentLatitude });
                
            },
            (error) => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        that.watchID = Geolocation.watchPosition((position) => {

            console.log(position);
            this.setState({ latitude: position.coords.latitude });
            this.setState({ longitude: position.coords.longitude });
            const currentLongitude = JSON.stringify(position.coords.longitude);
            const currentLatitude = JSON.stringify(position.coords.latitude);
            that.setState({ currentLongitude: currentLongitude });
            that.setState({ currentLatitude: currentLatitude });
            
        });
    }
    componentWillUnmount = () => {
        Geolocation.clearWatch(this.watchID);
    }
    //////////////////////////////////////////////////////////////////

    _mapReady = () => {
        this.state.places[0].mark.showCallout();
    };

    render() {
        const { latitude, longitude } = this.state.places[0];
        
        return (
            
            <View style={styles.container}>
                
                <MapView
                    ref={map => this.mapView = map}
                    initialRegion={{
                        latitude,
                        longitude,
                        latitudeDelta: 0.0142,
                        longitudeDelta: 0.0231,
                    }}
                    style={styles.mapView}
                    rotateEnabled={false}
                    scrollEnabled={false}
                    zoomEnabled={false}
                    showsPointsOfInterest={false}
                    showBuildings={false}
                    onMapReady={this._mapReady}
                >
                    {this.state.places.map(place => (
                        <MapView.Marker
                            ref={mark => place.mark = mark}
                            title={place.title}
                            description={place.description}
                            key={place.id}
                            coordinate={{
                                latitude: place.latitude,
                                longitude: place.longitude,
                            }}
                        />
                    ))}
                </MapView>
                <ScrollView
                    style={styles.placesContainer}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(e) => {
                        const place = (e.nativeEvent.contentOffset.x > 0)
                            ? e.nativeEvent.contentOffset.x / Dimensions.get('window').width
                            : 0;

                        const { latitude, longitude, mark } = this.state.places[place];

                        this.mapView.animateToCoordinate({
                            latitude,
                            longitude
                        }, 500);

                        setTimeout(() => {
                            mark.showCallout();
                        }, 500)
                    }}
                >
                    {this.state.places.map(place => (
                        <View key={place.id} style={styles.place}>
                            <Text style={styles.title}>{place.title}</Text>
                            <Text style={styles.description}>{place.description}</Text>
                            <View style={{
                                justifyContent: 'space-around',
                                flexDirection: 'column', margin: 10
                            }}>

                                <Button onPress={() => Actions.menu()}
                                    title="Essa é minha localização!"
                                    color="#841584"
                                    accessibilityLabel="Learn more about this purple button"
                                />
                                <Button onPress={() => Actions.inicio()}
                                    title="Corrigir localização?"
                                    color="#841584"
                                    accessibilityLabel="Learn more about this purple button"
                                />
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    mapView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    placesContainer: {
        width: '100%',
        maxHeight: 200,
    },

    place: {
        width: width - 40,
        maxHeight: 200,
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
        backgroundColor: 'transparent',
    },

    description: {
        color: '#999',
        fontSize: 12,
        marginTop: 5,
    },
});