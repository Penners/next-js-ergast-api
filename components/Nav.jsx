import Router from 'next/router'
import Link from 'next/link'

const Nav = (props) => {

    const currentSeason = new Date().getFullYear()


    const links = [
        {
            href: '/',
            name: 'Home'
        },
        {
            href: `/schedule/${currentSeason}`,
            name: 'Schedule'
        },
        {
            href: `/standings/${currentSeason}`,
            name: 'Standinds'
        }
        
    ]


    return (
        <>
        <div className="nav-outer">
        <nav>
                <li>
                    <Link href="/">
                        <a>
                            Home
                    </a>
                    </Link>
                </li>
                <li>
                    <Link href={`/schedule/${currentSeason}`}>
                        <a>
                            Schedule
                    </a>
                    </Link>
                </li>
                <li>
                <Link href={`/standings/${currentSeason}`}>
                        <a>
                            Standings
                        </a>
                    </Link>
                </li>
            </nav>
        </div>
            
            <style jsx>{`

            .nav-outer {
                display: block;
                position: fixed;
                top: 0;
                right: 0;
                left: 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                background-color: red;
                width: 100%;
                box-shadow: 0px 2px 15px 2px rgba(186,186,186,0.73);
            }

            nav {
                max-width: 768px;
                margin: auto;
                display: flex;
                align-items: center;
                
            }

            li {
                list-style: none;
                color: white;
                margin: 0 10px;
            }

            a {
                padding: 10px;
                display: inline-block;
                font-weight: 500;
            }

        `}</style>
        </>
    )
}

export default Nav