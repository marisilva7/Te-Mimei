import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { Link } from 'expo-router';

const CadastroPage = () => {
    return (
        <View style={styles.container}>
            <Image 
                            source={require("@/assets/images/Logo.png")} 
                            style={styles.logo} 
                        />
            <View style={styles.campos}>

                <Text style={styles.title}>Cadastro</Text>
                <TextInput style={styles.input} placeholder="Nome:" />
                <TextInput style={styles.input} placeholder="Email:" keyboardType="email-address" />
                <TextInput style={styles.input} placeholder="Senha:" secureTextEntry/>
                <TextInput style={styles.input} placeholder="CPF:" keyboardType="numeric"/>
                <TextInput style={styles.input} placeholder="Data de Nascimento:" keyboardType="numeric" />
                <Link href={"/home/page"} asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </Link>

            </View>
        </View>
    );
};

export default CadastroPage;
