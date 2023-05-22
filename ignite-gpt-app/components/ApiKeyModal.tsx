import { Button, FormControl, Input, Link, Modal, Text } from 'native-base'
import { useState } from 'react'

import { save } from '../store/envSlice'
import { useAppSelector, useAppDispatch } from '../store/hooks'

export default function ApiKeyModal() {
  const [openAiApiKeyInput, setOpenAiApiKeyInput] = useState('')
  const openAiApiKey = useAppSelector((state) => state.env?.openAiApiKey)
  const dispatch = useAppDispatch()
  const saveApiKey = () => dispatch(save({ openAiApiKey: openAiApiKeyInput }))

  return (
    <Modal avoidKeyboard isOpen={!openAiApiKey}>
      <Modal.Content maxWidth="600px">
        <Modal.Header>API Key</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Your OpenAI API Key</FormControl.Label>
            <Input
              onChangeText={(text) => setOpenAiApiKeyInput(text)}
              onSubmitEditing={saveApiKey}
              placeholder="sk-..."
              returnKeyType="go"
              size="xl"
            />
            <FormControl.Label>
              <Text>
                <Text color="muted.500">
                  Your OpenAI key is only sent to OpenAI.{' '}
                </Text>
                <Link
                  _text={{ color: 'blue.400' }}
                  href="https://platform.openai.com/account/api-keys"
                  isExternal
                >
                  platform.openai.com/account/api-keys
                </Link>
              </Text>
            </FormControl.Label>
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button isDisabled={!openAiApiKeyInput} onPress={saveApiKey}>
            Save
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
