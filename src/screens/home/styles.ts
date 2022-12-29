import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%'
    },
    containerSuperior:{
        backgroundColor: '#0D0D0D',
        width: '100%',
        height: '25%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerList: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        padding: 24,
        height:'75%',
        bottom: 0
    },
    logo:{
        marginTop: 36,
        marginBottom: 24
    },
    form:{
        flexDirection: 'row',
        marginTop: -50,
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
        paddingTop: 32,
        paddingBottom: 16,
        
    },
    textTaskCriadas:{
        color: '#4EA8DE',
    },
    textTaskConcluidas:{
        color: '#8284FA',
    },
    viewCount:{
        flexDirection: 'row'
    },
    counterTask:{
        color: '#fff', 
        backgroundColor: '#333333', 
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 10
    }
})