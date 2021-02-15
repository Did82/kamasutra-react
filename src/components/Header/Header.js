import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerWrapper}>
                <img src="https://www.vippng.com/png/full/39-398445_blue-lion-logo-png-lion-blue-png.png" alt="logo"/>
            </div>
        </header>
    )
};

export default Header;
