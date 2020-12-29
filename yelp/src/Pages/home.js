import React from 'react'
import {Box, Image} from '@chakra-ui/react'
import AlertInfo from '../Components/Alert'
import Navbar from '../Components/Navbar'
import rest2 from '../Assets/rest2.jpg'
import SearchBar from '../Components/SearchBar'
import Services from '../Components/Services'

const Home = () => {
    return (
        <Box >
            <AlertInfo/>
            <Image pos='absolute' src={rest2} alt='restaurant' h={{md:'750px'}} w={{md: '100%'}}/>
            <Box pos='relative'>
                <Navbar/>
                <SearchBar/>
                <Services/>
            </Box>
        </Box>
    )
}
export default Home
