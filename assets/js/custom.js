var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 2/50;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;

    var translate = `translateX(${x}px) translateY(${y}px)`;

    var element = document.getElementById('hero-obj-1');
    if (element) {
        element.style.transform = translate;
    }

    window.requestAnimationFrame(moveBackground);
}

document.addEventListener('mousemove', function(e) {
    var lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));

    lFollowX = (20 * lMouseX) / 100; // Move ratio
    lFollowY = (10 * lMouseY) / 100; // Move ratio
});

moveBackground();
