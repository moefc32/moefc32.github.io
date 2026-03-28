<script>
    import { subdomain } from '../lib/subdomain';

    export let list = false;
</script>

{#if !list}
    {#each subdomain as item, i}
        {#if i === 0}
            <li class="block pb-1 bg-white rounded-t-lg h-9">
                <div class="inline-block px-4 py-2">
                    <svelte:component
                        this={item.icon}
                        size={16}
                        class={'inline-block me-1'}
                    />
                    {item.name}
                </div>
            </li>
        {:else}
            <li
                class="block pb-1 bg-gray-200 transition-all duration-250 ease-in-out hover:h-10 rounded-t-lg h-9 cursor-pointer"
            >
                <div class="tooltip" data-tip={item.tooltip}>
                    <a href={item.link} class="inline-block px-4 py-2">
                        <svelte:component
                            this={item.icon}
                            size={16}
                            class={'inline-block me-1'}
                        />
                        {item.name}
                    </a>
                </div>
            </li>
        {/if}
    {/each}
{:else}
    {#each subdomain as item, i}
        {#if i > 0}
            <a
                href={item.link}
                class="block px-6 py-4 bg-slate-500 hover:bg-slate-400 text-white text-center rounded-md"
            >
                {item.name}
            </a>
        {/if}
    {/each}
{/if}
