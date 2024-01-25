import React from 'react'
import ChatEntry from './ChatEntry'

function ChatLog({ entries, setLikes }) {
    const ChatEntryComponents = entries.map((chatEntry) => {

        return (
            <li key={chatEntry.id}>
            <ChatEntry
                id={chatEntry.id}
                sender={chatEntry.sender}
                body={chatEntry.body}
                timeStamp={chatEntry.timeStamp}
                liked={chatEntry.liked}
                setLikes = {setLikes}
            />
            </li>
        );
    })
    return (
        <section>
            <h2> Chat Log </h2>
            <ul> { ChatEntryComponents } </ul>
        </section>
    )
};

export default ChatLog