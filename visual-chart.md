# Markdown Demo with Mermaid Charts

This demo shows how to use Mermaid diagrams and charts in Markdown. Ensure your Markdown renderer supports Mermaid for these to render.

---

## 1. Flowchart Example

Below is a simple flowchart:

```mermaid
flowchart TD
    A[Start] --> B{Decision?}
    B -->|Yes| C[Task 1]
    B -->|No| D[Task 2]
    C --> E[End]
    D --> E

gantt
    title Project Timeline
    dateFormat  YYYY-MM-DD
    section Planning
      Task 1 :done, des1, 2025-01-01, 2025-01-05
      Task 2 :active, des2, 2025-01-06, 2025-01-10
    section Development
      Task 3 : des3, 2025-01-11, 2025-01-20
      Task 4 : crit, des4, 2025-01-15, 2025-01-25
    section Testing
      Task 5 : des5, 2025-01-21, 2025-01-30

pie
    title Sales Distribution
    "Product A" : 40
    "Product B" : 25
    "Product C" : 35

sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    User->>Frontend: Request Data
    Frontend->>Backend: Fetch Data
    Backend-->>Frontend: Return Data
    Frontend-->>User: Display Data

classDiagram
    class Animal {
        +String name
        +int age
        +makeSound()
    }
    class Dog {
        +String breed
        +bark()
    }
    Animal <|-- Dog
