import { Center, Column, Flex, Text } from 'native-base'
import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Logo from '../assets/logo-medium.svg'
import ApiKeyModal from '../components/ApiKeyModal'
import ChatCard from '../components/ChatCard'
import ChatInput from '../components/ChatInput'
import Chrome from '../components/Chrome'
import { useAppSelector } from '../store/hooks'

export default function Index() {
  const insets = useSafeAreaInsets()
  const openAiApiKey = useAppSelector((state) => state.env?.openAiApiKey)
  const [response, setResponse] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Chrome paddingBottom={insets.bottom}>
      <Flex direction="row" flexGrow={1} padding={4}>
        <Column space={1} width="100%">
          {!response && !message && (
            <Center flexGrow={1}>
              <Logo width={80} height={80} style={{ color: '#A3A3A3' }} />
              <Text
                color="muted.400"
                fontSize="5xl"
                fontWeight="500"
                margin={4}
              >
                IgniteGPT
              </Text>
            </Center>
          )}
          {!!message && <ChatCard role="user">{message}</ChatCard>}
          {!!response && <ChatCard role="assistant">{response}</ChatCard>}
        </Column>
      </Flex>
      {!!openAiApiKey && (
        <ChatInput
          onResponse={({ text }) => setResponse(text)}
          onSendMessage={({ text }) => {
            setResponse('')
            setMessage(text)
          }}
        />
      )}
      <ApiKeyModal />
    </Chrome>
  )
}
