import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import {getList, del} from "../api"

export const List = ({navigation, route}) => {

    const [data, setData] = useState([])
    const [refreshing, setRefreshing] = useState(false)

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        getList().then((props) => {
          setData(props)
          console.log(props)
        })
        setRefreshing(false);
      }, [getList]);

    useEffect(() => {
      const listen = navigation.addListener('focus', () => {
        onRefresh()
      });
      return listen;
    }, [navigation]);
  
  

    return(<View style = {{flex: 1}}>
        <TouchableOpacity style = {{width:"100%", height: 80, backgroundColor: "#33ECFF", justifyContent: "center", alignItems: 'center'}} onPress = {() => navigation.push("Add")}>
            <Text>Add new</Text>
        </TouchableOpacity>
        <FlatList   data = {data} 
                    renderItem = {(item) => <View style = {{width: "100%", height: 60, borderBottomColor: "rgba(128, 128, 128, 0.5)", borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, justifyContent: 'space-between'}}>
                        <TouchableOpacity style = {{flex: 9}} onPress = {() => navigation.push("Show", {
                          text: item.item.description
                        })}>
                          <Text>{item.item.title}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {{flex: 1}} onPress = {async () => {
                          await del(item.item.id)
                          onRefresh()
                        }}>
                          <AntDesign name="delete" size={24} color="black" />
                        </TouchableOpacity>
                    </View>}
                    contentContainerStyle = {{width: "100%"}}
                    refreshControl = { <RefreshControl  refreshing={refreshing}  
                                                        onRefresh={() => {onRefresh()}} />} />

    </View>)
}