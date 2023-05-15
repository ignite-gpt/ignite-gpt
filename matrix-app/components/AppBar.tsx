import { HamburgerIcon, HStack, Text, ThreeDotsIcon } from 'native-base'

/**
 * @see https://docs.nativebase.io/building-app-bar
 */
export default function AppBar({ children }) {
  return (
    <>
      {/* <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" /> */}
      <HStack
        alignItems="center"
        bg="primary.600"
        justifyContent="space-between"
        px="4"
        py="3"
        w="100%"
      >
        <HStack alignItems="center" space={4}>
          <HamburgerIcon size="sm" color="white" />
          <Text color="white" fontSize="20" fontWeight="bold">
            {children}
          </Text>
        </HStack>
        <HStack>
          <ThreeDotsIcon size="sm" color="white" />
        </HStack>
      </HStack>
    </>
  )
}
