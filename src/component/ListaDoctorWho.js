import React from 'react'
import { View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native'
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
     backgroundColor: '#0455eb',
     borderBottomColor: '#000000',
	},
	titleStyle: {
		color: '#000',
		fontSize: 25,
		fontWeight: 'bold',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 15
	}
})
export default ListaDoctorWho