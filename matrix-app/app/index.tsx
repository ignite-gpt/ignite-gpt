import { Column, Flex, Text } from 'native-base'

import ChatInput from '../components/ChatInput'

export default function Page() {
  return (
    <Column height="100%" width="100%">
      <Flex direction="row" justifyContent="center" flexGrow={1}>
        <Column space={1} alignItems="center" justifyContent="center">
          <Text fontSize="5xl" color="muted.400" fontWeight="500">
            MatrixGPT
          </Text>
        </Column>
      </Flex>
      <ChatInput />
    </Column>
  )
}
