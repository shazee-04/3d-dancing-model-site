const modelViewer = document.getElementById('modal');

let modelLoaded = false;
let modelVisible = false;

function modelConfig() {
    modelViewer.timeScale = 0.75;
}

function checkReady() {
    if (modelLoaded && modelVisible) {
        console.log("Model is loaded AND visible");
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
    }
}

// Listen for when the model is loaded
modelViewer.addEventListener('load', () => {
    modelLoaded = true;
    console.log("Model loaded");
    modelConfig();
    checkReady();
});

// IntersectionObserver to check if it's visible in the viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        modelVisible = entry.isIntersecting;
        if (modelVisible) {
            console.log("Model is visible on screen");
            checkReady();
        }
    });
});

observer.observe(modelViewer);