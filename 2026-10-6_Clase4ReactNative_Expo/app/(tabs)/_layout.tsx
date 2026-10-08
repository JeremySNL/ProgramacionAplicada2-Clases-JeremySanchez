import { SymbolView } from 'expo-symbols';
import { Link, Tabs, Stack } from 'expo-router';
import { Platform, Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e', // Color de la barra superior (opcional)
        },
        headerTintColor: '#fff', // Color del texto de la barra
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name='index'
        options={{ title: "Iniciar sesion", headerShown: true }}
      />
      <Stack.Screen
        name='home'
        options={{ title: "Home", headerShown: true }}
      />
      <Stack.Screen
        name='materias'
        options={{ title: "Materias", headerShown: true }}
      />
    </Stack>
  );
}
