import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

import api from './src/services/api'
import Filmes from './src/components/Filmes';

function App(){

  const [filmes, setFilmes] = useState('');
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    
    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes')
      setFilmes(response.data)
      setLoading(false)
    }

    loadFilmes();

  }, [])

if(loading){
  return(
    <View style={{alignItems:'center', justifyContent: 'center', flex: 1}}>
      <ActivityIndicator color="#121212" size={50}/>
    </View>
  )
}
else{

  return(
    <View style={style.contaner}>
      <FlatList 
      data={filmes} 
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => <Filmes data={item} />}
      />
    </View>
  )
  
  
}

}

const style = StyleSheet.create({
  contaner:{
    flex: 1,
  },
  texto:{
    fontSize:40,
    color: 'red'
  }
})


export default App;