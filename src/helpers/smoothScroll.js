const handleNavClick = (e, targetId) => {
  e.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    });
  }
};

export default handleNavClick;
