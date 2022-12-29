import { useState } from "react";
import {
  Image,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";
import { ListEmpty } from "../../components/ListEmpty";

export interface Task {
  id: number;
  content: string;
  done: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [contentTask, setContentTask] = useState("");
  const [listDone, setListDone] = useState<Task[]>([]);
  const taskLen = tasks.length;

  function handleAddTask() {
    if(tasks.find((res:Task)=> res.content === contentTask))return
    if (contentTask != "") {
      setTasks((previousState) => [
        ...previousState,
        {
          id: new Date().getTime(),
          content: contentTask,
          done: false,
        },
      ]);
    }
  }

  function handleRemoveTask(id: number) {
    Alert.alert("Remover", `Remover tarefa?`, [
      {
        text: "Sim",
        onPress: () => setTasks(tasks.filter((tasks) => tasks.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleDoneTask(id: number) {
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

    const res = tasks.filter((res: Task) => {
      return res.done === false;
    });

    setListDone(res);
  }

  return (
    <View style={styles.container}>
      {/* <--- View text input n header ---> */}

      <View style={styles.containerSuperior}>
        <Image style={styles.logo} source={require("../../assets/Logo.png")} />
      </View>
      <View style={styles.containerList}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#6B6B6B"
            onChangeText={setContentTask}
            value={contentTask}
          />

          <TouchableOpacity onPress={handleAddTask} style={styles.button}>
            <Image source={require("../../assets/button/plus.png")} />
          </TouchableOpacity>
        </View>

        {/* <--- View tarefas criadas e concluidas ---> */}

        <View style={styles.containerTask}>
          <View style={styles.viewCount}>
            <Text style={styles.textTaskCriadas}>Criadas </Text>
            <Text style={styles.counterTask}>{taskLen}</Text>
          </View>
          <View style={styles.viewCount}>
            <Text style={styles.textTaskConcluidas}>Concluídas </Text>
            <Text style={styles.counterTask}>{listDone.length}</Text>
          </View>
        </View>
        <View style={{ height: 1, backgroundColor: "#262626" }}></View>

        {/* <--- Lista de itens ---> */}

        <FlatList
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              content={item.content}
              done={item.done}
              onCheck={() => handleDoneTask(item.id)}
              onRemove={() => handleRemoveTask(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={ListEmpty}
        />
      </View>
    </View>
  );
}
