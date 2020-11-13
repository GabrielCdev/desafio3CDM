import React from 'react'
import { View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native'
import PeopleListItem from './PeopleListItem'

const PeopleList = (props) => {
	const { peoples, onPressItem } = props
	const renderItem = ({ item }) => {
		return (
			<PeopleListItem
				key={item.nome.name}
				people={item}
				onPressItemDetails={onPressItem}
			/>
		)
	}
	const header = () => {
		return (
			<View style={style.headerStyle}>
				<Text style={style.titleStyle}>Perfil</Text>
			</View>
		)
	}
	return (
		<View style={style.container}>
			<SafeAreaView>
				<FlatList
					data={peoples}
					renderItem={renderItem}
					keyExtractor={(item) => item.nome.name}
					ListHeaderComponent={header}
				/>
			</SafeAreaView>
		</View>
	)
}
const style = StyleSheet.create({
	container: {
		backgroundColor: '#e67300'
	},
	headerStyle: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center'
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
export default PeopleList
