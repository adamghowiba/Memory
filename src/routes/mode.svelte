<script lang="ts">
import Button from "$lib/Button.svelte";
import type {Mode} from '$lib/types/types';
import { gameMode } from "$lib/stores/mode";

</script>

<div class="wrapper">
    <h1>Choose your difficulty level</h1>

    
    <div class="buttons">
        <Button circle href="/board" on:click={() => $gameMode = 'easy'}> Easy </Button>
        <Button circle href="/board" on:click={() => $gameMode = 'hard'}> Hard </Button>
    </div>
</div>

<style>
    .wrapper {
        max-width: 300px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .buttons {
        margin-top: 2rem;
        display: flex;
        gap: 2rem;
    }
</style>
