import React, { useState } from 'react'

function useCounter(count){
    const [multipleOfTen, setMultipleOfTen] = useState(false)

    if (count % 10 === 0){
        setMultipleOfTen(true)
    }

    // return multipleOfTen
}

export default useCounter