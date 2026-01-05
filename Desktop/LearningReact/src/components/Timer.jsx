    import React from 'react'

    const Timer = ({time}) => {
    return (
        <div>
           {time.getHours()} : {time.getMinutes()} :{time.getSeconds()}
        </div>
    )
    }

    export default Timer