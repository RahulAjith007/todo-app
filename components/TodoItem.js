import React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity
} from 'react-native'

const GoalItem =(props) => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.itemID)}>
        <View style={styles.List}>
        <Text style ={styles.ListItem}>{props.title}</Text> 
        </View>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    List:{
        paddingLeft:10,
        paddingRight:10
      },
      ListItem:{
        borderWidth:1,
        marginBottom:10,
        marginTop:10,
        padding: 10,
        backgroundColor: '#c9c6bd'
      }
})


export default GoalItem