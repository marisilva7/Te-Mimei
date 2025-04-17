import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Link } from "expo-router";

export default function ProductScreen() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    return (

        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.restaurantName}>TeMimei</Text>
                <Image style={styles.HeaderImage} source={require("@/assets/images/copo-felicidade.jpg")}></Image>
                <Text style={styles.title}>Felicidade de Morango</Text>
                <Text style={styles.subtitle}>Biscoito crocante, creme escolhido, frutas e Nutella. Finalizado com chocolate ou confetes! </Text>

                <View style={styles.precoUnico}>
                    <Text style={styles.pessoa}>Serve 1 pessoa</Text>
                    <Text style={styles.preco}>R$ 20,00</Text>
                </View>

                <TextInput
                    style={styles.inputComentario}
                    placeholder="Deixe seu comentário"
                    multiline
                />

                {/* Campo para número com botões */}
                <View style={styles.quantityContainer}>
                    <TouchableOpacity style={styles.button} onPress={decrement}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.inputNumber}
                        value={String(quantity)}
                        keyboardType="numeric"
                        editable={false}
                    />

                    <TouchableOpacity style={styles.button} onPress={increment}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>

                </View>

                <Link href={"/home/page"} asChild>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoTexto}>Adicionar ao carrinho</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )

}
