import { useState } from 'react'
import { Image, View, TextInput, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { Task } from '../../components/Task';
import { ListEmpty } from '../../components/ListEmpty';

export interface Task {
  id: number;
  content: string;
  done: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [contentTask, setContentTask] = useState('')
  const taskLen = tasks.length

    function handleAddTask(newTask: string) {
    setTasks((previousState) => [
      ...previousState,
      {
        id: new Date().getTime(),
        content: newTask,
        done: false,
      },
    ]);
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  }

  function handleDoneTask(){

  }

  return (
    <>
      {/* <--- View text input n header ---> */}

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

          <TouchableOpacity onPress={() => handleAddTask} style={styles.button}>
              <Image source={require('../../assets/button/plus.png')} />
          </TouchableOpacity>
        </View>

        {/* <--- View tarefas criadas e concluidas ---> */}

        <View>
          <Text>Criadas {taskLen}</Text>
          <Text>Concluídas {}</Text>
        </View>


        {/* <--- Lista de itens ---> */}

        <FlatList
          data={tasks}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Task 
              key={item.id}
              content={item.content} 
              onRemove={() => handleRemoveTask}/>

          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={ListEmpty}
        />
        
      </View>
    </>
  );
}