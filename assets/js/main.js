const bgText_Translate = -200;

gsap.to(".bg-text-1", { x: bgText_Translate, duration: 2, ease: "power3.inOut" });
gsap.to(".bg-text-2", { x: -bgText_Translate, duration: 2, ease: "power3.inOut" });
