import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})

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