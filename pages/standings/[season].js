import Main from 'components/Main'

const Standings = (props) => {
   
    return (
    <>
        <Main>
            <h3>Work in Progress</h3>
        </Main>
        
    </>
  )
}

export async function getStaticProps({ params }){

    const { season } = params

    return ({
        props: {},
        revalidate: 60
    })
}

export async function getStaticPaths(){
    return {
        paths: [
            '/standings/2021'
        ],
        fallback: true
    }
}

export default Standings