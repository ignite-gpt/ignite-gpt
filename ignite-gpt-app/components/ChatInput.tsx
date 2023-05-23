import {
  Alert,
  ArrowUpIcon,
  Button,
  Column,
  Input,
  Row,
  Text,
} from 'native-base'
import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { completion } from '../lib/openai'
import { useAppSelector } from '../store/hooks'

export default function ChatInput({ onResponse }) {
  const openAiApiKey = useAppSelector((state) => state.env?.openAiApiKey)
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const insets = useSafeAreaInsets()

  const onPress = async () => {
    setError('')
    setIsLoading(true)
    try {
      const response = await completion({
        openAiApiKey,
        prompt: inputValue,
      })
      onResponse(response)
    } catch (e) {
      setError(e.message)
    }
    setIsLoading(false)
  }

  return (
    <Column>
      {!!error && (
        <Row alignItems="space-between" flexGrow={0} padding={2} width="100%">
          <Alert status="error" width="100%">
            <Text fontSize="md" color="coolGray.800">
              {error}
            </Text>
          </Alert>
        </Row>
      )}
      <Row
        flexGrow={0}
        paddingX={4}
        paddingY={insets.bottom > 0 ? 0 : 4}
        space={2}
        width="100%"
      >
        <Input
          flexGrow={1}
          onChangeText={(text) => setInputValue(text)}
          placeholder="Send a message"
          size="2xl"
          value={inputValue}
          backgroundColor="white"
        />
        <Button isLoading={isLoading} onPress={onPress} variant="solid">
          <ArrowUpIcon size={6} color="white" />
        </Button>
      </Row>
    </Column>
  )
}
