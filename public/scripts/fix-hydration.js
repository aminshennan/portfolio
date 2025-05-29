/**
 * Fix Hydration Script
 * 
 * This script removes attributes added by browser extensions like Grammarly
 * that can cause React hydration errors. It runs before React hydration to ensure
 * the DOM matches what the server rendered.
 */

(function() {
  // Function to remove Grammarly and other extension attributes
  function removeExtensionAttributes() {
    try {
      // Remove Grammarly attributes from the entire document
      const allElements = document.querySelectorAll('*');
      
      allElements.forEach(element => {
        // List of attribute prefixes to remove
        const attributesToRemove = [
          'data-gr-',
          'grammarly-',
          'data-new-gr',
          'gramm',
        ];
        
        // Get all attributes of the current element
        const attributes = element.attributes;
        const attributesToDelete = [];
        
        // Identify attributes to remove
        for (let i = 0; i < attributes.length; i++) {
          const attr = attributes[i];
          const attrName = attr.name;
          
          // Check if the attribute name starts with any of the prefixes
          if (attributesToRemove.some(prefix => attrName.startsWith(prefix))) {
            attributesToDelete.push(attrName);
          }
        }
        
        // Remove identified attributes
        attributesToDelete.forEach(attr => {
          element.removeAttribute(attr);
        });
      });
      
      console.log('Successfully removed extension attributes to prevent hydration errors');
    } catch (error) {
      console.error('Error in removeExtensionAttributes:', error);
    }
  }
  
  // Execute immediately
  removeExtensionAttributes();
  
  // Also run when DOM content is loaded to ensure it catches any late additions
  document.addEventListener('DOMContentLoaded', removeExtensionAttributes);
})(); 