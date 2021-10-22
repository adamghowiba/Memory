<script lang="ts">
    import type {ButtonColor} from './types/types';
    export let href;


    export let color: ButtonColor = 'gray';
    export let circle: boolean = false;
</script>

<a on:click {href} class="{color} {circle ? 'circle' : ''}"><slot /></a>

<style>
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 30px;
        border-radius: 50px;
        font-weight: 700;
        text-transform: uppercase;

        transition: transform 0.25s ease-out, opacity 0.25s ease-out, background-color 0.25s linear;;
    }
    a:hover {
        transform: translateY(-4px);
    }
    .orange {
        background-color: #FDA215;
        color: white;
    }
    .gray {
        color: #31485A;
        background-color: #DEE5EB;
    }
    .circle {
        background-color: #FDA215;
        width: 150px;
        height: 150px;
        font-size: 1.5rem;
        justify-content: center;
        border-radius: 50%;
        color: white;
    }
    .circle:hover {
        background-color: #31485A;
        /* opacity: 0.7; */
    }
</style>