<script>
    export let date = '';
    export let title = '';
    export let description = '';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    const remove = () => dispatch('remove');
    const insert = () => dispatch('insert');
</script>

<div class="entry">
    <p class="entry-date" contenteditable bind:innerHTML={date}></p>
    <span class="entry-date-dot">•</span>
    <p class="entry-title" contenteditable bind:innerHTML={title}></p>
    <hr>
    <p class="entry-description" contenteditable bind:innerHTML={description}></p>
</div>
<div class="line-container">
    <span class="line-remove-entry" on:mousedown={remove}>-</span>
    <div class="line"></div>
    <span class="line-add-entry" on:mousedown={insert}>+</span>
</div>