import React from "react";
import { HiPlus } from 'react-icons/hi';
import { useNavigate } from "react-router-dom";
import PageAction from "./PageAction";

function HomePageAction() {
    const navigate = useNavigate();

    return (
        <PageAction page="homepage">
            <button
                className="action"
                type="button"
                title="Tambah Catatan"
                onClick={() => navigate('notes/new')}
            >
                <HiPlus />
            </button>
        </PageAction>
    );
}

export default HomePageAction;