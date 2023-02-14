import React from "react";
import PropTypes from "prop-types";
import { BiArchiveIn, BiArchiveOut, BiTrash } from 'react-icons/bi';
import PageAction from "./PageAction";

function DetailNotePageAction({ isArchived, onArchive, onDelete }) {

    return (
        <PageAction page="detail-page">
            <button
                className="action"
                type="button"
                title={ isArchived ? "Aktifkan" : "Arsipkan" }
                onClick={() => onArchive()}
            >
                {isArchived ? <BiArchiveOut /> : <BiArchiveIn /> }
            </button>

            <button
                className="action"
                type="button"
                title="Hapus"
                onClick={() => onDelete()}
            >
                <BiTrash />
            </button>
        </PageAction>
    );
}

DetailNotePageAction.propTypes = {
    isArchived: PropTypes.bool.isRequired,
    onArchive: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default DetailNotePageAction;