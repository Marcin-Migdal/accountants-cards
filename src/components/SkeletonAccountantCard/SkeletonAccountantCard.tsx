import React from "react";

import "./SkeletonAccountantCard.css";

export const SkeletonAccountantCard = () => (
    <div className="skeleton-accountant-card">
        <div className="thumbnail-section">
            <div className="skeleton-thumbnail"></div>
            <div className="name-section">
                <div className="skeleton-name"></div>
                <div className="skeleton-name"></div>
            </div>
        </div>
        <div className="skeleton-label"></div>
        <div className="skeleton-text email"></div>
        <div className="skeleton-label"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-label"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-button"></div>
    </div>
);
