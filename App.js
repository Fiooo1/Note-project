import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { List } from './screens/list'
import { Add } from './screens/add'
import { Show } from './screens/show'

const RootStack = createStackNavigator()

const list = ({navigation, route}) => <List navigation = {navigation} route = {route}/>
const add = ({navigation, route}) => <Add navigation = {navigation} route = {route}/>
const show = ({navigation, route}) => <Show navigation = {navigation} route = {route}/>

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions = {{headerStyle:{
        }
        }}>
          <RootStack.Screen name = "All" component = {list} />
          <RootStack.Screen name = "Add" component = {add} />
          <RootStack.Screen name = "Show" component = {show} />
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
