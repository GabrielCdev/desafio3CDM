import React from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { toUpperFirst } from '../util'

const PeopleListItem = (props) => {
	const { people, onPressItemDetails } = props
	const { name } = people.nome
	return (
		<TouchableOpacity
			onPress={() => {
				onPressItemDetails(people)
			}}
		>
			<View style={style.line}>
				<Image style={style.avatar} source={{ uri: people.imagem }} />
				<Text style={style.lineText} key={name}>
					{`${toUpperFirst(name)}`}
				</Text>
			</View>
		</TouchableOpacity>
	)
}
const style = StyleSheet.create({
	line: {
		height: 60,
		borderBottomWidth: 2,
		borderBottomColor: '#000000',
		flexDirection: 'row',
		alignItems: 'center'
	},
	avatar: {
		aspectRatio: 1,
		margin: 10,
		flex: 1,
		borderRadius: 50
	},
	lineText: {
		fontSize: 25,
		flex: 7,
		color: '#fff'
	}
})

export default PeopleListItem
