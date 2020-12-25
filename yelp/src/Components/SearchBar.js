import React from 'react'
import { Box, Divider, Flex} from '@chakra-ui/react'
import Select from './Select'
const SearchBar = () => {

  return (
    <Box mt='200px' py={2} mx='200px' color='gray.600' borderRadius='4px'  bg='white'>
        <Flex>
            <Select
                label='Find'
                placeholder='plumbers, delivery, takeout...'
                id='find'
                name='find'
                labelKey='label'
                valueKey='value'
                options={[
                    { value: 'Restaurants', label: 'Restaurants' },
                    { value: 'Delivery', label: 'Delivery' },
                    { value: 'Takeout', label: 'Takeout' },
                    { value: 'Accountants', label: 'Accountants' },
                    { value: 'Plumbers', label: 'Plumbers' },
                    { value: 'Auto Repair', label: 'Auto Repair' } 
                ]}
                />
            <Divider orientation="vertical" borderWidth={1} borderColor='gray.200' h='40px'/>
        </Flex>
    </Box>
  )
}


export default SearchBar