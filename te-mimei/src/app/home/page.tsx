import { Image, Text, TouchableOpacity, ScrollView, View } from "react-native";
import { styles } from "./style"
import { Link } from "expo-router";


export default function Index() {

    const MENU = [
        {
            id: 1,
            name: "Copos",
            description: "Biscoito crocante, creme escolhido, frutas e Nutella. Finalizado com chocolate ou confetes!",
            price: 20.00,
            image: require("@/assets/images/copo-felicidade.jpg")
        },
        {
            id: 2,
            name: "Bolos",
            description: "Camadas de bolos macios, recheios cremosos e coberturas especiais! Escolha seus sabores.",
            price: 15.00,
            image: require("@/assets/images/bolos-5.jpg")
        },
        {
            id: 3,
            name: "Bebidas",
            description: "Refrigerantes, Sucos, Café, Água",
            price: 7.90,
            image: require("@/assets/images/refri.jpg")
        },
        {
            id: 4,
            name: "Salgados",
            description: "Coxinhas, Bolinhas de queijo, Kibes tradicional, Risoles",
            price: 6.00,
            image: require("@/assets/images/salgados.jpg")
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.restaurantName}>TeMimei</Text>
                <Image style={styles.HeaderImage} source={require("@/assets/images/header.jpeg")}></Image>
                <Text style={styles.subtitle}>O segredo da felicidade?</Text>
                <Text style={styles.subtitle}>Está aqui no nosso copo.✨</Text>

            </View>

            <View style={styles.tabs}>
                {["Bolos", "Copos", "Bebidas", "Salgados"].map((item) => (
                    <TouchableOpacity>
                        <Text>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView style={styles.menuList}>
                {
                    MENU.map((item) => (
                        <Link href= {"/produto/page"} asChild>
                        <TouchableOpacity style={styles.menuItem}>
                            <Image style={styles.itemImage} source={item.image} />
                            <View style={styles.menuContent}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemDescription}>{item.description}</Text>
                                <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                            </View>

                        </TouchableOpacity>
                        </Link>
                    ))
                }
            </ScrollView>

        </View>





    )

}