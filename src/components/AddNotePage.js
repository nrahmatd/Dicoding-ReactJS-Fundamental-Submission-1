import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddNotePageAction from './AddNotePageAction'
import { addNote } from '../utils/local-data'

export function AddNotePage() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: '',
    body: ''
  })

  const onTitleChange = (e) => {
    setForm((data) => ({ ...data, title: e.target.value }))
  }

  const onBodyChange = (e) => {
    setForm((data) => ({ ...data, body: e.target.value }))
  }

  const onSaveNote = () => {
    const { title } = form
    const { body } = form
    addNote({ title, body })
    navigate('/')
  }

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder="Judul"
          value={form.title}
          onChange={onTitleChange}
        />
      </div>
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__body"
          placeholder="Tulis detail catatan disini..."
          value={form.body}
          onChange={onBodyChange}
        />
      </div>
      <AddNotePageAction
        onSaveNote={onSaveNote}
      />
    </section>
  );
}

export default AddNotePage;