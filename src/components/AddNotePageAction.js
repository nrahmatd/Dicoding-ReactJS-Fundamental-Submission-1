import React from "react";
import PropTypes from "prop-types";
import { HiCheck } from 'react-icons/hi';
import PageAction from "./PageAction";

function AddNotePageAction({ onSaveNote }) {

    return (
        <PageAction page="add-new-page">
            <button
                className="action"
                type="button"
                title="Tambah"
                onClick={() => onSaveNote()}
            >
                <HiCheck />
            </button>
        </PageAction>
    );
}

AddNotePageAction.propTypes = {
    onSaveNote: PropTypes.func.isRequired
}

export default AddNotePageAction;