<script lang="ts">
	import { afterUpdate, createEventDispatcher, onDestroy, onMount } from 'svelte';
import { gameResult } from './stores/mode';

	type statusType = 'time' | 'moves' | 'correct';

	export let type: statusType;
	export let value: any = 0;
	
	let timer;
	let future;

	const dispatch = createEventDispatcher();

	function setStartingTime(minutes, seconds) {
		let date: Date = new Date();
		date.setMinutes(minutes);
		date.setSeconds(seconds);
		return date;
	}

	function startCounting() {
		future.setSeconds(future.getSeconds() - 1);

		const seconds = ('0' + future.getSeconds()).slice(-2);
		const minutes = ('0' + future.getMinutes()).slice(-2);
		
		value = `${minutes}:${seconds}`;
		if (future.getSeconds() == 0 && future.getMinutes() == 0) {
			dispatch('over', true);
			clearInterval(timer);
		}
	}


	// afterUpdate(() => {
	// 	if ($gameResult || type != 'time') return;

	// });
	
	$: if ($gameResult == 'starting' && type == 'time') {
		if (timer) clearInterval(timer);

		future = setStartingTime(2, 20);
		timer = setInterval(startCounting, 1000);
		console.log('ticking');
	};


	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<div class="wrapper">
	<span class="status">{type}</span>
	<span class="value">{value}</span>
</div>

<style>
	.wrapper {
		background-color: #dfe6ec;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		padding: 5px 23px;
		border-radius: 10px;
	}
	.status {
		color: #6f95ac;
		text-transform: capitalize;
		font-size: 0.9em;
		margin-right: 2rem;
	}
	.value {
		color: #31485a;
		font-size: 2rem;
	}
</style>
