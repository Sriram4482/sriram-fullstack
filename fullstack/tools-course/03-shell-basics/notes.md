## Safety Notes

### Why `rm -rf` is dangerous
`rm -rf` deletes files and folders permanently without confirmation. A small mistake in the path can erase critical data, including system files.

### Why unnecessary `sudo` is risky
Using `sudo` gives commands full system access. Running the wrong command with sudo can damage the system or compromise security.

## Mini Data Playground

- Total lines: 60
- Lines containing ERROR: 60
- First 5 lines: checked using head
- Last 5 lines: checked using tail

Commands used:
- wc -l
- grep
- head
- tail