const fs = require('fs');
const path = require('path');

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (!filePath.includes('.vitepress/cache') && !filePath.includes('.vitepress/dist')) {
        getFiles(filePath, fileList);
      }
    } else if (filePath.endsWith('.md') || filePath.endsWith('.vue')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const docsDir = path.join(__dirname, '../docs/community/educators');
const files = getFiles(docsDir);

let errors = 0;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    // Check for hardcoded docs.mume.org internal links
    if (line.includes('docs.mume.org/community/educators')) {
      console.error(`[ERROR] ${file}:${index + 1}: Found hardcoded docs.mume.org link in Educator Portal: "${line.trim()}"`);
      errors++;
    }
    // Check for raw HTML href="/..." links which break under subpath deployments
    if (line.match(/href="\/[a-zA-Z0-9_-]/)) {
      console.error(`[ERROR] ${file}:${index + 1}: Found raw HTML root-relative link (href="/..."): "${line.trim()}". Use relative "./" or standard Markdown link syntax instead.`);
      errors++;
    }
  });
});

if (errors > 0) {
  console.error(`\nLink verification failed with ${errors} error(s).`);
  process.exit(1);
} else {
  console.log(`\nLink verification passed: All Educator Portal pages use valid relative links for fork compatibility.`);
  process.exit(0);
}
