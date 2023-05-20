import { extendTheme, NativeBaseProvider } from 'native-base'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import Chrome from '../components/Chrome'
import { persistor, store } from '../store/store'

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={theme}>
          <Chrome />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  )
}
