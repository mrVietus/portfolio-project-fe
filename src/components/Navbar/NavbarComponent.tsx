import { Avatar, DarkThemeToggle, Navbar } from 'flowbite-react';

type Props = {
    setSelectedMenuItem: (parameter: string) => void;
}

function NavbarComponent({setSelectedMenuItem}: Props) {

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, pageName: string) => {
        event.preventDefault();
        setSelectedMenuItem(pageName)
    };

    return (
        <header className='sticky top-0 z-50 bg-white p-4 shadow-md mb-1 w-full dark:bg-gray-800 h-28'>
            <Navbar fluid rounded>
                    <Navbar.Brand>
                        <span className='self-center whitespace-nowrap text-5xl font-bold dark:text-white'>SuperCrawler</span>
                        <div className='pl-5 pt-2'>
                            <Avatar alt='SuperCrawler image' img='crawler-company.jpg' rounded={true} />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Navbar.Link className='text-xl mt-1' href="" onClick={(event) => handleClick(event, 'home')}>
                            Home
                        </Navbar.Link>
                        <Navbar.Link className='text-xl mt-1' href="" onClick={(event) => handleClick(event, 'contact')}>
                            Contact
                        </Navbar.Link>
                        <DarkThemeToggle />
                    </Navbar.Collapse>
                </Navbar>
        </header>
    );
}

export default NavbarComponent;