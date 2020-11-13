import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';
import { Button, Icon } from 'react-native-elements';
import { UsersProvider } from './src/context/UsersContext';

const Drawer = createDrawerNavigator();

export default props => {
  return (
    <UsersProvider>
      <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="UserList"
            screenOptions={screenOptions}>
              <Drawer.Screen 
                name="UserList" 
                component={UserList}
                options={({ navigation }) => {
                  return {
                    title: "Lista de Usuários",
                    headerRight: () => (
                      <Button 
                        onPress={() => navigation.navigate("UserForm")}
                        type="clear"
                        icon={<Icon name="add" size={25} color="white" />}
                      />
                    )
                  }
                }}
              />
              <Drawer.Screen
                name="UserForm"
                component={UserForm}
                options={{
                  title: "Formulário de Usuários"
                }}
              />
          </Drawer.Navigator>
      </NavigationContainer>
    </UsersProvider>
  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
}