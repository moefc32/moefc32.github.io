<script>
    import { subdomain } from '../lib/subdomain';

    const getYear = new Date().getFullYear();
    const currentYear = (getYear > 2018 ? `2018 - ` : '') + getYear;
</script>

<!-- svelte-ignore a11y_img_redundant_alt -->
<main class="max-w-[90%] sm:max-w-[700px] lg:max-w-[800px]">
    <ul
        class="hidden lg:flex justify-start items-end gap-[3px] m-0 p-0 text-sm h-[50px]"
    >
        {#each subdomain as item, i}
            <li
                class={'block pb-1 cursor-pointer rounded-t-lg h-[36px] ' +
                    (i === 0
                        ? 'bg-white'
                        : 'bg-gray-200 transition-all duration-250 ease-in-out hover:h-[40px]')}
            >
                <a
                    href={item.link}
                    target="_blank"
                    class="inline-block px-4 py-2"
                >
                    <svelte:component
                        this={item.icon}
                        size={16}
                        class={'inline-block me-1'}
                    />
                    {item.name}
                </a>
            </li>
        {/each}
    </ul>
    <div class="p-3 bg-white rounded-xl lg:rounded-tl-none shadow-lg">
        <div class="flex flex-col lg:flex-row">
            <div
                class="mx-auto lg:ms-3 lg:me-0 my-3 lg:my-0 px-3 lg:py-3 w-1/4 lg:w-1/5 min-w-[120px]"
            >
                <div class="max-w-[200px]">
                    <img
                        src="/og.png"
                        alt="Profile picture"
                        class="rounded-full"
                        title="Hai!"
                    />
                </div>
            </div>
            <div
                class="px-3 md:px-12 lg:px-3 text-center lg:text-left lg:w-3/4"
            >
                <h1 class="mb-1 lg:mt-3 lg:mb-1 text-3xl">
                    Faizal <abbr class="cursor-help" title="Chaniago"
                        >Chan.</abbr
                    >
                </h1>
                <p class="mt-1 mb-3 text-gray-400">@moefc32</p>
                <p class="mb-3 lg:mb-6">
                    Strong design management professional with a master of
                    management degree from Telkom University. Need mentoring
                    about UX Engineering or other topics? Feel free to
                    <a
                        href="mailto:hai@mf-chan.com"
                        class="text-blue-500 hover:text-green-500 underline"
                    >
                        contact me
                    </a>!
                </p>
            </div>
            <div class="flex flex-col gap-1 lg:hidden my-6 px-3">
                {#each subdomain as item, i}
                    {#if i !== 0}
                        <a
                            href={item.link}
                            target="_blank"
                            class="block px-6 py-4 bg-slate-500 hover:bg-slate-400 text-white text-center rounded-md"
                        >
                            {item.name}
                        </a>
                    {/if}
                {/each}
            </div>
        </div>
        <div class="mb-3 text-gray-500 text-center lg:text-sm">
            Mfc &copy; {currentYear}
        </div>
    </div>
</main>
