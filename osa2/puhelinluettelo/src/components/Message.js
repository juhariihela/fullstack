import React from 'react';

const Message = (props) => {
    const { message } = props

    if (!message)
        return (<div />)

    return (
        <div className="error">
            {message}
        </div>
    )
}

export default Message
