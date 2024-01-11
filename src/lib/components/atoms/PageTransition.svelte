<script>
    import { fly } from "svelte/transition";
    import { goto } from "$app/navigation";
    import { beforeUpdate, onMount } from "svelte";
    import { page } from "$app/stores";
    import { gsap } from "gsap/dist/gsap";

    $: currentURL = "";
    onMount(() => {
        currentURL = window.location;
        gsap.fromTo(
            ".page-transition",
            { top: "0vh", display: "flex" },
            {
                top: "-100vh",
                duration: 0.6,
                delay: 2,
                ease: "power1.inOut",
                onComplete: () => {
                    gsap.set(".page-transition", { display: "none" });
                    gsap.to(".page-transition", {
                        display: "flex",
                        top: "100vh",
                        duration: 0,
                        opacity: 1,
                    });
                },
            },
        );

        document.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                let destination = link.href;

                if (destination == currentURL) {
                    return
                } else {
                    gsap.fromTo(
                        ".page-transition",
                        {
                            top: "100vh",
                            delay: 3,
                            duration: 0.4,
                            ease: "power1.inOut",
                        },
                        {
                            top: "0vh",
                            delay: 0.3,
                            duration: 0.5,
                            ease: "power1.inOut",
                            onComplete: () => {
                                goto(destination);
                            },
                        },
                    );
                }
            });
        });
    });
</script>

<div class="page-transition"><img src="./emojis/waving-hand.png" alt=""></div>

<style>
    div {
        display: none;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0vh;
        height: 100vh;
        width: 100%;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        background-color: white;
        z-index: 3;
    }
</style>
