import React,{useState} from 'react' ;
import { View, StyleSheet, FlatList, Button} from 'react-native'
import GoalItem from './components/TodoItem';
import GoalInput from './components/TodoInput';

const App = () => {


const [courseGoals, setCourseGoals] = useState([])
const [isAddMode , setIsAddMode] = useState(false)

const addGoalhandler =(goalTitle) => {
 setCourseGoals(currentGoals => [...currentGoals, {
   id: Math.random().toString() ,value: goalTitle
 }])
 setIsAddMode(false)
}

const deleteGoalHandler =(id) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(item => item.id !== id)
    })
}

const cancelGoalAdditionHandler =() => {
  setIsAddMode(false)
}


  return (
    <View style={styles.mainContent}>
    <Button title="Add new Todo" onPress={() => setIsAddMode(true)}/>
        <GoalInput visible={isAddMode} onAddGoal={addGoalhandler} onCancel={cancelGoalAdditionHandler}/>
      <View>
        <FlatList
        keyExtractor ={ (item, index) => item.id }
          data={courseGoals}
          renderItem = {(itemData) => (
            <GoalItem itemID = {itemData.item.id} onDelete={deleteGoalHandler} title={itemData.item.value}/>
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContent: {
    marginTop: 55,
    padding: 25
  },
 
})


export default App;