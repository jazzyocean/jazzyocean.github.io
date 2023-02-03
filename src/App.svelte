<script>
	import { entries, theme, presentation } from './scripts/stores.js';
	import { saveEntries, loadEntries } from './scripts/memory.js';
	import Entry from './components/Entry.svelte';
	// Load entries from localStorage as soon as the app starts
	loadEntries();

	// Save and load style preferences
	$theme = !!localStorage.getItem('theme')? localStorage.getItem('theme') === 'true' : $theme;
	$presentation = !!localStorage.getItem('presentation')? localStorage.getItem('presentation') === 'true' : $presentation;
	$: localStorage.setItem('theme', $theme);
	$: localStorage.setItem('presentation', $presentation);

	function insert(i) {
		let obj = {
			date: 'Write date here',
			title: 'Write title here',
			desc: 'Write description here',
		};
		$entries.splice(i+1, 0, obj); 
		$entries = $entries; // assignment to self triggers update
	}

	function removeEntry(i) {
		$entries.splice(i, 1);
		$entries = $entries; // assignment to self triggers update
	}

</script>
<head>
	<link rel="stylesheet" href="./styles/{$theme? 'dark' : 'light'}.css" />
	<link rel="stylesheet" href="./styles/{$presentation? '' : 'no'}presentation.css" />
</head>

<body>
	<p class="savebutton" on:mousedown={saveEntries}>Save</p>
	<p class="savebutton" on:mousedown={loadEntries}>Load</p>
	<br>
	<p class="abutton" on:mousedown={() => $theme = !$theme}>Toggle Theme</p> 
	<p class="abutton" on:mousedown={() => $presentation = !$presentation}>Toggle Presentation Mode</p>
	<div class="entries horizontal" id="entries">
		{#each $entries as _, i}
			<Entry 
				i={i}
				bind:date={$entries[i].date}
				bind:title={$entries[i].title}
				bind:description={$entries[i].desc}
				on:remove={() => removeEntry(i)}
				on:insert={() => insert(i)}
			/>
		{:else}
			<div class="line-container">
				<div class="line"></div>
				<span class="line-add-entry" on:mousedown={() => insert(1)}>+</span>
			</div>
		{/each}
	</div>
</body>
