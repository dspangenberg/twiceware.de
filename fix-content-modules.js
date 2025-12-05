#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'fs';

const filePath = '.astro/content-modules.mjs';

try {
  let content = readFileSync(filePath, 'utf-8');

  // Fix all projekte paths to use /index.mdx structure
  content = content.replace(/src\/content\/projekte\/([^\/]+)\.mdx/g, 'src/content/projekte/$1/index.mdx');
  content = content.replace(/fileName=src%2Fcontent%2Fprojekte%2F([^%]+)\.mdx/g, 'fileName=src%2Fcontent%2Fprojekte%2F$1%2Findex.mdx');

  writeFileSync(filePath, content);
  console.log('✓ Fixed content-modules.mjs');
} catch (error) {
  console.error('Error fixing content-modules.mjs:', error.message);
  process.exit(1);
}
