import { useEffect, useState } from "react";

/**
 * Возвращает data-section активной секции.
 * Работает через IntersectionObserver + fallback на scroll (для старых/капризных браузеров).
 *
 * @param {Object} options
 *  - selector: CSS селектор секций (по умолчанию "[data-section]")
 *  - root: root для IntersectionObserver (null = viewport)
 *  - rootMargin: смещение (на мобильных часто полезно)
 *  - threshold: массив порогов для intersectionRatio
 */
export const useActiveSection = ({
  selector = "[data-section]",
  root = null,
  rootMargin = "0px 0px -20% 0px", // смещаем низ на -20% — полезно для мобильных
  threshold = 0.5,
} = {}) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = Array.from(document.querySelectorAll(selector));

    if (!sections.length) return;

    // игнорируем секции с нулевой высотой
    const visibleSections = sections.filter(s => s.offsetHeight > 10);

    if (!visibleSections.length) {
      // fallback: если ещё нет высоты, установим наблюдение позже
      const timeout = setTimeout(() => {
        // try again shortly (component might still render content)
        // we don't call setActive here — just let observer re-run
      }, 200);
      return () => clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // выбираем элемент с максимальным intersectionRatio
        let best = null;
        entries.forEach(entry => {
          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        });
        if (best && best.isIntersecting) {
          setActiveSection(best.target.dataset.section);
        }
      },
      { root, rootMargin, threshold }
    );

    visibleSections.forEach(section => observer.observe(section));

    // fallback for browsers where IO might be flaky — simple scroll check
    const onScroll = () => {
      const topMid = window.scrollY + window.innerHeight / 2;
      let best = null;
      visibleSections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        const absTop = window.scrollY + rect.top;
        const absBottom = absTop + rect.height;
        if (absTop <= topMid && absBottom >= topMid) {
          best = sec;
        }
      });
      if (best) setActiveSection(best.dataset.section);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [selector, root, rootMargin, JSON.stringify(threshold)]); // stringify threshold for dependency

  return activeSection;
};
