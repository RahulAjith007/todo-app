import React, {useState} from 'react';
import { View, StyleSheet, Button, Modal, TextInput } from 'react-native'

const GoalInput = props => {

    const [enteredGoal ,setEnteredGoal] = useState('') 

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
      }

      const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
      }

    return(
        <Modal visible={props.visible} animationType ='slide'>
        <View style={styles.AddContentLayout}>
        <TextInput style = {styles.TextInput}
         placeholder='Add your goals here'
           onChangeText={goalInputHandler}
           value={enteredGoal}
         />
         <View style={styles.ButtonGroup}>
         <View style={styles.Button}>
         <Button onPress={props.onCancel } style={styles.DeleteButton}color='red' title="CANCEL"/>
         </View>

         <View style={styles.Button}>
        <Button onPress={addGoalHandler} style={styles.AddButton} title="ADD"/>
         </View>
        </View>
        </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    TextInput: {
        borderBottomColor: 'grey',
        borderWidth: 1,
        padding: 5,
        borderRadius:10,
        width: '80%',
        marginBottom: 10
      },
      AddContentLayout: {
          flex:1,
        justifyContent:'center',
        alignItems:'center'

      },
      AddButton:{
        padding: 10,
        marginLeft:5
      },
      DeleteButton:{
        marginRight:5
      },

      ButtonGroup:{
          flexDirection:'row', 
          justifyContent: 'space-between',
          width: '60%'
      },

      Button:{
          width: '40%'
      }
})

export default GoalInput;