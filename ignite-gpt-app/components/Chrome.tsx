import { Column } from 'native-base'

import AppBar from '../components/AppBar'

export default function Chrome({ children, ...props }) {
  return (
    <Column height="100%" width="100%" {...props}>
      <AppBar />
      {children}
    </Column>
  )
}
