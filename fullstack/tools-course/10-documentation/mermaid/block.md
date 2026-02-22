```mermaid
graph TD
  Browser --> Backend
  Backend --> Database

  
---

### `mermaid/flow.md`
```md
```mermaid
flowchart TD
  Start --> Login
  Login -->|Valid| Dashboard
  Login -->|Invalid| Error

  