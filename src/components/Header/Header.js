import s from './Header.module.css';
import logo from '../../logo.svg';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerWrapper}>
                <img src={logo} alt="logo"/>
            </div>
        </header>
    )
};

export default Header;
