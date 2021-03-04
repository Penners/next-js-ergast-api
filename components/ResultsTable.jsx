import Card from 'components/Card'
import Link from 'next/link'

const ResultsTable = ({ title, link, header, values }) => {
    return (
        <>
            <Card>
                <div className="inner">
                    {title && 
                        <h3 className="title">{title}</h3>
                    }
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
                    {link && link.label && link.href &&
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

export default ResultsTable