import React from 'react'
import {ScrollView,	Text,	StyleSheet ,	Image,	SafeAreaView , View, Dimensions} from 'react-native'

let ScreenHeight = Dimensions.get('window').height

export default class DetalhesPersonasPag extends React.Component {
	
	constructor(props) {
		super(props)
	}

	render() {
		const peoples = this.props.route.params.peoples
		// console.log(peoples.imagem)
		return (
			<ScrollView style={style.scroll}>
				<SafeAreaView>
					<View style={style.container}>
				     	<Image style={style.picture} source={{uri:peoples.imagem}}/>
						<Text style={style.title}>Nome:</Text>
						<Text style={style.text}>{peoples.nome.name}</Text>
						<Text style={style.title}>Origem:</Text>
						<Text style={style.text}>{peoples.origem}</Text>
						<Text style={style.title}>Nascimento:</Text>
						<Text style={style.text}>{peoples.nascimento}</Text>
						<Text style={style.title}>Idade:</Text>
						<Text style={style.text}>{peoples.idade}</Text>
                        <Text style={style.title}>Profissão:</Text>
						<Text style={style.text}>{peoples.profissao}</Text>
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
