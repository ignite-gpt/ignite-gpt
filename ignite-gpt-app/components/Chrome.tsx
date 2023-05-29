import { Column } from 'native-base'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import AppBar from '../components/AppBar'

export default function Chrome({ children }) {
  const insets = useSafeAreaInsets()

  return (
    <Column height="100%" width="100%" paddingBottom={insets.bottom}>
      <AppBar />
      {children}
    </Column>
  )
}
