import { Stack, Link } from 'expo-router'
import { Menu, UserCircle } from 'iconoir-react-native'
import { Badge, Heading, IconButton, Row, View, useTheme } from 'native-base'
import { Platform } from 'react-native'

export default function AppBar({ title = 'IgniteGPT' }) {
  const { colors, fontSizes, fontWeights } = useTheme()
  const isWeb = Platform.OS === 'web'

  return (
    <Stack.Screen
      options={{
        title,
        headerLeft: () => (
          <View flexDirection="row" paddingRight={!isWeb ? 0 : 2}>
            <IconButton
              icon={
                <Menu
                  color={colors.white}
                  height={22}
                  strokeWidth={1.8}
                  width={22}
                />
              }
              variant="outline"
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: colors.primary[600],
        },
        headerRight: () => (
          <View flexDirection="row" paddingRight={!isWeb ? 0 : 2}>
            <Link href="/settings" asChild>
              <IconButton
                icon={
                  <UserCircle
                    color={colors.white}
                    height={22}
                    strokeWidth={1.8}
                    width={22}
                  />
                }
                variant="outline"
              />
            </Link>
          </View>
        ),
        headerTintColor: colors.white,
        headerTitle: ({ children }) => (
          <Row space={4}>
            <Heading size="lg" color="white">
              <Link href="/">{children}</Link>
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
