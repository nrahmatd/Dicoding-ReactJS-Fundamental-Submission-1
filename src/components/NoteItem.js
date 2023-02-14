import React from "react";
import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { extractHTMLContent, showFormattedDate } from '../utils';

function NoteItem({ note }) {
    return (
        <>
            <article className="note-item">
                <h3 className="note-item__title">
                    <Link 
                        to={`/notes/${note.id}`}
                        title={note.title}
                    >
                        { note.title }
                    </Link>
                </h3>

                <p className="note-item__createAt">
                    { showFormattedDate(note.createdAt) }
                </p>

                <p className="note-item__body">
                    { extractHTMLContent(note.body) }
                </p>
            </article>
        </>
    );
}

NoteItem.propTypes = {
    note: PropsTypes.oneOfType([PropsTypes.object]).isRequired
}

export default NoteItem;