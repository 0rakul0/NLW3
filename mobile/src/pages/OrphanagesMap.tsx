import React from 'react'
import MapView, { Marker,Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import mapMarker from '../images/map-marker.png';
import {Feather} from '@expo/vector-icons';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OrphanagesMap(){
    const navigation = useNavigation()
    function handleNavigateToOrphanagesDetails(){
        navigation.navigate('OrphanagesDetails')
    }
    return( <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: -22.8103905,
            longitude: -43.3196433,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
        >
          <Marker icon={mapMarker}
          calloutAnchor={{
            x:1,
            y:0.8,
          }}
            coordinate={{
              latitude: -22.8103905,
              longitude: -43.3196433,
            }}
          >
            <Callout tooltip={true} onPress={handleNavigateToOrphanagesDetails}>
              <View style={styles.calloutContainer}></View>
              <Text style={styles.calloutText}> America Garden</Text>
            </Callout>
          </Marker>
        </MapView>
        <View style={styles.footer}>
          <Text style={styles.footerText}>2 orfanatos encontrados</Text>
            <TouchableOpacity style={styles.createOrphanageButton} onPress={()=>{}}>
              <Feather name="plus" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
      </View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    calloutContainer:{
      width:160,
      height:46,
      paddingHorizontal:16,
      backgroundColor:'rgba(255,255,255,0.8)',
      borderRadius:15,
      alignItems:'center',
      justifyContent:'center',
    },
    calloutText:{
      fontFamily:'Nunito_700Blod',
      color:'#0089a5',
      fontSize:14,
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    },
    footer:{
      position:'absolute',
      left:24,
      right:24,
      bottom:32,
      backgroundColor:'#fff',
      borderRadius:20,
      height:56,
      paddingLeft: 24,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      elevation:4,
    },
    footerText:{ 
      fontFamily:'Nunito_700Blod',
      color:'#8fa7b3',
    },
    createOrphanageButton:{
      width:56,
      height:56,
      backgroundColor:'#15c3d6',
      borderRadius:20,
      justifyContent:'center',
      alignItems:'center',
    }
  });
  