import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Detalhes(props){
    return(
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
                    <Text style={{color:'#FFF', fontSize: 20, textAlign: 'center'}}>
                        VOLTAR
                    </Text>
                </TouchableOpacity>

                <Text style={styles.titulo}>{props.filmes.nome}</Text>
                <Text style={styles.sinopse}>Sinopse</Text>
                <Text style={styles.descricao}>{props.filmes.sinopse}</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
 container:{
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
 },
 modalContainer:{
     width: '90%',
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
 },
 btnVoltar:{
    backgroundColor: '#E52246',
    padding: 25,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
 },
 titulo:{
     textAlign: 'center',
     color: '#FFF',
     padding: 10,
     fontSize: 25,
     fontWeight: 'bold'
 },
 sinopse:{
    color: '#FFF',
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10
 },
 descricao:{
    marginRight:10,
    color: '#FFF',
    marginLeft: 10
 }



})