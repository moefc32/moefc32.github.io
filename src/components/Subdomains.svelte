<script>
    import { subdomain } from '../lib/subdomain';

    export let list = false;
</script>

{#if !list}
    {#each subdomain as item, i}
        {#if i === 0}
            <li
                class="block pb-1 bg-white rounded-t-lg h-[36px] cursor-pointer"
            >
                <span class="inline-block px-4 py-2">
                    <svelte:component
                        this={item.icon}
                        size={16}
                        class={'inline-block me-1'}
                    />
                    {item.name}
                </span>
            </li>
        {:else}
            <li
                class="block pb-1 bg-gray-200 transition-all duration-250 ease-in-out hover:h-[40px] rounded-t-lg h-[36px] cursor-pointer"
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
        {/if}
    {/each}
{:else}
    {#each subdomain as item, i}
        <a
            href={item.link}
            target="_blank"
            class="block px-6 py-4 bg-slate-500 hover:bg-slate-400 text-white text-center rounded-md"
        >
            {item.name}
        </a>
    {/each}
{/if}
