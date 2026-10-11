
const parallaxSection = document.querySelector(".coffee-parallax");
const parallaxImage = document.querySelector(".coffee-image");

if (parallaxSection && parallaxImage) {
    let ticking = false;

    function updateParallax() {
        const sectionTop =
            parallaxSection.getBoundingClientRect().top;

        // The Parallax effect that makes it move !!!.
        const offset = -sectionTop * 0.15;

        parallaxImage.style.setProperty(
            "--parallax-offset",
            `${offset}px`
        );

        ticking = false;
    }

    function requestParallaxUpdate() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener("scroll", requestParallaxUpdate, {
        passive: true
    });

    window.addEventListener("resize", requestParallaxUpdate);

    updateParallax();
}
