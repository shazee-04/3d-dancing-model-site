window.addEventListener("load", () => {
    gsap.to(".loader-container", {
        opacity: 0,
        duration: 0.8,
        delay: 1,
        ease: "power2.out",
        onComplete: () => {
            document.querySelector("loader-container").style.display = "none";
        }
    });

    const bgText_Translate = -200;

    gsap.to(".bg-text-1", { x: bgText_Translate, duration: 2, delay: 1, ease: "power3.inOut" });
    gsap.to(".bg-text-2", { x: -bgText_Translate, duration: 2, delay: 1, ease: "power3.inOut" });
});