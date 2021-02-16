const Main = ({children}) => {
    return(
        <>
        <main>
            {children}
        </main>
        <style jsx>{`
            main {
                max-width: 768px;
                width: 100%;
                margin: auto;
            }
        `}</style>
        </>
    )
}

export default Main