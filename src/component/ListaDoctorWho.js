import React from 'react'
import {View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native'
import ListaDWInfo from './ListaDWInfo'


const ListaDoctorWho = (props) => {
	const { peoples, onPressItem } = props
	const renderItem = ({ item }) => {
		return (
			<ListaDWInfo
				key={item.nome.name}
				people={item}
				onPressItemDetails={onPressItem}
			/>
		)
	}
	
	return (
		<View style={style.container}>
			<SafeAreaView>
				<FlatList
					data={peoples}
					renderItem={renderItem}
					keyExtractor={(item) => item.nome.name}
				/>
			</SafeAreaView>
		</View>
	)
}
 
const style = StyleSheet.create({
    container: {
		width: '100%',
		alignSelf: "center",
        backgroundColor: '#0202B1',
        borderBottomColor: '#000000',
	}
})
export default ListaDoctorWho