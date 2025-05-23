import React from 'react';

/**
 * LoadingPlaceholder Component
 * 
 * A simple skeleton loader component used as a fallback for dynamically imported components.
 * It displays pulsing placeholder shapes to indicate content is loading.
 */
export const LoadingPlaceholder = () => (
  <div 
    className="animate-pulse space-y-4 p-4 rounded-lg bg-muted/10 border border-border/10"
    role="status" // Add role for accessibility
    aria-label="Loading content"
  >
    {/* Simulate a heading */}
    <div className="h-6 sm:h-8 bg-muted/30 rounded w-3/4"></div>
    {/* Simulate lines of text */}
    <div className="h-4 bg-muted/30 rounded w-full"></div>
    <div className="h-4 bg-muted/30 rounded w-5/6"></div>
  </div>
); 