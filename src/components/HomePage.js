import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import NoteList from './NoteList';
import NoteListEmpty from './NoteListEmpty';
import HomePageAction from './HomePageAction';
import { getActiveNotes } from '../utils/local-data';

function HomePage() {
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState('')

    const onSearch = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        if (search !== '') {
            setNotes(
                getActiveNotes().filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
            );
        } else {
            setNotes(getActiveNotes());
        }
    }, [search])

    return (
        <>
            <h2>Catatan Aktif</h2>
            <SearchBar search={search} onSearch={onSearch} />
            { notes.length > 0 && <NoteList notes={notes} /> }
            { notes.length === 0 && <NoteListEmpty /> }
            <HomePageAction />
        </>
    );
}

export default HomePage;