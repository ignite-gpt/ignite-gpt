import { ArrowUpIcon, Button, Input, Row } from 'native-base'
import { useState } from 'react'

import { completion } from '../lib/openai'

export default function ChatInput({ onResponse }) {
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Row
      alignItems="space-between"
      flexGrow={0}
      padding={2}
      space={2}
      width="100%"
    >
      <Input
        flexGrow={1}
        onChangeText={(text) => setInputValue(text)}
        placeholder="Send a message"
        size="lg"
        value={inputValue}
      />
      <Button
        onPress={async () => {
          setIsLoading(true)
          const response = await completion(inputValue)
          onResponse(response)
          setIsLoading(false)
        }}
        size={12}
        variant="solid"
        isLoading={isLoading}
      >
        <ArrowUpIcon size={6} color="white" />
      </Button>
    </Row>
  )
}
