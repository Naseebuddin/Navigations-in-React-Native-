import { View ,Text, SafeAreaView} from 'react-native'
import React from 'react'
import Route from './src/Route/Route'


export default function App(){
  return(
    <SafeAreaView style={{flex:1,backgroundColor:'rgb(255,228,225)'}}>
    <View style={{flex:1}}>
     
   
    <Route/>
      
      
    </View>
    </SafeAreaView>
  )
}