import Image from 'next/image'
import Link from 'next/link'

const Nav = (props) => {
    return(
        <>
        <nav>
            <li>
                <Link href="/">
                    <a>
                        <Image src="/F1-LOGO.png" height={50} width={70} />
                    </a>
                </Link>
                
            </li>
        </nav>
        <style jsx>{`

            nav {
                display: flex;
                background-color: red;
                justify-content: center;
                align-items: center;
                position: fixed;
                top: 0;
                right: 0;
                left: 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.3)
            }

            li {
                list-style: none;
                color: white;
                margin: 0 10px;
            }

        `}</style>
        </>
    )
}

export default Nav