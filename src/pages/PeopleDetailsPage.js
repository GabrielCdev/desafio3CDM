import React from 'react'
import {ScrollView,	Text,	StyleSheet ,	Image,	SafeAreaView , View,Dimensions} from 'react-native'

let ScreenHeight = Dimensions.get('window').height

export default class PeopleDetailsPage extends React.Component {
	constructor(props) {
		super(props)
		console.log('Passou pelo constructor PDP')
	}

	render() {
		const people = this.props.route.params.people
		return (
			<ScrollView style={style.scroll}>
				<SafeAreaView>
					<View style={style.container}>
						<Image
							style={style.picture}
							source={{ uri: people.imagem }}
						/>
						<Text style={style.title}>Nome e sobrenome:</Text>
						<Text style={style.text}>{people.nome.name}</Text>
						<Text style={style.title}>Gênero: </Text>
						<Text style={style.text}> {people.genero}</Text>
						<Text style={style.title}>Email:</Text>
						<Text style={style.text}>{people.email}</Text>
						<Text style={style.title}>Aniversário:</Text>
						<Text style={style.text}> {people.aniversario}</Text>
						<Text style={style.title}>Idade:</Text>
						<Text style={style.text}>{people.idade}</Text>
					</View>
				</SafeAreaView>
			</ScrollView>
		)
	}
}

const style = StyleSheet.create({
	scroll: {
		flex: 1,
		backgroundColor: '#FFF'
	},

	line: {
		height: 100,
		borderBottomWidth: 1,
		borderBottomColor: '#000',
		alignItems: 'center',
		flexDirection: 'row'
	},

	text: {
		fontSize: 25,
		textAlign: 'center',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center'
	},

	picture: {
		aspectRatio: 1,
		margin: 40,
		height: 200,
		width: 200,
		justifyContent: 'center',
		display: 'flex',
		alignItems: 'center'
	},
	title: {
		fontSize: 30,
		textAlign: 'center',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		fontWeight: 'bold',
		marginBottom: 10,
		marginTop: 10
	},
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f2f2f2',
		flex: 1,
		height: ScreenHeight
	}
})
