<script>
    export let text
    export let link
</script>

<li>
    <a target="_blank" href={link}>{text} <span>-></span></a>
</li>

<style>
    a {
        display: flex;
        justify-content: space-between;
    }
</style>