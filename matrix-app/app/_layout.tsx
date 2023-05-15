import { Slot } from 'expo-router'
import { Box, Column, extendTheme, NativeBaseProvider } from 'native-base'

import AppBar from '../components/AppBar'

const theme = extendTheme({
  colors: {
    primary: {
      50: '#e1f3f1',
      100: '#b4e3dc',
      200: '#83d1c5',
      300: '#50beae',
      400: '#28af9c',
      500: '#00a08b',
      600: '#00937e',
      700: '#00826e',
      800: '#00725f',
      900: '#005643',
    },
  },
})

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Column height="100%" width="100%">
        <AppBar>MatrixGPT</AppBar>
        <Box flexGrow={1}>
          <Slot />
        </Box>
      </Column>
    </NativeBaseProvider>
  )
}
