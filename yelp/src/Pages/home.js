import React from 'react'
import {Box, Image,Link,Grid, Flex,Text} from '@chakra-ui/react'
import AlertInfo from '../Components/Alert'
import Navbar from '../Components/Navbar'
import rest2 from '../Assets/rest2.jpg'
import SearchBar from '../Components/SearchBar'
import Services from '../Components/Services'
import BusinessCard from '../Components/Cards/BusinessCard'
import Branches from '../Components/Branches'
import NewBusiness from '../Components/NewBusiness'
import Collection from '../Components/Collection'

const Home = () => {

    const Business =[
        {
            id: 1,
            title: 'Massage'
        },
        {
            id: 2,
            title: 'Dry Cleaning'
        },
        {
            id: 3,
            title: 'Gyms'
        },
        {
            id: 4,
            title: 'Dentists'
        }
    ]
    const collections=[
        {
            id:1,
            location: 'Check, Please! Bay Area',
            title: 'PBS TV Show',
            numOfPlaces: '9 Places',
            name: 'Stacy B.'
        },
        {
            id:2,
            location: 'Check, Please! Bay Area',
            title: 'PBS TV Show',
            numOfPlaces: '9 Places',
            name: 'Stacy B.'
        },
        {
            id:3,
            location: 'Check, Please! Bay Area',
            title: 'PBS TV Show',
            numOfPlaces: '9 Places',
            name: 'Stacy B.'
        },
        {
            id:4,
            location: 'Check, Please! Bay Area',
            title: 'PBS TV Show',
            numOfPlaces: '9 Places',
            name: 'Stacy B.'
        },
        {
            id:5,
            location: 'Check, Please! Bay Area',
            title: 'PBS TV Show',
            numOfPlaces: '9 Places',
            name: 'Stacy B.'
        },
        {
            id:6,
            location: 'Check, Please! Bay Area',
            title: 'PBS TV Show',
            numOfPlaces: '9 Places',
            name: 'Stacy B.'
        }
    ]
    return (
        <Box >
            <AlertInfo/>
                <Box bgColor='red.400' h={{md:'750px'}}>
                    {/* <Image pos='absolute'  src={rest2} alt='restaurant' h={{md:'750px'}} w={{md: '100%'}}/> */}
                    <Box px='15%'>
                        <Navbar/>
                        <Flex justify='center' mt='100px'>
                            <a href='/home'>
                                <Box
                                    w= '180px'
                                    h= '80px'
                                    p={0}
                                    bgSize='180px'
                                    bgImage="url('https://s3-media0.fl.yelpcdn.com/assets/public/winter.yji-85e6fd9826bf4fea8b38ea7c145183c0.png')"
                                    bgPosition="center"
                                    bgRepeat='no-repeat'
                                />
                            </a>
                        </Flex>
                        <SearchBar/>
                        <Services/>
                    </Box>
                </Box>
                <Box bgColor='gray.100' >
                    <Text color='red.600' fontWeight='bold' textAlign='center' fontSize='30px' py={5}>Find the Best Business in Town</Text>
                    <Box my='10px'mx='15%' >
                        <Grid templateColumns='repeat(4, 1fr)' >
                            {
                                Business.map((item) => (
                                    <BusinessCard
                                        key={item.id}
                                        title={item.title}
                                    />
                                ))
                            }
                        </Grid>
                    </Box>
                </Box>
                <Branches mx='15%'/>   
                <NewBusiness/>  
                <Box mx='15%' my='2%' borderRadius='5px' borderWidth='1px' borderColor='gray.300' p='4%' >
                        <Grid templateColumns='repeat(2, 1fr)' gap={8} >
                            {
                                collections.map((item) => (
                                    <Collection
                                        key={item.id}
                                        location={item.location}
                                        title={item.title}
                                        numOfPlaces={item.numOfPlaces}
                                        name={item.name}
                                    />
                                ))
                            }
                        </Grid>
                    </Box>
        </Box>
    )
}
export default Home
