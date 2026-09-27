import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {

    const [value, setValue] = useState(() => {

        const savedData = localStorage.getItem(key)

        if (savedData) {
            return JSON.parse(savedData)
        }

        return initialValue
    })

    const saveData = (newValue) => {

        setValue(newValue)

        localStorage.setItem(
            key,
            JSON.stringify(newValue)
        )
    }

    return [value, saveData]
}

export default useLocalStorage