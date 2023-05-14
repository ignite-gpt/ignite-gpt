import { Button, Center, Column, Flex, Input, Text } from 'native-base'
import { useState } from 'react'

export default function Page() {
  const [tempo, setTempo] = useState(120)
  const [tempoInput, setTempoInput] = useState(tempo.toString())

  return (
    <Center height="100%" width="100%">
      <Column width="50%" space={4}>
        <Flex direction="row" justifyContent="center">
          <Text fontSize="5xl">{tempo}</Text>
        </Flex>
        <Input
          placeholder="Tempo"
          value={tempoInput}
          onChangeText={setTempoInput}
        />
        <Button
          onPress={() =>
            setTempo(
              Number.isNaN(parseInt(tempoInput, 10))
                ? tempo
                : parseInt(tempoInput, 10)
            )
          }
        >
          Update
        </Button>
      </Column>
    </Center>
  )
}
