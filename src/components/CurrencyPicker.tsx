import { Picker } from '@react-native-picker/picker';
import { View, Text, StyleSheet } from 'react-native';

interface CurrencyPickerProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    currencies: string[];
}

export default function CurrencyPicker({
                                           label,
                                           value,
                                           onChange,
                                           currencies,
                                       }: CurrencyPickerProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.pickerWrapper}>
            <Picker selectedValue={value} onValueChange={(value) => onChange(String(value))}>
                {currencies.map((currency) => (
                    <Picker.Item
                        key={currency}
                        label={`${currency}`}
                        value={currency}
                    />
                ))}
            </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'center', // Centers label and picker vertically
    },
    label: {
        fontWeight: '600',
        marginRight: 20,
        fontSize: 22
    },
    pickerWrapper: {
        flex: 1,
    },
});