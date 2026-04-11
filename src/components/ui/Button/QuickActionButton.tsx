import { Link } from "react-router-dom";
import { getButtonStyles, type ButtonVariant } from "./buttonStyles";

interface Props {
    label: string;
    to: string;
    variant?: ButtonVariant;
}

export function QuickActionButton({ label, to, variant = "primary" }: Props) {
    return (
        <Link to={to} className={getButtonStyles(variant, "block w-full text-center mb-2")}>
            {label}
        </Link>
    );
}