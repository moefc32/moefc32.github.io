<script>
    import '../app.css';

    const ogImage = `${import.meta.env.VITE_SITE_URL}/og.png`;

    if (
        'serviceWorker' in navigator &&
        !['localhost', '127.0.0.1'].includes(location.hostname)
    ) {
        addEventListener('load', function () {
            navigator.serviceWorker.register('/service-worker.js');
        });
    }
</script>

<svelte:head>
    <title>
        {import.meta.env.VITE_APP_NAME}
    </title>

    <meta property="og:title" content={import.meta.env.VITE_APP_NAME} />
    <meta property="og:site_name" content={import.meta.env.VITE_APP_NAME} />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Main website of Faizal Chan." />
    <meta property="og:image" content={ogImage} />
    <meta
        name="description"
        content="Faizal Chan, a strong design management professional with a master of management degree, focused in UX from Telkom University."
    />

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

<div class="flex flex-1 justify-center items-center p-6">
    <slot />
</div>
