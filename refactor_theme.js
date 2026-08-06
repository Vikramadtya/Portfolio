const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacePatterns = [
  { regex: /text-blue-[4567]00/g, replacement: 'text-primary' },
  { regex: /bg-blue-[567]00/g, replacement: 'bg-primary' },
  { regex: /border-blue-[4567]00/g, replacement: 'border-primary' },
  { regex: /ring-blue-[4567]00/g, replacement: 'ring-primary' },
  { regex: /hover:text-blue-[4567]00/g, replacement: 'hover:text-primary' },
  { regex: /hover:bg-blue-[567]00/g, replacement: 'hover:bg-primary/90' },
  { regex: /bg-blue-100\/80/g, replacement: 'bg-primary/20' },
  { regex: /bg-blue-100/g, replacement: 'bg-primary/20' },
  { regex: /text-blue-800/g, replacement: 'text-primary' },
  { regex: /dark:bg-blue-900/g, replacement: 'dark:bg-primary/20' },
  { regex: /dark:text-blue-300/g, replacement: 'dark:text-primary' },
  { regex: /marker:text-blue-600/g, replacement: 'marker:text-primary' },
  { regex: /dark:border-blue-500/g, replacement: 'dark:border-primary' },
  { regex: /dark:hover:bg-blue-500/g, replacement: 'dark:hover:bg-primary/90' },
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.match(/\.(js|jsx|css)$/)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      
      for (const { regex, replacement } of replacePatterns) {
        content = content.replace(regex, replacement);
      }
      
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
console.log("Done refactoring theme colors.");
