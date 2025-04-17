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
        borderRadius: 8
    },
    restaurantName: {
        fontSize: 35,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 10,
        color: "#bf3c8d"

    },
    subtitle: {
        color: "#666",
        marginTop: 4,
        textAlign: "center"
    },
    tabs: {
        flexDirection: "row",
        padding: 16,
        borderBottomColor: "#c8c8c8",
        borderBottomWidth: 1,
        gap: 50
    },
    tabsName: {
        color: "#666"
    },
    menuList: {
        padding: 16,
        flex: 1
    },
    menuItem: {
        flexDirection: "row",
        borderBottomColor: "#c8c8c8",
        borderBottomWidth: 1,
        margin: 10
    },
    menuContent: {
        flex: 1,
        marginRight: 16
    },
    itemImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
       marginBottom: 10,
       margin: 1
    },
    itemName: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 25
    },
    itemDescription: {
        color: "666",
        marginTop: 4,
        marginLeft: 25
        
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 8,
        marginLeft: 25,
        marginBottom: 15
    }
})
