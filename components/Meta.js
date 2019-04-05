import Head from "next/head"

const Meta = () => (
    <>
        <Head>
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Cabin"
                rel="stylesheet"
                key="google-font-cabin"
            />
            <title>Orion Xiao</title>
        </Head>
        <style global jsx>{`
            body {
                font-family: "Cabin", sans-serif;
            }
        `}</style>
    </>
)

export default Meta
