import React from 'react';
import {Flex,Box,Spacer,Button,Grid,GridItem,Popover,PopoverTrigger,PopoverContent,PopoverHeader,PopoverBody} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <div>
        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
  <GridItem colSpan={2} h='10'>
  <Flex>
  <Box p='4' bg='red.400' style={{fontWeight: 'bold'}} >
    LOGO
  </Box>
  <Spacer />
  
<Popover placement='bottom-start'>
  <PopoverTrigger>
    <Button backgroundColor='white'>Inspiration</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader fontWeight='semibold'>Explore Design Work</PopoverHeader>
    <PopoverBody>
      Trending Design to Inspire you
    </PopoverBody>
    <br />
    <PopoverHeader fontWeight='semibold'>New & NewWorthy</PopoverHeader>
    <PopoverBody>
      Up-and-Coming Deginers
    </PopoverBody>
  </PopoverContent>
  
</Popover>
<Spacer/>
<Popover placement='bottom-start'>
  <PopoverTrigger>
    <Button backgroundColor='white'>Find Job</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader fontWeight='semibold'>Job Board</PopoverHeader>
    <PopoverBody>
      Find Your dream Design Job
    </PopoverBody>
    <br />
    <PopoverHeader fontWeight='semibold' >Frelance Projects</PopoverHeader>
    <PopoverBody>
      An Exclusive List for contract work
    </PopoverBody>
  </PopoverContent>
  
</Popover>
<Spacer/>
<Button colorScheme='teal' variant='solid' backgroundColor='white'>
    Learn Design
  </Button>
  <Spacer/>
  <Button colorScheme='teal' variant='solid' backgroundColor='white'>
    Hire Design
  </Button>
  </Flex>
  </GridItem>
  <GridItem colStart={6} colEnd={7} h='10'>
      <Flex>
      <Button colorScheme='teal' variant='link' backgroundColor='white'>
    Sign In
  </Button>
  <Spacer />
  <Button colorScheme='teal'  backgroundColor='pink'>
    Sign Up
  </Button>
      </Flex>
  </GridItem>
</Grid>
  
    </div>
  )
}

export default Navbar;