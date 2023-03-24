import React from "react"
import { IconButton } from "@chakra-ui/react"
import { FaMoon } from "@react-icons/all-files/fa/FaMoon"
import { FaSun } from "@react-icons/all-files/fa/FaSun"
import { useColorMode } from "@chakra-ui/color-mode"
import { useColorModeValue } from "@chakra-ui/color-mode"

const ColorModeToggle = () => {
    const { toggleColorMode } = useColorMode()
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)
    return (
        <IconButton
            isRound
            colorScheme={'gray'}
            aria-label="Color Mode Toggle"
            fontSize="lg"
            transform="scaleX(-1)"
            onClick={toggleColorMode}
            icon={<SwitchIcon/>}
        />
    )
}
export default ColorModeToggle
