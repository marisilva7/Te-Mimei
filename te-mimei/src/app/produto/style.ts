import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    Header: {
        padding: 16
    },
    HeaderImage: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10
    },
    restaurantName: {
        fontSize: 35,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10,
        color: "#bf3c8d",
        marginTop: 10

    },
    subtitle: {
        color: "#666",
        marginTop: 4,
        textAlign: "center",
        width: "80%",
        marginLeft: 40,
        fontSize: 16,
        padding: 10,
    },
    inputComentario: {
        width: "100%",
        height: 100,
        borderColor: "#000",
        borderWidth: 1.5,
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 12,
        backgroundColor: "#fff",
        fontSize: 15,
        marginTop: 50,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    inputNumber: {
        width: 50,
        height: 40,
        textAlign: "center",
        borderColor: "#bf3c8d",
        borderWidth: 1.5,
        borderRadius: 5,
        marginHorizontal: 10,
        fontSize: 16,
        backgroundColor: "#fff",
    },
    button: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#bf3c8d",
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    precoUnico: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        borderBottomColor: "#c8c8c8",
        borderBottomWidth: 1,
        paddingBottom: 15,

    },
    
    pessoa: {
        color: "#bf3c8d",
        fontSize: 17

    },
    preco: {
        fontSize: 20
    },
    title: {
        fontSize: 22,
        marginTop: 10,
        textAlign: "center",
        color: "#bf3c8d"
    },
    botao: {
        width: "80%",
        backgroundColor: "#bf3c8d",
        paddingVertical: 12,
        borderRadius: 15,
        paddingHorizontal: 60,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    botaoTexto: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});