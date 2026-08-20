# Capture Failed

Capture failed: Failed to launch the browser process:  Code: null

stderr:
Received signal 11 SEGV_ACCERR 000000000010
 [0x000102e6f690]
 [0x000105830b44]
 [0x000186d39740]
 [0x00010289ceec]
 [0x00010289ceec]
 [0x00010206af2c]
 [0x00010188c8a4]
 [0x0001032bba34]
 [0x0001032bc6e0]
 [0x0001869644e0]
[end of stack trace]

TROUBLESHOOTING: https://pptr.dev/troubleshooting


URL: http://localhost:5173/projects/anovair/

## What to try

- Re-run with a longer timeout: `--timeout 60000`
- The site may block headless browsers (anti-bot protection)
- Try capturing a different page on the same domain
