import { Column, Flex, Text } from 'native-base'
import { useState } from 'react'

import ChatInput from '../components/ChatInput'

export default function Page() {
  const [response, setResponse] = useState('')

  return (
    <Column height="100%" width="100%">
      <Flex direction="row" justifyContent="center" flexGrow={1}>
        <Column
          alignItems="center"
          justifyContent="center"
          padding={8}
          space={1}
          width="100%"
        >
          <Text color="muted.400" fontSize="5xl" fontWeight="500" margin={8}>
            IgniteGPT
          </Text>
          <Text fontSize="lg">{response}</Text>
        </Column>
      </Flex>
      <ChatInput onResponse={(text) => setResponse(text)} />
    </Column>
  )
}
