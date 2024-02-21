import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity , 
  ScrollView} 
  from 'react-native';
import { useState } from 'react';
export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([...tasks, { id: Math.random().toString(), value: task }]);
      setTask("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Digite uma nova tarefa"
          style={styles.input}
          onChangeText={setTask}
          value={task}
        />
        <TouchableOpacity
          style={styles.addbutton}
          onPress={addTask}
        >
          <Text style={styles.addbuttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView  showsVerticalScrollIndicator={false}>
        {tasks.map((task) => (
          <View
            key={task.id}
            style={styles.task}
          >
            <Text>{task.value}</Text>
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 10,
    width: '75%'
  },
  addbutton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5
  },
  addbuttonText: {
    color: 'white'
  },
  task: {
    padding: 10,
    backgroundColor: 'lightgray',
    marginBottom: 10,
    borderRadius: 5
  }
});
