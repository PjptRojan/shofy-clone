import React from 'react'

function NotificationBadgeComponent({divStyleClass, textStyleClass, notification}) {
    return (
        <>
            <div className={divStyleClass}>
                <p className={textStyleClass}>{notification}</p>
            </div>
        </>
    )
}

export default NotificationBadgeComponent
