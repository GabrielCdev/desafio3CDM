import React from 'react';
import { View } from 'react-native';
import axios from 'axios';
import ListaDoctorWho from '../component/ListaDoctorWho'



export default class DetalhesPersonas extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      peoples: []
    }
  }
 
  componentDidMount(){
    axios
    .get('https://demo7520276.mockable.io/doctorwho')
    .then((response) => {
      const { results } = response.data
      this.setState({
        peoples: results
      })
    })
  }
 
  render() {
		return (
			<View>
				<ListaDoctorWho
					peoples={this.state.peoples}
					onPressItem={(people) => {
						this.props.navigation.navigate('Detalhes do personagem', {
							peoples: people
						})
					}}
				/>
			</View>
		)
	}
 
}