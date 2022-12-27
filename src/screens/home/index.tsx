import { useState } from 'react'
import { Image, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Task } from '../../components/TaskList';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [contentTask, setContentTask] = useState('')

  function handleAddTask(newTaskTitle: string) {
    setTasks((previousState) => [
      ...previousState,
      {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      },
    ]);
  }

  function handleToggleTaskDone(id: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task = {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  }

  return (
    <>
      <View style={styles.containerSuperior}>
        <Image style={styles.logo} source={require('../../assets/Logo.png')}/>
      </View>
      <View style={styles.container}>

        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#6B6B6B"
            onChangeText={setContentTask}
            value={contentTask}
          />

          <TouchableOpacity onPress={handleAddTask} style={styles.button}>
              <Image source={require('../../assets/button/plus.png')} />
          </TouchableOpacity>
        </View>
        
      </View>
    </>
  );
}