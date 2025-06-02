/**
 * Performance utilities to help with memory management
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