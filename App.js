import React, { useState } from 'react'
import { useStyles } from 'react-styles-hook'

const App = () => {
    const [isPink, switchPink] = useState(false)

    const styles = useStyles({
        heading: {
            width: '100%',
            backgroundColor: isPink ? '#f75172' : '#333333'
        }
    })

    const handleClick = () => {
        switchPink(!isPink)
    }

    return (
        <>
            <h1 styles={styles.heading}>Hello React 👋</h1>
            <button onClick={handleClick}>
                Click Me!
            </button>
        </>
    )
}
export default App