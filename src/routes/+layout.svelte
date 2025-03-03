<script>
    import '../app.css';

    const ogImage = `${import.meta.env.VITE_SITE_URL}/og.png`;
</script>

<svelte:head>
    <title>
        {import.meta.env.VITE_APP_NAME}
    </title>

    <meta property="og:title" content={import.meta.env.VITE_APP_NAME} />
    <meta property="og:site_name" content={import.meta.env.VITE_APP_NAME} />
    <meta property="og:type" content="website" />
    <meta
        property="og:description"
        content="Faizal Chan. - Strong design management professional with a master of management degree, focused in UX from Telkom University."
    />
    <meta property="og:image" content={ogImage} />

    <script
        src="https://www.googletagmanager.com/gtag/js?id=UA-131278165-1"
        async
    ></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', 'UA-131278165-1');
    </script>
</svelte:head>

<slot />
