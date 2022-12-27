import { FlatList, TouchableOpacity } from "react-native";

export interface Task {
    id: number;
    title: string;
    done: boolean;
}

interface TasksListProps {
    tasks: Task[];
    toggleTaskDone: (id: number) => void;
    removeTask: (id: number) => void;
}

export function TaskList({
    tasks,
    toggleTaskDone,
    removeTask,
}: TasksListProps){
    return (
        <FlatList
            data={tasks}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => {
                return(
                    <TouchableOpacity>

                    </TouchableOpacity>
                )
            }}       
        />
    )
}