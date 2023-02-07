import Head from "next/head"
import { FC } from "react";
import { Navbar } from "../ui";

interface MainLayoutProps {
    children:JSX.Element|JSX.Element[];
    title?:string;
}

const origin = ( typeof window === 'undefined') ? '' : window.location;

export const MainLayout:FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App '}</title>
            <meta name="author" content="Santiago Moraes"/>
            <meta name="description" content="Informacion sobre el pokémon xxxxx"/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />
            <meta property="og:title" content={`Información sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
            <meta property="og:image" content={`${origin}/images/banner.png`} />
        </Head>

        <Navbar />

        <main
          style={{
            padding:'0px 20px',
          }}
        >
            { children }
        </main>
    </>
  )
}

