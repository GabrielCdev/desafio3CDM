import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ceil } from 'react-native-reanimated';
import {toUpperFirst} from '../util'
 

const ListaDWInfo = (props) => {
    const { people, onPressItemDetails} = props
    const { name } = people.nome
	
	return (	
        <TouchableOpacity onPress={() => {
            onPressItemDetails(people)
        }}>
        <View style={style.line}>
            <Image style={style.avatar} source={{uri: people.imagem}}/>
            <Text style={style.linetext} key={name}>
                {`${toUpperFirst(name)}`}
            </Text>            
         </View>
		 <View style={style.space}></View>
        </TouchableOpacity>
    )
}
 
const style = StyleSheet.create({
	line: {
		height: 160,
		width: '100%',
		borderBottomWidth: 4,
		borderTopWidth: 12,
		borderRightWidth: 7,
		borderLeftWidth: 4,
		borderLeftColor: '#000000',
		borderRightColor: '#000000',
		borderTopColor: '#060855',
		borderBottomColor: '#000000',
		flexDirection: 'column',
		alignItems: 'center'
		
	},
	avatar: {
		width: 120,
		height: 105,
		aspectRatio: 1,
		margin: 10,
		borderLeftWidth: 4,
		borderTopWidth: 4,
		borderRightWidth: 4,
		borderBottomWidth: 4
	},
	linetext: {
		fontWeight: "bold",
		position:'absolute',
		color: '#000000',
		left:'47%',
		bottom:'7%'
	},
	space:{
	 backgroundColor: '#fff8dc',
	 height: 3,
	 width: '100%'
	}
}
)
 
export default ListaDWInfo