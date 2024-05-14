import React, { useState } from "react";
import Siteoptionsconfigupgrade from '../../../docs/_partials/installupgrade/_site_options_config_upgrade.md';
export default function SiteOptionsConfigUpgrade({ children }) {
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
            {isOpen && <Siteoptionsconfigupgrade />}
        </>
    );
}


