const Card = ({children, margin = 10}) => {

    return(
        <>
        <div className="card">
            {children}
        </div>
        <style jsx>{`
            .card {
                box-shadow: 0px 2px 15px 2px rgba(186,186,186,0.73);
                margin: ${margin}px;
                border-radius: 10px;
                overflow: hidden;
                background-color: white;
            }    
        `}</style>
        </>
    )
}

export default Card