import { Footer } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function FooterComponent() {
    const [year , setYear] = useState(0);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, [])

    return (
        <Footer container className='dark:bg-gray-800'>
            <div className='w-full'>
                <Footer.Divider />
                <div className='grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
                <div className='ml-5'>
                    <Footer.Brand
                    href='https://flowbite.com'
                    src='crawler-company.jpg'
                    alt='SuperCrawler Logo'
                    name='SuperCrawler'
                    />
                </div>
                <div className='pr-10 grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
                    <div>
                    <Footer.Title title='about' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='#'>SuperCrawler</Footer.Link>
                        <Footer.Link href='https://www.google.com/'>Google</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Follow us' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://github.com/mrVietus'>Github</Footer.Link>
                        <Footer.Link href='#'>Discord</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Legal' />
                    <Footer.LinkGroup col>
                        <Footer.Link href='#'>Privacy Policy</Footer.Link>
                        <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                </div>
                </div>
                <Footer.Divider />
                <div className='px-2 w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright href='#' by='SuperCrawler™' year={year} />
                    <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
                        <Footer.Icon href='#' icon={BsFacebook} />
                        <Footer.Icon href='#' icon={BsInstagram} />
                        <Footer.Icon href='#' icon={BsTwitter} />
                        <Footer.Icon href='https://github.com/mrVietus' icon={BsGithub} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterComponent