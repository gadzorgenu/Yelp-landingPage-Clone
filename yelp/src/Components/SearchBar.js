import {Box, Flex ,Text, Select} from '@chakra-ui/react'

const SearchBar = ()=> {
    return (
        <Box d='flex' borderRadius={8} bg='white' color='gray.600' fontSize='22px' p={4} mx='200px' mt='200px'>
            <Flex>
                <Text fontWeight='bold'pt={1} >Find </Text>
                <Select placeholder="plumbers, delivery, takeout..." variant="unstyled" icon='none' fontSize='21px' ml={3} >
                    <option 
                     value="option1"
                     textDecoration= "none" 
                    >
                        Option 1
                    </option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
            </Flex>
        </Box>
    )
}

export default SearchBar
