import React from "react"

export function filterMenuItems(arr, string) {
    const newArr = arr.filter(item => 
        !(item.url.includes(string))
    )
    return newArr
}

