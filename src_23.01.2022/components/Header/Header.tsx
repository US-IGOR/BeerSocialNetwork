import React from 'react';
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>

            <img
                src='data:image/png;base64,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'/>

        </header>
    )
}