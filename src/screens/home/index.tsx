import { Image, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/Logo.png')}/>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button}>
            <Image source={require('../../assets/button/plus.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

