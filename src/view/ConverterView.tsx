import {View, Text, StyleSheet, } from 'react-native';
import {useCurrencies} from "../hooks/useCurrencies";

export default function ConverterScreen() {
    const {currencies, loading: loadingCurrencies, error} = useCurrencies()

    console.log(currencies)
    console.log(loadingCurrencies)
    console.log(error)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Currency Converter</Text>
            <Text style={styles.title}></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {padding: 50, flex: 1, backgroundColor: '#fff'},
    title: {fontSize: 24, fontWeight: '700', marginBottom: 20},
});