export function initHomeUtil() {
  if (typeof document === "undefined") return () => {};

  const menuEntries = Array.from(
    document.querySelectorAll("#sidebar ul > li > a")
  );
  const menuHandlers = [];

  menuEntries.forEach((menu) => {
    const handler = (e) => {
      const m = e.currentTarget;
      const subMenu = m.nextElementSibling;
      if (!subMenu) return;
      const arrowIcon = m.querySelector(".arrowIcon");

      if (subMenu.classList.contains("max-h-0")) {
        subMenu.classList.remove("max-h-0");
        subMenu.classList.add("max-h-[500px]");
      } else {
        subMenu.classList.remove("max-h-[500px]");
        subMenu.classList.add("max-h-0");
      }

      if (arrowIcon) {
        arrowIcon.classList.toggle("rotate-0");
        arrowIcon.classList.toggle("-rotate-90");
      }
    };

    menu.addEventListener("click", handler);
    menuHandlers.push({ el: menu, handler });
  });

  const cleanupHandlers = [];
  const sidebarOpenBtn = document.getElementById("open-sidebar");
  const sidebarCloseBtn = document.getElementById("close-sidebar");
  const sidebarCollapseMenu = document.getElementById("sidebar-collapse-menu");

  if (sidebarOpenBtn && sidebarCollapseMenu) {
    const openHandler = () => {
      sidebarCollapseMenu.style.cssText =
        "width: 250px; visibility: visible; opacity: 1;";
    };
    sidebarOpenBtn.addEventListener("click", openHandler);
    cleanupHandlers.push({ el: sidebarOpenBtn, handler: openHandler });
  }

  if (sidebarCloseBtn && sidebarCollapseMenu) {
    const closeHandler = () => {
      sidebarCollapseMenu.style.cssText =
        "width: 32px; visibility: hidden; opacity: 0;";
    };
    sidebarCloseBtn.addEventListener("click", closeHandler);
    cleanupHandlers.push({ el: sidebarCloseBtn, handler: closeHandler });
  }

  // return cleanup function to remove all listeners
  return () => {
    menuHandlers.forEach(({ el, handler }) =>
      el.removeEventListener("click", handler)
    );
    cleanupHandlers.forEach(({ el, handler }) =>
      el.removeEventListener("click", handler)
    );
  };
}
