import reactLogo from '../assets/react.svg'

export default function AppHeader() {

    const appname = 'React-Task-List';
    return (
        <header>
            <img src={reactLogo} alt="react logo" />
            <br />{appname}
        </header>
    );
}