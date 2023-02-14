import React from "react";
import PropTypes from 'prop-types';

function PageAction({ page, children }) {
    return (
        <div className={`${page}__action`}>
            { children }
        </div>
    );
}

PageAction.propTypes = {
    page: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
}

export default PageAction;