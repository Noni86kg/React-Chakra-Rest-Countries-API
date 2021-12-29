import React from 'react'
import { Heading, Button ,Flex } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header = ({darkTheme , darkThemeFunc}) => {
    return (
        <Flex p="25px" bg={`${darkTheme ? "#2b3945" : "white" }`} justifyContent="space-between" shadow="0 2px 5px 0 #00000033" zIndex={2} pos="relative" alignItems="center"  >
            <Heading fontSize={['14px', '14px', '32px']} color={`${darkTheme ? "white" : "gray.900" }`} >Where in the world?</Heading>
            <Button color="white" display={`${darkTheme ? "block" : "none" }`} _hover={{background: "transparent" }} leftIcon={<SunIcon  w={4} h={4} />} variant='ghost' onClick={() => darkThemeFunc() } >Light Mode</Button>
            <Button color="gray.900" display={`${!darkTheme ? "block" : "none" }`} _hover={{background: "transparent" }} leftIcon={<MoonIcon  w={4} h={4} />} variant='ghost' onClick={() => darkThemeFunc() } >Dark Mode</Button>
        </Flex>
    )
}

export default Header
