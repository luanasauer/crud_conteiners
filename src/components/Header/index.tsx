import { Title } from "./styles";

interface HeaderProps {
    title: string;
}

export function Header({ title }: HeaderProps) {
    return (
        <header>
            <Title>{title}</Title>
        </header>
    );
}