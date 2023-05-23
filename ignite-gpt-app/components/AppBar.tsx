import { Stack } from 'expo-router'
import { Badge, Heading, Row } from 'native-base'

export default function AppBar({ title = 'IgniteGPT' }) {
  return (
    <Stack.Screen
      options={{
        title,
        headerTitle: ({ children }) => (
          <Row space={4}>
            <Heading size="lg" color="white">
              {children}
            </Heading>
            <Badge alignSelf="center">pre-alpha</Badge>
          </Row>
        ),
      }}
    />
  )
}
