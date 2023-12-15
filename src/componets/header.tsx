import './header.css'

interface HeaderProps{
    title?: string;
}

export default function Header({ title = "Curso de React + TypeScript"}: HeaderProps) {
    return(
        <header className='header'>
            <h1 className='title'>{title}</h1>
        </header>
        
    )
}