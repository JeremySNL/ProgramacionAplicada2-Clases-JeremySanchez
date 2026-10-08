import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useRouter } from "expo-router";

import EditScreenInfo from "@/components/EditScreenInfo";

export default function TabTwoScreen() {
  const router = useRouter();

  const handleRegresar = () => {
    router.replace("/home");
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Materias</Text>
      <FlatList
        data={[
          {
            id: "1",
            nombre: "Ingenieria Economica",
          },
          {
            id: "2",
            nombre: "Programacion Aplicada 1",
          },
          {
            id: "3",
            nombre: "Programacion Aplicada 2",
          },
          {
            id: "4",
            nombre: "Analisis de Sistemas",
          },
          {
            id: "5",
            nombre: "Auditoria",
          },
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nombre}</Text>
          </View>
        )}
      />
      <Button title="Regresar" onPress={handleRegresar} />
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
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20
  },
  item: {
    marginBottom: 10,
    backgroundColor: "#afafaf",
    padding: 20
  }
});
