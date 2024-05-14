import React, { useState } from "react";
import Installdosanddonts from '../../../docs/_partials/installupgrade/_install_dos_and_donts.md';
import { Button } from '../components/ui/button'
export default function DosAndDonts({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <p>Here's a list of dos, don'ts and points to remember when you install or upgrade TeamForge.</p>
            <Button
                type="button"
                className="btn btn-primary btn-xs bg-blue-500 text-white"
                data-toggle="collapse"
                href="#beforeYouBegin"
                aria-expanded="false"
                aria-controls="beforeYouBegin"
                onClick={() => setIsOpen(prevState => !prevState)}
            >
                Click to Show/Hide
            </Button>
            {isOpen && <Installdosanddonts />}
        </>
    );
}