import React from "react";
import PropTypes from 'prop-types';
import NoteItem from "./NoteItem";

function NoteList({ notes }) {
    return (
        <section className="notes-list">
            { notes.map((note, index) => <NoteItem key={'list_' + index.toString()} note={note} />)}
        </section>
    );
}

NoteList.propTypes = {
    notes: PropTypes.oneOfType([PropTypes.array]).isRequired
}

export default NoteList;