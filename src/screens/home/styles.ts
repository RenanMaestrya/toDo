import { StyleSheet } from "react-native"
import { setStatusBarHidden } from 'expo-status-bar';

export const styles = StyleSheet.create({
    containerSuperior:{
        backgroundColor: '#0D0D0D',
        width: '100%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        padding: 24
    },
    logo:{
        marginTop: 36,
        marginBottom: 24
    },
    form:{
        flexDirection: 'row',
        position: 'absolute',
        top: -28
    },
    input:{
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#FDFCFE',
        padding: 16,
        fontSize: 16,
        marginRight: 6,
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTask:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 32
    },
    textTask:{

    }
})