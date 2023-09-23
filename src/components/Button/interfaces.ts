import { CSSProperties, MouseEvent } from "react";

export interface ButtonProps {
    text: string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    busy?: boolean;
    display?: boolean;
    style?: CSSProperties;
}
