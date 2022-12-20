const parallaxElements = document.querySelectorAll('.parallax-layer');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset;

  parallaxElements.forEach(parallaxElement => {
    let speed = parallaxElement.getAttribute('data-speed');

    parallaxElement.style.transform = `translateY(${scrollTop * speed}px)`;
  });
});
