import { Box, Text } from 'native-base'

export default function ChatCard({
  children,
  author,
}: {
  children: React.ReactNode
  author?: 'llm' | 'user'
}) {
  return (
    <Box marginBottom={2}>
      {!!author && (
        <Text color="gray.500" fontSize="xs" marginLeft={1}>
          {author === 'user' ? '👤 You' : '🤖 GPT-4'}
        </Text>
      )}
      <Box
        backgroundColor="white"
        borderColor="gray.200"
        borderRadius="md"
        borderWidth={1}
        padding={3}
      >
        {children}
      </Box>
    </Box>
  )
}
