import { Slot } from 'expo-router'
import { Box, Column } from 'native-base'

import AppBar from './AppBar'

export default function Chrome() {
  return (
    <Column height="100%" width="100%">
      <AppBar>IgniteGPT</AppBar>
      <Box flexGrow={1}>
        <Slot />
      </Box>
    </Column>
  )
}
