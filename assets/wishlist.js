(() => {
  const STORAGE_KEY = 'fh_wishlist_v1';

  function getWishlist() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  }

  function setWishlist(ids) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(new Set(ids))));
    document.dispatchEvent(new CustomEvent('wishlist:updated', { detail: { ids } }));
  }

  function toggleWishlist(id) {
    const ids = getWishlist();
    const index = ids.indexOf(id);
    if (index >= 0) {
      ids.splice(index, 1);
    } else {
      ids.push(id);
    }
    setWishlist(ids);
    return ids.includes(id);
  }

  function initButtons(root = document) {
    root.querySelectorAll('[data-wishlist-button]').forEach((btn) => {
      const productId = btn.getAttribute('data-product-id');
      if (!productId) return;
      const active = getWishlist().includes(productId);
      btn.setAttribute('aria-pressed', active);
      btn.classList.toggle('is-active', active);
      btn.addEventListener(
        'click',
        (e) => {
          e.preventDefault();
          const on = toggleWishlist(productId);
          btn.setAttribute('aria-pressed', on);
          btn.classList.toggle('is-active', on);
        },
        { once: false }
      );
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initButtons();
  });

  document.addEventListener('wishlist:refresh', (e) => {
    initButtons(e.detail?.root || document);
  });
})();
