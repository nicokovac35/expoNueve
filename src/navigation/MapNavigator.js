import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import  * as Location from 'expo-location';

export default function App() {

    const [mapRegion, setMapRegion] = useState ({
        //-33.43700644245535, -70.63431606556514
        latitude: -33.43700644245535,
        longitude:-70.63431606556514 ,
        latitudeDelta: 0.5221,
        longitudeDelta: 0.3525,

    });

    const userLocation = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== 'ganted'){
            setErrorMsg('Permision Denied');
            return;
        }
    }

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
            region={mapRegion}
      />
      <Marker coordinate={mapRegion} title='Marker'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});