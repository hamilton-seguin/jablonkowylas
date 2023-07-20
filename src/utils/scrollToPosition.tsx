// Save the scroll position to localStorage
export const scrollPosition = () => {
  const currentPosition = window.scrollY;
  localStorage.setItem('scrollPosition', currentPosition.toString());
};

export const saveScrollPosition = () => {
  const isStored = localStorage.getItem('scrollPosition')
  if (!isStored) return 0;
  window.removeEventListener('scroll', scrollPosition);
  localStorage.setItem('savedScrollPosition', isStored);
}

// Get the saved scroll position from localStorage
export const getSavedScrollPosition = () => {
  const isSaved = localStorage.getItem('savedScrollPosition')
  if (!isSaved) return 0;
  const savedScrollPosition = parseInt(isSaved, 10);
  return savedScrollPosition;
};

export const scrollToSavedPosition = () => {
  const savedPosition = getSavedScrollPosition();
  window.scrollTo(0, savedPosition);
};