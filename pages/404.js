import Main from 'components/Main'

export default function FourOhFour() {
  return <>
    <Main>
        <h1>404: Something went wrong</h1>
        <img src="/404.gif" />
    </Main>
    <style jsx>{`
        img {
            width: 100%;

        }    
    `}</style>
  </>
}