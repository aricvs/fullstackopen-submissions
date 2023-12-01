```mermaid
    sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa <br>(updates notes via script previously obtained from server, <br>then sends updated notes to server)
    activate server
```
