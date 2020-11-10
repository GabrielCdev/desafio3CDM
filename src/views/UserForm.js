import React, { useState } from 'react'
import { Text } from 'react-native'

export default ({ route, navigtion }) => {
    const [user, setUser] = useState(route.params ? route.params : {})

    return (
        <Text>{user.id}</Text>
    )
}