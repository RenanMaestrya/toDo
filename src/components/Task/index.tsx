import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

type Props = {
    content: string;
    onRemove: () => void;
}

export function Task({ content, onRemove }: Props){
    return(
        <View style={styles.container}>
            <Text style={styles.content}>
                {content}
            </Text>
            
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Image source={require('../../assets/trash/trash.png')}/>
            </TouchableOpacity>
        </View>

    )
}