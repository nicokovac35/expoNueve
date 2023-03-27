import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import  * as Location from 'expo-location';

export default function App() {

    const [mapRegion, setMapRegion] = useState ({
        //-33.43700644245535, -70.63431606556514
        //-33.50994190763904, -70.7565329424722
        
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
      <MapView
         style={styles.map}
         initialRegion={{
            latitude: -33.43700644245535,
            longitude:-70.63431606556514 ,
            latitudeDelta: 0.5221,
            longitudeDelta: 0.3525,

         }}
         showsUserLocation
         loadingEnabled
         mapType="terrain"

      >
         <Marker 
             coordinate={
            {
                latitude: -33.43700644245535,
                longitude:-70.63431606556514 ,
            }
         }
         
      />
      <Marker 
             coordinate={
            {
                latitude: -33.50994190763904,
                longitude:-70.7565329424722,
            }
         }
         
      />
    </MapView>
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