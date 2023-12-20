<script>
export let data
</script>

<p>
    {@html data.intro}
</p>

<style>
    p {
        width: var(--default-width);
        max-width: var(--default-max-width);
        margin: 0 auto;
        font-size: clamp(1.3rem, 6vw, 2.8rem);
        /* line-height: 130%; */
    }
</style>