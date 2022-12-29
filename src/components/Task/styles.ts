import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#262626',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 20,
    },
    checkBox:{
        borderWidth: 1.5,
        borderRadius: 25,
        borderColor: '#1E6F9F',
        padding: 8,
        marginLeft: 15
    },
    checkBoxMark:{
        borderWidth: 1.5,
        borderRadius: 25,
        borderColor: '#5E60CE',
        padding: 8,
        marginLeft: 15,
        backgroundColor: '#5E60CE'
    },
    content:{
        color:'#F2F2F2',
        fontSize: 13,
        flex: 1,
        marginLeft: 16
    },
    contentMark:{
        color:'#808080',
        fontSize: 13,
        flex: 1,
        marginLeft: 16,
        textDecorationLine: "line-through",
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
})