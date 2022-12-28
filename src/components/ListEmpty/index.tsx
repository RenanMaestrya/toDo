import { View, Image, Text } from "react-native";

export function ListEmpty(){
    return(
        <View>
            <Image source={require('../../assets/empty')}/>
            <Text>Você ainda não tem tarefas cadastradas 
                Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}