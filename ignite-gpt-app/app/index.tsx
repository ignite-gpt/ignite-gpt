import {
  CheckIcon,
  Column,
  Flex,
  IconButton,
  Input,
  Row,
  Text,
} from 'native-base'
import { useState } from 'react'

import ChatInput from '../components/ChatInput'
import { save } from '../store/envSlice'
import { useAppSelector, useAppDispatch } from '../store/hooks'

export default function Page() {
  const dispatch = useAppDispatch()
  const openAiApiKey = useAppSelector((state) => state.env?.openAiApiKey)
  const [openAiApiKeyInput, setOpenAiApiKeyInput] = useState('')
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
          {!openAiApiKey && (
            <Row alignItems="center" space={2}>
              <Input
                size="xl"
                placeholder="OpenAI API key"
                onChangeText={(text) => setOpenAiApiKeyInput(text)}
                value={openAiApiKeyInput}
              />
              <IconButton
                size="md"
                variant="solid"
                icon={<CheckIcon />}
                onPress={() =>
                  dispatch(save({ openAiApiKey: openAiApiKeyInput }))
                }
              />
            </Row>
          )}
          <Text fontSize="lg">{response}</Text>
        </Column>
      </Flex>
      {!!openAiApiKey && <ChatInput onResponse={(text) => setResponse(text)} />}
    </Column>
  )
}
