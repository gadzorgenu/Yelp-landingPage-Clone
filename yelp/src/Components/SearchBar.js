import React from 'react'
import { Box, Divider, Flex} from '@chakra-ui/react'
import Select from './Select'

const SearchBar = () => {

  return (
    <Box mt='70px' py={2} mx='200px' color='gray.600' borderRadius='4px'  bg='white'>
        <Flex>
            <Select
                label='Find'
                placeholder='plumbers, delivery, takeout...'
                id='find'
                name='find'
                labelKey='label'
                valueKey='value'
                options={[
                    { value: 'Restaurants', label: 'Restaurants',icon: '' },
                    { value: 'Delivery', label: 'Delivery', icon: '' },
                    { value: 'Takeout', label: 'Takeout', icon: '' },
                    { value: 'Accountants', label: 'Accountants', icon: '' },
                    { value: 'Plumbers', label: 'Plumbers', icon: '' },
                    { value: 'Auto Repair', label: 'Auto Repair', icon: '' } 
                ]}
                />
            <Divider orientation="vertical" borderWidth={1} borderColor='gray.200' h='40px'/>
            <Select
                label='Near'
                placeholder='San Fransisco, CA'
                id='place'
                name='place'
                labelKey='label'
                valueKey='value'
                options={[
                    { value: 'Restaurants', label: 'Restaurants',icon: '' },
                ]}
                />
        </Flex>
    </Box>
  )
}


export default SearchBar