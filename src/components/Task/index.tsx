import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

type Props = {
    content: string;
    done: boolean;
    onCheck: () => void;
    onRemove: () => void;
}

export function Task({ content, done, onCheck, onRemove }: Props){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={done ? styles.checkBoxMark :  styles.checkBox} onPress={onCheck}/>

            
            <Text style={done ? styles.contentMark : styles.content }>
                {content}
            </Text>
            
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Image source={require('../../assets/trash/trash.png')}/>
            </TouchableOpacity>
        </View>

    )
}