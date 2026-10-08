import { StyleSheet, Text, View, Button } from "react-native";
import { useRouter, Link } from "expo-router";

export default function TabOneScreen() {
  const router = useRouter();
  const handleMaterias = () => {
    router.replace("/materias");
  };
  const handleLogout = () => {
    router.replace("/index");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Jeremy Sanchez Cabrera</Text>
      <Text style={styles.subtitle}>(1000-4353)</Text>
      <Button title="Ir a materias" onPress={handleMaterias} />
      <Link href="/" style={styles.link}>
        <Text style={styles.linkText}>Log out</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 15,
    marginBottom: 5,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
