import Head from "next/head"

const Meta = () => (
    <>
        <Head>
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <meta name="theme-color" content="#ffffff" />
            <meta
                name="description"
                content="Orion Xiao - Software Developer, NYU '19 - https://github.com/orionxiao - https://linkedin.com/in/orionxiao"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Cabin|Lora"
                rel="stylesheet"
            />
            <link
                rel="shortcut icon"
                type="image/x-icon"
                href="/static/favicon.ico"
            />
            {/* <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-138447070-1"
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-138447070-1');
                        `
                }}
            /> */}
            <title>Orion Xiao</title>
        </Head>
    </>
)

export default Meta
