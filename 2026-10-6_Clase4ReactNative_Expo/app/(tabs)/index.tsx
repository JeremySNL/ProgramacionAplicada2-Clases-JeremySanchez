import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function loginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
    } else {
      router.replace("/home");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesion</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f6fa",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#2c3e50",
  },
  input: {
    backgroundColor: "#d8dadb",
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "80%",
    fontSize: 16,
  },
});
