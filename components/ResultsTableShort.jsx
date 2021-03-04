import Card from 'components/Card'
import Link from 'next/link'

const ResultsTableShort = ({ title, link, header, values }) => {
    return (
        <>
            <Card>
                <div className="inner">
                    <h3 className="title">{title}</h3>
                    <table>
                        <thead>
                            <tr>
                                {Object.keys(header).map((key) => {
                                    return (<td key={`cell-header-${key}`}>{header[key]}</td>)
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {values.map((row, index) => {
                                return (
                                    <tr key={`row-${title}-${index}`}>
                                        {Object.keys(header).map((key) => {
                                            return (
                                                <td key={`cell-body-${key}`}>{row[key]}</td>
                                            )
                                        })}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    {link.label && link.href &&
                        <Link href={link.href}>
                            <a>{link.label}</a>
                        </Link>
                    }
                </div>
            </Card>
            <style jsx>{`
                .inner {
                    margin: 10px;
                }
                .title {
                    margin: 10px;
                }
                table {
                    border-spacing: 0;
                    width: 100%;
                    border-radius: 5px;
                    overflow: hidden;
                }

                thead {
                    background-color: lightgrey;
                    color: black; 
                }

                td {
                    padding: 10px 5px;
                }

                a {
                    display: block;
                    background-color: red;
                    color: white; 
                    padding: 10px;
                    text-align: center;
                    border-radius: 5px;
                    margin-top: 10px;
                }    
            `}</style>
        </>
    )
}


const props = {
    title: '2020 Driver Standings',
    link: {
        label: '2020 Driver Standings',
        href: '/standings/2020'
    },
    header: {
        position: 'pos.',
        name: 'name',
        points: 'Pts'

    },
    values: [
        {
            name: 'Lewis',
            position: '1',
            points: '230',
        },
        {
            name: 'Vettell',
            position: '2',
            points: '230',
        },
        {
            name: 'Lewis',
            position: '1',
            points: '230',
        }
    ]
}

export default ResultsTableShort