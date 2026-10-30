#!/usr/bin/env node
// Narrow read-only entry; no init, hooks, install, network or input rewrites.
import { runCheck } from './check/src/cli.mjs';

const major = Number(process.versions.node.split('.')[0]);
if (major < 18) {
  console.error('检查器需要 Node.js 18+；未执行检查。可手工按规则复核，不自动安装。');
  process.exitCode = 2;
} else {
  try {
    process.exitCode = runCheck(process.argv.slice(2));
  } catch (error) {
    console.error(`检查未完成：${error.message}`);
    process.exitCode = 2;
  }
}
