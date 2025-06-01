/**
 * Simplified Fix Hydration Script
 * 
 * This script removes attributes added by browser extensions like Grammarly
 * that can cause React hydration errors.
 */

(function() {
  // Target body element only for better performance
  function cleanBodyAttributes() {
    try {
      const body = document.body;
      if (body) {
        // Remove Grammarly specific attributes that cause hydration issues
        body.removeAttribute('data-new-gr-c-s-check-loaded');
        body.removeAttribute('data-gr-ext-installed');
      }
    } catch (error) {
      // Silent fail
    }
  }
  
  // Execute before React hydration
  if (document.body) {
    cleanBodyAttributes();
  } else {
    // If body isn't ready, wait for it
    document.addEventListener('DOMContentLoaded', cleanBodyAttributes);
  }
})(); 