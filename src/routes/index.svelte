<script>
	import Button from '$lib/Button.svelte';
</script>

<div class="heading">
	<h1>Welcome To <span class="underline">Memory</span></h1>
	<p>
		Put your <b>memory</b> to the test. A cognetive memory based game on the old-school card game.
		Challenge yourself with different difficulty levels
	</p>
    <Button href="/mode" circle>Start</Button>
</div>

<style>
	.heading {
		display: flex;
        flex-direction: column;
        align-items: center;
		text-align: center;
		max-width: 70ch;
		margin: 10% auto;
	}
    .heading p {
        margin-bottom: 2rem;
    }
	.underline {
		position: relative;
        font-weight: 800;
	}
	.underline::before {
		content: '';
		position: absolute;
		background-color: #fda215;
		width: 100%;
		height: 18px;
		bottom: 6px;
		z-index: -1;
	}
</style>
