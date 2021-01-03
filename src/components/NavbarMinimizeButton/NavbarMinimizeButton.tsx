import React from 'react';

interface NavBarMinimizeButtonWrapperProps {
    opacity: number;
    handleMiniClick: () => void;
}

const NavbarMinimizeButton = (
    { opacity, handleMiniClick }: NavBarMinimizeButtonWrapperProps) => (
    <div
        className="navbar-minimize-fixed"
        style={{ opacity: opacity }}>
        <button
            className="minimize-sidebar btn btn-link btn-just-icon"
            onClick={handleMiniClick}
        >
            <i className="tim-icons icon-align-center visible-on-sidebar-regular text-muted" />
            <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini text-muted" />
        </button>
    </div>
);

export default NavbarMinimizeButton;