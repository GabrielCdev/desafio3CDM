import React from 'react'
import {View, StyleSheet, SafeAreaView, FlatList, Text} from 'react-native'
import ListaPessoasItem from './ListaPessoasItem'





const ListaPessoas = props => {
    const {peoples, onPressItem} = props

    const renderItem = ({item}) => {
        return (
            <ListaPessoasItem 
                key={item.name.first} 
                people={item}
                onPressItemDetails={onPressItem}
            />
        )
    }

    const header= () => {
        return (
            <View style={style.headerStyle}>
                <Text style={style.titleStyle}>
                    Lista de Contatos
                </Text>
            </View>
        )
    }

    return (
        <View style={style.container}>
            <SafeAreaView>
                <FlatList
                    data={peoples}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => {item.name.first + index}}
                    ListHeaderComponent={header}
                    stickyHeaderIndices={[0]}
                />
            </SafeAreaView>
        </View>
    )
}

const style = StyleSheet.create(
    {
        container: {
            backgroundColor: '#1A1AF7'
        },
        headerStyle: {
            flex: 1,
            height: 50,
            width: '100%',
            backgroundColor: "#0D9CFA",
            justifyContent: "center",
            alignItems: 'center'
        },
        titleStyle: {
            color: '#000',
            fontSize: 20
        }
    }
)

export default ListaPessoas