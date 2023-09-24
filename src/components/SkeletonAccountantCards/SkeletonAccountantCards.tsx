import React from "react";

import { SkeletonAccountantCard } from "../SkeletonAccountantCard";

import "./SkeletonAccountantCards.css";

interface SkeletonAccountantCardsProps {
    display: boolean;
}

export const SkeletonAccountantCards = ({ display }: SkeletonAccountantCardsProps) => {
    if (!display) return <></>;

    return (
        <div className="skeleton-accountants-cards">
            <SkeletonAccountantCard />
            <SkeletonAccountantCard />
            <SkeletonAccountantCard />
            <SkeletonAccountantCard />
        </div>
    );
};
