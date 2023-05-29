import { Stack } from 'expo-router'
import {
  Badge,
  HamburgerIcon,
  Heading,
  Row,
  ThreeDotsIcon,
  useTheme,
} from 'native-base'
import { Platform } from 'react-native'

export default function AppBar({ title = 'IgniteGPT' }) {
  const { colors, fontSizes, fontWeights } = useTheme()
  const isWeb = Platform.OS === 'web'

  return (
    <Stack.Screen
      options={{
        title,
        headerLeft: () => (
          <HamburgerIcon
            color={colors.white}
            paddingLeft={!isWeb ? 0 : 4}
            size="xl"
          />
        ),
        headerStyle: {
          backgroundColor: colors.primary[600],
        },
        headerRight: () => (
          <ThreeDotsIcon
            color={colors.white}
            paddingRight={!isWeb ? 0 : 4}
            size="md"
          />
        ),
        headerTintColor: colors.white,
        headerTitle: ({ children }) => (
          <Row space={4}>
            <Heading size="lg" color="white">
              {children}
            </Heading>
            <Badge alignSelf="center">pre-alpha</Badge>
          </Row>
        ),
        headerTitleAlign: isWeb ? 'left' : 'center',
        headerTitleStyle: {
          fontWeight: fontWeights.bold.toString() as any,
          fontSize: fontSizes['2xl'],
        },
      }}
    />
  )
}
