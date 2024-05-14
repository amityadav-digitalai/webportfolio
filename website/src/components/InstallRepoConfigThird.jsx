import React, { useState } from "react";
import Installrepoconfigthird from '../../../docs/_partials/installupgrade/_installrepoconfig_third.md';

export default function InstallRepoConfigThird({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button
                type="button"
                className="btn btn-primary btn-xs light-blue-bg"
                data-toggle="collapse"
                href="#beforeYouBegin"
                aria-expanded="false"
                aria-controls="beforeYouBegin"
                onClick={() => setIsOpen(prevState => !prevState)}
            >
                Configure the TeamForge installation repository
            </button>
            {isOpen && <Installrepoconfigthird />}
        </>
    );
}