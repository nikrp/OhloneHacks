import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>CleanSmiles</Text>
            <Text style={styles.subtitle}>Here to help you escape the grasp of tobacco and life life to the fullest!</Text>
            <Image source={require('../assets/home.jpg')} alt='Man Playing in Field' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingVertical: 50,
        paddingHorizontal: 30,
        flex: 1
    },
    heading: {
        fontSize: 40,
        fontWeight: "500",
        marginBottom: 5,
    },
    subtitle: {
        textAlign: "center",
        fontSize: 16,
    },
});