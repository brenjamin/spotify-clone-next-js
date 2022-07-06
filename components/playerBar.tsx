import { Box, Flex, Text } from "@chakra-ui/layout"

const PlayerBar = () => {
  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="10px">
      <Flex align="center" color="white">
        <Box padding="20px" width="30%">
          <Text fontSize="large">Song Name</Text>
          <Text fontSize="sm">Artist Name</Text>
        </Box>
        <Box width="40%">Controls</Box>
      </Flex>
    </Box>
  )
}

export default PlayerBar
