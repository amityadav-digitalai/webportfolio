import React, { useState } from "react";
import Siteoptionsconfig from '../../../docs/_partials/installupgrade/_site_options_config.md';

export default function SiteOptionsConfig({ children }) {
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
                Site options configuration contd..
            </button>
            {isOpen && <Siteoptionsconfig />}
        </>
    );
}


