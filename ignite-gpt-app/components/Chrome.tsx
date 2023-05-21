import { Stack } from 'expo-router'
import {
  HamburgerIcon,
  ThreeDotsIcon,
  useTheme,
  useMediaQuery,
} from 'native-base'

export default function Chrome() {
  const { colors, fontSizes, fontWeights } = useTheme()
  const [isSmall] = useMediaQuery({
    maxWidth: 475,
  })

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary[600],
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: fontWeights.bold.toString() as any,
          fontSize: fontSizes['2xl'],
        },
        headerLeft: () => (
          <HamburgerIcon
            color={colors.white}
            paddingX={isSmall ? 0 : 4}
            size="xl"
          />
        ),
        headerRight: () => (
          <ThreeDotsIcon
            color={colors.white}
            paddingX={isSmall ? 0 : 4}
            size="md"
          />
        ),
      }}
    />
  )
}
