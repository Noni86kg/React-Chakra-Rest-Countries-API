import React from 'react'
import {Text} from "@chakra-ui/react"

const Boarders = ({borders, darkTheme}) => {

    return (
        <>
            {borders.map((item, id) => {
                return ( <Text as="span" key={id} p="0 10px 0 20px "  m="4px 10px 0 0" shadow="0 2px 5px 0 #00000033" bg={`${darkTheme ? "#2b3945" : "white" }`} >{item} &nbsp;</Text>)
            })}
        </>
    )
}

export default Boarders
