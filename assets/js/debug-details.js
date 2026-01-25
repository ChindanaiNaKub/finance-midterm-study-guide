// Debug script to diagnose collapsible details issues
(function() {
  'use strict';
  
  const LOG_ENDPOINT = 'http://127.0.0.1:7242/ingest/68945d28-848e-4373-97dc-5033995716a1';
  
  function log(location, message, data) {
    fetch(LOG_ENDPOINT, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        location: location,
        message: message,
        data: data,
        timestamp: Date.now(),
        sessionId: 'debug-session',
        hypothesisId: data.hypothesisId || 'unknown'
      })
    }).catch(() => {});
  }
  
  // #region agent log - Page load
  log('debug-details.js:20', 'Page loaded', {
    hypothesisId: 'A,D',
    url: window.location.href,
    userAgent: navigator.userAgent
  });
  // #endregion
  
  // #region agent log - Check details elements
  const details = document.querySelectorAll('details');
  log('debug-details.js:30', 'Details elements found', {
    hypothesisId: 'A,D',
    count: details.length,
    hasDetails: details.length > 0
  });
  // #endregion
  
  if (details.length > 0) {
    const firstDetail = details[0];
    
    // #region agent log - First details structure
    log('debug-details.js:42', 'First details element structure', {
      hypothesisId: 'A,D',
      hasOpen: firstDetail.hasAttribute('open'),
      hasSummary: !!firstDetail.querySelector('summary'),
      innerHTML: firstDetail.innerHTML.substring(0, 200),
      computedDisplay: window.getComputedStyle(firstDetail).display
    });
    // #endregion
    
    // #region agent log - CSS check
    const summary = firstDetail.querySelector('summary');
    if (summary) {
      const summaryStyles = window.getComputedStyle(summary);
      log('debug-details.js:56', 'Summary CSS styles', {
        hypothesisId: 'B',
        backgroundColor: summaryStyles.backgroundColor,
        cursor: summaryStyles.cursor,
        display: summaryStyles.display,
        hasCustomStyles: summaryStyles.backgroundColor !== 'rgba(0, 0, 0, 0)'
      });
    }
    // #endregion
    
    // #region agent log - Test click functionality
    let clickWorked = false;
    const initialOpen = firstDetail.hasAttribute('open');
    
    firstDetail.addEventListener('click', function testClick() {
      clickWorked = true;
      log('debug-details.js:72', 'Details click event fired', {
        hypothesisId: 'C,D',
        wasOpen: initialOpen,
        nowOpen: firstDetail.hasAttribute('open'),
        toggleWorked: initialOpen !== firstDetail.hasAttribute('open')
      });
      firstDetail.removeEventListener('click', testClick);
    });
    // #endregion
    
    // #region agent log - Check for JavaScript errors
    window.addEventListener('error', function(e) {
      log('debug-details.js:85', 'JavaScript error detected', {
        hypothesisId: 'C',
        message: e.message,
        filename: e.filename,
        lineno: e.lineno
      });
    });
    // #endregion
  }
  
  // #region agent log - Check polyfill loaded
  setTimeout(function() {
    log('debug-details.js:98', 'Polyfill check after 1 second', {
      hypothesisId: 'C',
      detailsSupported: 'open' in document.createElement('details'),
      scriptsLoaded: document.scripts.length,
      hasPolyfillScript: Array.from(document.scripts).some(s => s.src.includes('polyfill'))
    });
  }, 1000);
  // #endregion
  
})();
