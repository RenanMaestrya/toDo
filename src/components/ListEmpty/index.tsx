import { View, Image, Text } from "react-native";
import { styles } from './styles';

export function ListEmpty(){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/empty/Clipboard.png')}/>
            <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}