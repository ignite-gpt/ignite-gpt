import { Stack } from 'expo-router'

export default function AppBar({ title = 'IgniteGPT' }) {
  return <Stack.Screen options={{ title }} />
}
