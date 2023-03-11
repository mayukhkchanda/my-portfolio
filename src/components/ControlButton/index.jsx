import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import "./style.scss";

function ControlButton(props) {
    const { href, title, state, direction, className = "" } = props;
    const navigate = useNavigate();

    const navigateTo = () => {
        console.log("clicked")
        setTimeout(() => {
            navigate(href, { state: { animationDelay: 1.2, longFade: true } });
        }, 800);
    };
    return (
        <button onClick={navigateTo} state={state} className={`page-control ${className} ${direction}`}>
            <div className="control-button">
                <span className="control-text">{title}</span>
                <span className="arrow" />
            </div>
        </button>
    );
}

ControlButton.propTypes = {
    href: PropTypes.string,
    title: PropTypes.string,
    state: PropTypes.any,
    direction: PropTypes.string,
};

export default ControlButton;