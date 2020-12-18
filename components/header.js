import Head from 'next/head';


export default function HeaderComponent(props){
  return (
    <>
      <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="author" content="trieu" />
                <meta name="description" content="search flim" />
                <title>{props.title}</title>
      </Head>
    </>
  )
}