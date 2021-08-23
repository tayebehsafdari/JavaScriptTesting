import React, {useState} from "react";

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal'
};

function Link({page, children}) {
    const [status, setStatus] = useState(STATUS.NORMAL);

    const onMouseEnter = () => {
        setStatus(STATUS.HOVERED);
    };
    const onMouseLeave = () => {
        setStatus(STATUS.NORMAL);
    };
    return (
        <a
            href={page || '#'}
            className={`${status} link-warning`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </a>
    );
}

export default Link;