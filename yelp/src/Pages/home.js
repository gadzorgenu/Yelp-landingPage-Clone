import React from 'react'
import {Box} from '@chakra-ui/react'
import AlertInfo from '../Components/Alert'
import Navbar from '../Components/Navbar'

export const home = () => {
    return (
        <Box>
            <AlertInfo/>
            <Navbar/>
        </Box>
    )
}
