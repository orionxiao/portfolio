import Head from "next/head";

const Meta = () => (
    <>
        <Head>
            <link
                href="https://fonts.googleapis.com/css?family=Cabin"
                rel="stylesheet"
                key="google-font-cabin"
            />
        </Head>
        <style global jsx>{`
            body {
                font-family: "Cabin", sans-serif;
            }
        `}</style>
    </>
);

export default Meta;