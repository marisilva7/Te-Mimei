import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./login/styles";

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            {/* Adicionando a logo */}
            <Image 
                source={require("@/assets/images/Logo.png")} 
                style={styles.logo} 
            />
            
            <View style={styles.campos}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input} placeholder="Email:" keyboardType="email-address" />
                <TextInput style={styles.input} placeholder="Senha:" secureTextEntry />
                
                <Link href={"/home/page"} asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Logar</Text>
                    </TouchableOpacity>
                </Link>
                <Link href={"/cadastro/page"} asChild>
                    <Text style={styles.cadastroTitle}>Não tem uma conta? Cadastre-se</Text>
                    </Link>
                
            </View>
        </View>
    );
}