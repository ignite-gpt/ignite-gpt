import { Stack } from 'expo-router'
import { HamburgerIcon, ThreeDotsIcon, useTheme } from 'native-base'

export default function Chrome() {
  const { colors, fontSizes, fontWeights } = useTheme()

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
        headerLeft: () => <HamburgerIcon size="xl" color={colors.white} />,
        headerRight: () => <ThreeDotsIcon size="md" color={colors.white} />,
      }}
    />
  )
}
