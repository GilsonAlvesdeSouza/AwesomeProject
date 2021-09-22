import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const App = () => {
    const [number, setNumber] = useState(0);

    const aleatorio = () => {
        const gerado = parseInt(Math.random() * 11);
        setNumber(gerado);
    }

    return (
        <View style={style.container}>
            <Text style={style.number}>{number}</Text>

            <TouchableOpacity style={style.botao} onPress={aleatorio}>
                <Text style={style.textBotton}>Gerar Número</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAD2',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    number: {
        fontSize: 100,
        marginBottom: 50
    },
    botao: {
        backgroundColor: '#FF8C00',

        borderRadius: 10,
        width: '80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    textBotton: {
        fontSize: 30,
    }
});

export default App;