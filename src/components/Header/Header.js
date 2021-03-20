import logo from '../../karaoke-logo.svg';

const Header = () => {
    return (
        <header className="max-w-full bg-white dark:bg-gray-800 flex items-center h-16 text-purple-600 dark:text-gray-200 shadow">
            <div className="max-w-5xl mx-auto flex-grow px-2">
                {/*<img className="h-14 stroke-current text-blue-800" src={logo} alt="logo"/>*/}
                <svg className="h-14 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
            </div>
        </header>
    )
};

export default Header;
