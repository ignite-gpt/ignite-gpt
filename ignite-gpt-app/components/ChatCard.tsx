import { Box, Text } from 'native-base'

export default function ChatCard({
  children,
  role,
}: {
  children: React.ReactNode
  role?: 'system' | 'assistant' | 'user'
}) {
  return (
    <Box marginBottom={2}>
      {!!role && (
        <Text color="gray.500" fontSize="xs" marginLeft={1}>
          {role === 'system' && '📇 System'}
          {role === 'assistant' && '🤖 GPT-4'}
          {role === 'user' && '👤 You'}
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
