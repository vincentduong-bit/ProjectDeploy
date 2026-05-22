export default function useScrollReveal(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                const el = entry.target as HTMLElement;
                if (entry.isIntersecting) {
                    const delay = el.getAttribute('data-reveal-delay');
                    if (delay) el.style.transitionDelay = delay;
                    el.style.transition = 'opacity 700ms cubic-bezier(.16,.84,.3,1), transform 700ms cubic-bezier(.16,.84,.3,1)';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    observer.unobserve(el);
                }
            }
        },
        { threshold: 0.12 }
    );

    // Initialize targets
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    els.forEach((el) => {
        // set sensible initial state
        el.style.opacity = el.style.opacity || '0';
        el.style.transform = el.style.transform || 'translateY(24px)';
        // allow JS-driven transitions
        el.style.willChange = 'opacity, transform';
        observer.observe(el);
    });
}
