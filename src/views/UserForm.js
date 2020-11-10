import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import UsersContext from '../context/UsersContext'

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)

    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Nome completo"
                value={user.name}
            />
            <Text>E-mail</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="E-mail: email@email.com"
                value={user.email}
            />
            <Text>Telefone</Text>
            <TextInput
                style={style.input}
                onChangeText={telefone => setUser({...user, telefone})}
                placeholder="Telefone: (XX) 99999-9999"
                value={user.telefone}
            />
            <Text>Cidade</Text>
            <TextInput
                style={style.input}
                onChangeText={cidade => setUser({...user, cidade})}
                placeholder="Cidade: Salvador"
                value={user.cidade}
            />
            <Text>Estado</Text>
            <TextInput
                style={style.input}
                onChangeText={estado => setUser({...user, estado})}
                placeholder="Estado: Bahia"
                value={user.estado}
            />
            <Text>Avatar (URL)</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Insira a URL do avatar."
                value={user.avatarUrl}
            />
            <Button 
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser': 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
    }
})