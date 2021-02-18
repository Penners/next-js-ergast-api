import { useRouter } from 'next/router'
import Link from 'next/link'

const Nav = (props) => {

    const currentSeason = new Date().getFullYear()
    const router = useRouter()

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
            name: 'Standings'
        }

    ]

    return (
        <>
            <div className="nav-outer">
                <nav>
                    {links.map(({ href, name }) => {
                        const activeClass = href === router.asPath ? 'active' : ''

                        return (
                            <li key={href} className={activeClass}>
                                <Link {...{ href }}>
                                    <a>
                                        {name}
                                    </a>
                                </Link>
                            </li>
                        )
                    })}

                </nav>
            </div>

            <style jsx>{`

            .nav-outer {
                display: block;
                position: fixed;
                z-index: 100;
                top: 0;
                right: 0;
                left: 0;
                background-color: red;
                width: 100%;
                box-shadow: 0px 2px 15px 2px rgba(186,186,186,0.73);
            }

            nav {
                max-width: 768px;
                margin: auto;
                display: flex;
                align-items: center;
                padding: 0 10px;
            }

            li {
                list-style: none;
                color: white;
                border-bottom: 2px solid transparent;
            }

            .active {
                border-bottom: 2px solid white;
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