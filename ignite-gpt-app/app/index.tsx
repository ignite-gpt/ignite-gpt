import { Center, Column, Flex, Text } from 'native-base'
import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import ApiKeyModal from '../components/ApiKeyModal'
import AppBar from '../components/AppBar'
import ChatInput from '../components/ChatInput'
import { useAppSelector } from '../store/hooks'

export default function Page() {
  const openAiApiKey = useAppSelector((state) => state.env?.openAiApiKey)
  const [response, setResponse] = useState('')
  const insets = useSafeAreaInsets()

  return (
    <Column height="100%" width="100%" paddingBottom={insets.bottom}>
      <AppBar />
      <Flex direction="row" flexGrow={1} padding={4}>
        <Column space={1} width="100%">
          {!response && (
            <Center flexGrow={1}>
              <Text
                color="muted.400"
                fontSize="5xl"
                fontWeight="500"
                margin={8}
              >
                IgniteGPT
              </Text>
            </Center>
          )}
          <Text fontSize="lg">{response}</Text>
          <ApiKeyModal />
        </Column>
      </Flex>
      {!!openAiApiKey && <ChatInput onResponse={(text) => setResponse(text)} />}
    </Column>
  )
}
