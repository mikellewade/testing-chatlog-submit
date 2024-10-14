import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

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
                setLikes={setLikes}
            />
            </li>
        );
    });
    return (
        <section>
            <h2> Chat Log </h2>
            <ul> { ChatEntryComponents } </ul>
        </section>
    );
};

ChatLog.propTypes = {
    entries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            sender: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            timeStamp: PropTypes.string.isRequired, // or Date if it is a Date object
            liked: PropTypes.bool.isRequired,
        })
    ).isRequired,
    setLikes: PropTypes.func,  // 'setLikes' should be a required function
};

export default ChatLog;