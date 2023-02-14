import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { showFormattedDate, extractHTMLContent } from '../utils';
import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/local-data';
import DetailNotePageAction from './DetailNotePageAction';

function DetailPageNote() {
    const [note, setNote] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const onArchive = function() {
        if (note.archived) {
            unarchiveNote(id);
            navigate('/archives');
        } else {
            archiveNote(id);
            navigate('/');
        }
    }

    const onDelete = function() {
        deleteNote(id);
        navigate('/');
    }

    useEffect(() => {
        const showNote = getNote(id);
        if (showNote) {
            setNote(showNote);
        }
    }, [id])

    return (
        <section className="detail-page">
            <>
                <h3 className="detail-page__title">
                    { note.title }
                </h3>
                <p className="detail-page__createdAt">
                    { showFormattedDate(note.createdAt) }
                </p>
                <p className="detail-page__body">
                    { extractHTMLContent(note.body) }
                </p>
            </>
            <DetailNotePageAction
                isArchived={note.archived || false }
                onArchive={onArchive}
                onDelete={onDelete}
            />
        </section>
    );
}

export default DetailPageNote;