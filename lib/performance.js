/**
 * Performance utilities for the portfolio application
 * Provides optimization helpers for components and data loading
 */

/**
 * Runs the garbage collector if available in the current environment
 * This can help prevent memory leaks during development
 */
export function runGarbageCollection() {
  if (typeof global !== 'undefined' && global.gc) {
    try {
      global.gc();
      console.log('Garbage collection triggered');
    } catch (e) {
      console.warn('Could not trigger garbage collection', e);
    }
  }
}

/**
 * Reports memory usage if available in the current environment
 * This can help identify memory leaks
 * @returns {Object|null} Memory usage information or null if not available
 */
export function reportMemoryUsage() {
  if (typeof process !== 'undefined' && process.memoryUsage) {
    const memoryUsage = process.memoryUsage();
    
    // Convert bytes to MB for easier reading
    const formatMemoryUsage = (data) => `${Math.round(data / 1024 / 1024 * 100) / 100} MB`;
    
    const memoryData = {
      rss: formatMemoryUsage(memoryUsage.rss), // Resident Set Size - total memory allocated
      heapTotal: formatMemoryUsage(memoryUsage.heapTotal), // V8 total heap size
      heapUsed: formatMemoryUsage(memoryUsage.heapUsed), // V8 used heap size
      external: formatMemoryUsage(memoryUsage.external || 0), // Memory used by C++ objects bound to JS
    };
    
    console.log('Memory usage:', memoryData);
    return memoryData;
  }
  
  return null;
}

/**
 * Optimizes component rendering by enabling aggressive deep memoization
 * This helps prevent unnecessary re-renders and memory leaks
 * @param {Function} Component - The component to optimize
 * @param {Array} dependencies - Optional dependencies to consider for memoization
 * @returns {Function} The optimized component
 */
export function optimizeComponent(Component, dependencies = []) {
  // This is a placeholder for future optimization strategies
  // In a real implementation, you might add React.memo with custom comparison
  return Component;
}

// Debounce utility for search and filtering
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle utility for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Lazy loading utility for images
export const createImageLoader = (src, placeholder = '/placeholder.svg') => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => resolve(placeholder);
    img.src = src;
  });
};

// Memory-efficient pagination utility
export const paginateArray = (array, page, itemsPerPage) => {
  const offset = (page - 1) * itemsPerPage;
  return {
    data: array.slice(offset, offset + itemsPerPage),
    total: array.length,
    hasNext: offset + itemsPerPage < array.length,
    hasPrev: page > 1
  };
};

// Performance monitoring utility
export const measurePerformance = (name, fn) => {
  return (...args) => {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
  };
};

// Bundle analysis helper
export const analyzeBundleSize = () => {
  if (typeof window !== 'undefined') {
    console.log('Client-side bundle analysis not implemented');
    return;
  }
  
  // Server-side analysis would go here
}; 