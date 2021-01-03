import React, {useRef} from 'react';
import NotificationAlert from "react-notification-alert";


function NotificationWrapper() {
    const inputRef = useRef('notificationAlert');
    return (<div className="rna-container">
        <NotificationAlert ref={inputRef} />
    </div>);
}

export default NotificationWrapper;