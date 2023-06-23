import { Flex, Heading } from 'native-base'

import Chrome from '../components/Chrome'

export default function Settings() {
  return (
    <Chrome>
      <Flex direction="row" flexGrow={1} padding={4}>
        <Heading>Settings</Heading>
      </Flex>
    </Chrome>
  )
}
