import React from 'react'
import { Box, Divider, Flex,Text,Input,InputRightAddon, IconButton} from '@chakra-ui/react'
import Select from './Select'
import { HiSearch } from "react-icons/hi"

const SearchBar = () => {

  return (
    <Box mt='70px' py={2}  color='gray.600' borderRadius='4px'  bg='white'>
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
            <Text mt={3} mx={3}>Near</Text>
            <Input border="none" mt={1} placeholder="SA FRANCISCO" textDecoration='none' _active={{textDecoration: 'none'}}/>
            <Box >
                <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<HiSearch />}
                />
            </Box>
        </Flex>
    </Box>
  )
}


export default SearchBar