// Insert current year into footer
document.getElementById('year').textContent = new Date().getFullYear();

// Make project cards clickable - click anywhere on card to open project detail page
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function(e) {
    // Don't navigate if user clicked directly on a link - let the link work normally
    if (e.target.closest('a')) {
      return;
    }
    
    // Find the case study/detail page link within this card and navigate to it
    const detailLink = this.querySelector('.case-study-link, a[href*="projects/"]');
    if (detailLink) {
      // Navigate to the project detail page
      window.location.href = detailLink.getAttribute('href');
    }
  });
});
