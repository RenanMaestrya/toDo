import { useState } from 'react'
import { Image, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Task } from '../../components/Task';
import { styles } from './styles';

export default function Home() {
  const [task, setTask] = useState<string[]>([])
  const [contentTask, setContentTask] = useState('')

  function handleTaskAdd(){

    setTask(prevState => [...prevState, contentTask])
    setContentTask('')
  }

  function handleTaskRemove(){

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

          <TouchableOpacity onPress={handleTaskAdd} style={styles.button}>
              <Image source={require('../../assets/button/plus.png')} />
          </TouchableOpacity>
        </View>
        
      </View>
    </>
  );
}