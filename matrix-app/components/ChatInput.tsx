import { ArrowUpIcon, IconButton, Input, Row } from 'native-base'

export default function ChatInput() {
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
        onChangeText={() => {}}
        placeholder="Send a message"
        size="lg"
        value={''}
      />
      <IconButton
        icon={<ArrowUpIcon />}
        onPress={() => {}}
        size={12}
        variant="solid"
      />
    </Row>
  )
}
