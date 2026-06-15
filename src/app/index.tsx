import { Link } from 'expo-router';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import Button from '/home/alunos/mobile3DS-srf/src/components/Button';
import Input from '/home/alunos/mobile3DS-srf/src/components/Input';

function Index() {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.select({ ios: "padding", android: "height" })}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Image
                        source={require('/home/alunos/mobile3DS-srf/src/assets/MV5BZDRhYWUyMjEtMDgxOC00M2M4LTgyZmItNWU5MmUwOGFkN2JmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg')}
                        style={styles.logo}
                    />
                    <Text style={styles.title}>Programação Mobile.</Text>
                    <Text style={styles.subtitle}>Acesse sua conta</Text>
                    <View style={styles.form}>
                        <Input placeholder="E-mail" keyboardType="email-address" />
                        <Input placeholder="Senha" secureTextEntry={true} />
                        <Button label="Entrar" onPress={() => { }} />
                    </View>
                    <Text style={styles.footerText}>
                        Não tem uma conta ?{""}
                        <Link href="/signup" style={styles.footerLink}>
                            Cadastre-se aqui.
                        </Link>
                    </Text>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
    },
    form: {
        width: '100%',
        gap: 12,
    },
});

export default Index;