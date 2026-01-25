// Debug script to diagnose collapsible details issues
(function() {
  'use strict';
  
  console.log('🔍 DEBUG: Script loaded');
  
  // Check details elements
  const details = document.querySelectorAll('details');
  console.log('🔍 DEBUG: Details elements found:', details.length);
  
  if (details.length === 0) {
    console.error('❌ PROBLEM: No <details> elements found! Jekyll may have stripped them.');
    // Check if they exist as text
    const bodyText = document.body.innerHTML;
    console.log('🔍 DEBUG: Body contains "<details>":', bodyText.includes('<details>'));
    console.log('🔍 DEBUG: Body contains "solution":', bodyText.includes('solution'));
  } else {
    console.log('✅ Details elements exist');
    
    const firstDetail = details[0];
    console.log('🔍 DEBUG: First details:', {
      hasOpen: firstDetail.hasAttribute('open'),
      hasSummary: !!firstDetail.querySelector('summary'),
      innerHTML: firstDetail.innerHTML.substring(0, 150)
    });
    
    // Check CSS
    const summary = firstDetail.querySelector('summary');
    if (summary) {
      const styles = window.getComputedStyle(summary);
      console.log('🔍 DEBUG: Summary styles:', {
        backgroundColor: styles.backgroundColor,
        cursor: styles.cursor,
        color: styles.color
      });
    }
    
    // Test native support
    const testDetails = document.createElement('details');
    console.log('🔍 DEBUG: Native <details> support:', 'open' in testDetails);
    
    // Add click listener to first details
    firstDetail.addEventListener('toggle', function() {
      console.log('🔍 DEBUG: Toggle event fired! Open:', firstDetail.open);
    });
  }
  
  // Check for CSS file
  const stylesheets = Array.from(document.styleSheets);
  console.log('🔍 DEBUG: Stylesheets loaded:', stylesheets.length);
  stylesheets.forEach((sheet, i) => {
    try {
      console.log(`🔍 DEBUG: Stylesheet ${i}:`, sheet.href);
    } catch(e) {
      console.log(`🔍 DEBUG: Stylesheet ${i}: (CORS blocked)`);
    }
  });
  
})();
