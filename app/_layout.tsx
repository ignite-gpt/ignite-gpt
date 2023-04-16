import { Slot } from 'expo-router'
import { NativeBaseProvider } from 'native-base'

export default function App() {
  return (
    <NativeBaseProvider>
      <Slot />
    </NativeBaseProvider>
  )
}
