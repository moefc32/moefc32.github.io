<script>
  import "../app.css";
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
  <meta property="og:image" content="https://mf-chan.com/og.jpg" />

  <script
    async
    src={"https://www.googletagmanager.com/gtag/js?id=" +
      import.meta.env.vite_google_tag}
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", import.meta.env.VITE_GOOGLE_TAG);
  </script>
</svelte:head>

<slot />
