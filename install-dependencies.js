const { execSync } = require('child_process');

// List of all Radix UI packages that might be needed
const packages = [
  '@radix-ui/react-alert-dialog',
  '@radix-ui/react-aspect-ratio',
  '@radix-ui/react-avatar',
  '@radix-ui/react-checkbox',
  '@radix-ui/react-context-menu',
  '@radix-ui/react-dialog',
  '@radix-ui/react-dropdown-menu',
  '@radix-ui/react-hover-card',
  '@radix-ui/react-label',
  '@radix-ui/react-menubar',
  '@radix-ui/react-navigation-menu',
  '@radix-ui/react-popover',
  '@radix-ui/react-progress',
  '@radix-ui/react-radio-group',
  '@radix-ui/react-scroll-area',
  '@radix-ui/react-select',
  '@radix-ui/react-separator',
  '@radix-ui/react-slider',
  '@radix-ui/react-slot',
  '@radix-ui/react-switch',
  '@radix-ui/react-tabs',
  '@radix-ui/react-toast',
  '@radix-ui/react-toggle',
  '@radix-ui/react-toggle-group',
  '@radix-ui/react-tooltip',
  '@radix-ui/react-use-toast',
  'input-otp'
];

console.log(`Installing ${packages.length} packages...`);

// Install packages one by one to avoid command line length issues
for (const pkg of packages) {
  try {
    console.log(`Installing ${pkg}...`);
    execSync(`npm install ${pkg}`, { stdio: 'inherit' });
    console.log(`Successfully installed ${pkg}`);
  } catch (error) {
    console.error(`Failed to install ${pkg}: ${error.message}`);
  }
}

console.log('Finished installing packages.'); 