<div class="bg">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>

<style>
    .bg {
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        z-index: -1;
    }
    .bg > div {
        width: 1px;
        background: repeating-linear-gradient(to bottom,
    transparent,
    transparent 10px,
    #ccc 10px,
    #ccc 20px
  );
    }
</style>