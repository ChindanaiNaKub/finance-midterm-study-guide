// Polyfill for <details> element for older browsers
(function() {
  'use strict';

  // Check if browser supports <details> natively
  var supportsDetails = 'open' in document.createElement('details');
  
  if (supportsDetails) {
    return;
  }

  // Polyfill for browsers that don't support <details>
  var details = document.querySelectorAll('details');
  
  Array.prototype.forEach.call(details, function(detail) {
    var summary = detail.querySelector('summary');
    var content = Array.prototype.slice.call(detail.children).filter(function(child) {
      return child !== summary;
    });

    // Hide content by default
    content.forEach(function(elem) {
      elem.style.display = 'none';
    });

    // Add click handler to summary
    summary.addEventListener('click', function(e) {
      e.preventDefault();
      
      var isOpen = detail.getAttribute('open') !== null;
      
      if (isOpen) {
        detail.removeAttribute('open');
        content.forEach(function(elem) {
          elem.style.display = 'none';
        });
      } else {
        detail.setAttribute('open', '');
        content.forEach(function(elem) {
          elem.style.display = 'block';
        });
      }
    });

    // Make summary keyboard accessible
    summary.setAttribute('tabindex', '0');
    summary.addEventListener('keydown', function(e) {
      if (e.keyCode === 13 || e.keyCode === 32) { // Enter or Space
        e.preventDefault();
        summary.click();
      }
    });
  });
})();
