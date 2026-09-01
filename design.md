# Design & Motion Specification — Interactive Tech Portfolio Archive

> **Purpose:** This document is an implementation-grade design brief for coding agents such as Antigravity, Claude Code, Cursor, Codex, Gemini CLI, or other autonomous frontend agents.
>
> **Goal:** Transform an existing basic folder-based portfolio into a highly polished, tactile, editorial, interactive technology portfolio inspired by the *interaction principles* of physical archives and filing systems—without copying another site's proprietary artwork, copy, or exact implementation.
>
> **Critical instruction:** The existing folder system is the starting point. **Do not replace it with cards, a conventional navbar, a dashboard, or a generic portfolio grid.** Upgrade the existing folder metaphor into a complete interaction system.

---

# 1. Product Concept

The website is a **Digital Project Archive**.

The visitor should feel like they are opening a physical research folder containing a developer's work.

The core interaction loop is:

```text
Archive
  ↓
Browse folders
  ↓
Select project
  ↓
Pull folder forward
  ↓
Open dossier
  ↓
Explore documents / screenshots / architecture / links
  ↓
Close dossier
  ↓
Return to archive
```

The site should feel:

- tactile
- intelligent
- editorial
- technical
- experimental
- premium
- slightly mysterious
- highly intentional

Avoid making it feel:

- SaaS-like
- corporate
- template-like
- overly rounded
- overly glossy
- excessively neon
- overloaded with gradients
- like a conventional developer portfolio

---

# 2. Primary Design Principle

## Every animation must explain an object or state.

Do not add motion merely because it looks impressive.

Bad:

```text
Folder moves because animation looks cool.
```

Good:

```text
Folder moves because the user physically pulls a file forward.
```

Bad:

```text
Screenshot randomly floats.
```

Good:

```text
Screenshot is a loose archival artifact attached to the project dossier.
```

The motion language should communicate:

**materiality + hierarchy + causality + continuity**

---

# 3. Design Vocabulary

Use these names consistently in the codebase.

| Concept | Component / Design Term |
|---|---|
| Main archive | `ArchiveWorkspace` |
| Folder stack | `FolderStack` |
| Individual folder | `ArchiveFolder` |
| Folder tab | `FolderTab` |
| Open folder | `ProjectDossier` |
| Document | `ArchiveDocument` |
| Screenshot | `ProjectArtifact` |
| Architecture diagram | `TechnicalSheet` |
| Paper/photo | `ArchivalSheet` |
| Paperclip | `Paperclip` |
| Metadata | `CatalogueMeta` |
| Project label | `ProjectIndex` |
| Project navigation | `ArchiveNavigator` |
| Background | `ArchiveSurface` |
| Cursor interaction | `ArchiveCursor` |
| Transition layer | `MotionLayer` |
| Drag interaction | `DirectManipulation` |
| Folder opening | `FolderPullForward` |
| Document entrance | `DocumentReveal` |
| Artifact entrance | `ArtifactSettle` |
| Closing | `FolderReturn` |
| Project-to-project navigation | `DossierContinuity` |

---

# 4. Information Architecture

The portfolio should have two major states.

## STATE A — ARCHIVE

The visitor sees the folder system.

```text
┌─────────────────────────────────────────────────────┐
│                                                     │
│  NAME / MONOGRAM                    INDEX / ABOUT   │
│                                                     │
│                                                     │
│                DIGITAL ARCHIVE                      │
│                                                     │
│        ┌─────────────────────────────┐              │
│        │ PROJECT / 01                │              │
│        ├─────────────────────────────┤              │
│        │ PROJECT / 02                │              │
│        ├─────────────────────────────┤              │
│        │ PROJECT / 03                │              │
│        ├─────────────────────────────┤              │
│        │ PROJECT / 04                │              │
│        └─────────────────────────────┘              │
│                                                     │
│                         STATUS / AVAILABLE          │
└─────────────────────────────────────────────────────┘
```

## STATE B — PROJECT DOSSIER

Selecting a folder transforms the same physical object into a project workspace.

```text
┌─────────────────────────────────────────────────────┐
│ BACK / ARCHIVE                         PROJECT 01   │
│                                                     │
│ PROJECT TITLE                                       │
│ ───────────────────────────────────────────────     │
│                                                     │
│ 01 / OVERVIEW                                       │
│                                                     │
│ [ HERO IMAGE / VIDEO / INTERACTIVE PREVIEW ]       │
│                                                     │
│ DESCRIPTION                 STACK                   │
│                                                     │
│ ───────────────────────────────────────────────     │
│                                                     │
│ ARCHITECTURE / PROCESS / RESULTS                    │
│                                                     │
│ [ TECHNICAL SHEETS / IMAGES / NOTES ]              │
└─────────────────────────────────────────────────────┘
```

---

# 5. Visual Direction

## Core aesthetic

Use:

**Editorial archive × modern technology laboratory × physical filing system**

The design should combine:

- archival paper
- technical documentation
- developer tooling
- architectural drawings
- screenshots
- terminal-like metadata
- physical folders
- controlled asymmetry

The site should look like an **engineer's private project archive**, not a museum website.

---

# 6. Color System

Use a restrained palette.

Recommended base:

```css
--ink: #080808;
--paper: #F1ECE4;
--paper-muted: #D8D1C7;
--grey: #96928A;
--line: rgba(8, 8, 8, 0.18);
--white: #F7F5F1;
```

Use a small semantic accent system for projects.

Example:

```css
--accent-red: #B8322B;
--accent-yellow: #D6A91D;
--accent-green: #52665A;
--accent-blue: #334FBE;
--accent-orange: #C56B32;
```

Do not use all accents simultaneously.

Each project gets one primary folder color.

### Color must encode meaning.

Example:

```text
Red     → AI / Experimental
Blue    → Software / Infrastructure
Green   → Sustainability / Systems
Yellow  → Creative / Interactive
Orange  → Hardware / Robotics
```

This is optional. If the project categories do not justify color semantics, use color purely as project identity.

---

# 7. Typography

Use three distinct typographic roles.

## Display

A condensed grotesque or highly characterful sans.

Use for:

- name
- project titles
- section titles
- major statements

Characteristics:

```text
uppercase
large scale
tight tracking
compressed line-height
```

Example:

```css
font-size: clamp(4rem, 10vw, 11rem);
line-height: 0.82;
letter-spacing: -0.05em;
font-weight: 800;
```

## Editorial

A high-quality serif.

Use for:

- project descriptions
- essays
- explanations
- narrative content

## Catalogue

Monospace.

Use for:

- dates
- project IDs
- technologies
- status
- version
- metadata
- coordinates
- small labels

Example:

```text
PROJECT / 04
STATUS / SHIPPED
STACK / NEXT.JS · TYPESCRIPT · POSTGRES
YEAR / 2026
```

---

# 8. Layout System

Do not use a conventional centered max-width portfolio layout everywhere.

Use a responsive editorial grid.

Desktop:

```text
12 columns
```

Tablet:

```text
8 columns
```

Mobile:

```text
4 columns
```

However, allow archival objects to break the grid slightly.

Use:

**structured asymmetry**

not random positioning.

Recommended margins:

```css
--page-margin: clamp(16px, 3vw, 48px);
```

---

# 9. Archive Workspace

The archive background should feel like a physical work surface.

Possible options:

- near-black desk
- warm paper surface
- extremely subtle grain
- faint technical registration marks
- tiny catalogue coordinates

Do not use obvious stock-paper textures.

Texture should be nearly subliminal.

Recommended CSS approach:

```text
background color
+
very subtle procedural noise
+
minimal radial lighting
+
soft material shadow
```

Avoid:

- strong film grain
- fake scratches everywhere
- excessive vignette
- heavy paper texture

---

# 10. Folder Construction

The existing folder system must be preserved.

Improve it structurally.

Each folder consists of:

```text
ArchiveFolder
├── FolderBody
├── FolderTab
├── ProjectIndex
├── FolderShadow
├── FolderTexture
└── FolderContentPreview
```

The folder should have believable physical depth.

Use:

- subtle gradient
- edge highlight
- contact shadow
- tab geometry
- slight texture
- tiny imperfections

Do not make it look like a flat `<div>`.

---

# 11. Folder States

Every folder must have explicit states.

```text
IDLE
HOVER
FOCUS
SELECTED
PULLING
OPENING
OPEN
CLOSING
RETURNING
```

Implement these as state-driven transitions rather than unrelated hover effects.

---

# 12. Folder Motion System

## MOTION 01 — Folder Hover Lift

Name:

`FolderHoverLift`

When the pointer enters:

```text
translateY: -4px to -10px
rotateZ: ±0.5deg
shadow: increase slightly
```

Duration:

```text
220–300ms
```

Purpose:

The folder feels tangible.

Do not overdo scale.

Avoid:

```text
scale(1.1)
```

Prefer:

```text
translate + shadow + tiny rotation
```

---

# 13. MOTION 02 — Folder Pull Forward

Name:

`FolderPullForward`

This is the primary navigation animation.

Sequence:

```text
User selects folder
        ↓
folder rises above stack
        ↓
z-index increases
        ↓
folder translates toward focal position
        ↓
folder slightly rotates into alignment
        ↓
document begins emerging
        ↓
content settles
```

Recommended total duration:

```text
700–1100ms
```

Do not run every property simultaneously.

Use staggered timing.

Example:

```text
0ms      folder begins moving
80ms     depth/shadow changes
150ms    document begins reveal
300ms    content appears
600ms    metadata settles
750ms    final position
```

---

# 14. MOTION 03 — Folder Open

Name:

`FolderOpen`

The folder should feel as if its contents are being exposed.

Do not simply fade to a new page.

Use:

```text
folder geometry
→
expanded document
→
content surface
```

The route transition should preserve visual continuity.

---

# 15. MOTION 04 — Document Reveal

Name:

`DocumentReveal`

The document emerges from inside the folder.

Suggested behavior:

```text
opacity: 0 → 1
translateY: 20px → 0
clip-path: constrained → full
```

Optional:

```text
scale: 0.985 → 1
```

Avoid obvious zoom animations.

---

# 16. MOTION 05 — Artifact Settle

Name:

`ArtifactSettle`

Project screenshots, diagrams, cards, paperclips and technical sheets should not appear simultaneously.

Use staggered entrance.

Example:

```text
Hero
   ↓
metadata
   ↓
description
   ↓
stack
   ↓
screenshots
   ↓
technical artifacts
```

Each object should arrive with a slight delay.

This creates:

**editorial rhythm**

rather than:

**content dump**.

---

# 17. MOTION 06 — Material Inertia

Name:

`MaterialInertia`

Physical-looking objects should slightly overshoot and settle.

Recommended:

```text
duration: 600–900ms
ease: custom / expo-out
```

The overshoot should be tiny.

Think:

**paper settling on a desk**

not:

**rubber bouncing.**

---

# 18. MOTION 07 — Artifact Drag

If the project contains loose documents, screenshots or images, allow direct manipulation where it adds value.

Interaction:

```text
pointerdown
    ↓
object lifts
    ↓
shadow increases
    ↓
object follows pointer
    ↓
pointerup
    ↓
object settles
```

On grab:

```text
scale: 1.015–1.03
rotate: tiny randomized offset
shadow: stronger
z-index: maximum
```

On release:

```text
return to stable rotation
soft settle
```

Important:

**Never make essential information accessible only through dragging.**

Provide a normal scroll/reading path as well.

---

# 19. MOTION 08 — Paperclip Attachment

If a paperclip visually attaches a screenshot to a sheet, its movement should follow the parent object.

The relationship should feel physical.

Use:

```text
parent movement
+
small delayed child movement
```

This is called:

**secondary attached-object motion**

---

# 20. MOTION 09 — Dossier Close

Name:

`FolderReturn`

When closing a project:

```text
project document
     ↓
contracts / shrinks
     ↓
artifacts disappear or fold back
     ↓
folder returns to original stack
     ↓
stack re-establishes depth
```

Avoid:

```text
opacity: 1 → 0
route change
```

That would destroy the physical metaphor.

---

# 21. MOTION 10 — Project-to-Project Transition

Name:

`DossierContinuity`

When the user chooses Next Project:

```text
Current dossier
       ↓
archive context remains
       ↓
current folder exits
       ↓
next folder pulls forward
       ↓
new dossier content reveals
```

The transition should feel like:

**opening another file from the same cabinet**

not:

**loading another webpage.**

---

# 22. Microinteractions

Use subtle microinteractions throughout.

### Cursor

Optional custom cursor:

```text
default
→
archive pointer
→
drag pointer
```

Do not use a giant animated cursor unless it genuinely improves usability.

### Links

A text link can have:

```text
underline grows
+
tiny horizontal movement
```

### Metadata

On hover:

```text
opacity
+
letter-spacing
+
small translation
```

Do not animate everything.

---

# 23. Project Dossier Structure

Every project should follow a consistent editorial structure.

```text
PROJECT DOSSIER

01 — INDEX
Project ID
Year
Status
Category

02 — TITLE
Project name
One-line thesis

03 — HERO
Image / video / interactive demo

04 — OVERVIEW
What it is
Why it exists
What problem it solves

05 — ROLE
My contribution

06 — STACK
Languages
Frameworks
Infrastructure
Tools

07 — ARCHITECTURE
System diagram
Data flow
Technical decisions

08 — PROCESS
Research
Experiments
Iterations

09 — ARTIFACTS
Screenshots
Prototypes
Documents

10 — OUTCOME
Results
Metrics
Lessons

11 — LINKS
Live demo
GitHub
Case study
Documentation

12 — NEXT FILE
Next project
```

---

# 24. Project Hero

The hero should not simply be:

```text
title
subtitle
image
```

Instead:

```text
PROJECT / 07
────────────────────────

BUILDING A PERSONAL
RESEARCH ENGINE

A semantic search system
for technical literature.

[ interactive preview ]

ROLE / FULL-STACK
STATUS / SHIPPED
YEAR / 2026
```

Use hierarchy through typography rather than UI cards.

---

# 25. Technical Stack Display

Do not use pill badges everywhere.

Instead use catalogue formatting:

```text
STACK

FRONTEND
React
Next.js
TypeScript

BACKEND
Node.js
PostgreSQL

INFRASTRUCTURE
Docker
AWS
Redis
```

Or a compact technical index:

```text
01  NEXT.JS
02  TYPESCRIPT
03  POSTGRESQL
04  DOCKER
05  OPENAI API
```

This feels more consistent with the archive metaphor.

---

# 26. Architecture Section

This should be one of the strongest parts of a tech portfolio.

Use:

- system diagrams
- flow diagrams
- annotated screenshots
- API flows
- database relationships
- infrastructure diagrams
- code snippets
- performance charts

Style them like:

**technical sheets**

rather than generic cards.

Each sheet can contain:

```text
TECHNICAL SHEET / 03

SYSTEM ARCHITECTURE

[ diagram ]

REQUEST
  ↓
EDGE
  ↓
API
  ↓
QUEUE
  ↓
WORKER
  ↓
DATABASE
```

---

# 27. Technical Sheet Component

```text
TechnicalSheet
├── SheetHeader
├── SheetNumber
├── SheetTitle
├── Diagram
├── AnnotationLayer
├── Caption
└── SheetFooter
```

Visual details:

- off-white paper
- thin rules
- monospace labels
- tiny coordinate marks
- restrained red/blue annotations

---

# 28. Screenshot Treatment

Never present every screenshot as a standard rounded card.

Use multiple archival treatments:

```text
PinnedScreenshot
ClippedScreenshot
FullSheetScreenshot
FloatingScreenshot
AnnotatedScreenshot
BrowserArtifact
TerminalArtifact
```

Each treatment should have a reason.

---

# 29. Browser Artifact

For web projects, create a physical-looking browser sheet.

Structure:

```text
┌──────────────────────────────────────────┐
│ ● ● ●     project.local                  │
├──────────────────────────────────────────┤
│                                          │
│              WEBSITE                     │
│                                          │
└──────────────────────────────────────────┘
```

Keep browser chrome minimal.

---

# 30. Terminal Artifact

For technical projects, a terminal sheet can show:

```text
$ npm run build

✓ compiled successfully
✓ 142 modules
✓ build completed in 3.82s

STATUS / PASS
```

Do not turn the whole website into a fake terminal.

Use terminal aesthetics only where technically meaningful.

---

# 31. About Section

The About section should feel like an **identity document**.

Include:

```text
NAME
ROLE
LOCATION
CURRENT FOCUS
TECHNOLOGIES
PHILOSOPHY
CONTACT
```

Possible visual metaphor:

- identity sheet
- lab notebook
- personal dossier
- developer manifest

---

# 32. Homepage Hero

Do not use a generic:

> Hi, I'm X. I build digital products.

Instead make the archive itself the hero.

Example:

```text
PRIVATE DIGITAL ARCHIVE

PROJECTS / SYSTEMS / EXPERIMENTS

A collection of things
I have designed, engineered,
broken, rebuilt and shipped.
```

Then let the folders become the main visual object.

---

# 33. Navigation

Keep navigation minimal.

Recommended:

```text
[NAME]                         [INDEX] [ABOUT]
```

Within a project:

```text
[← ARCHIVE]                  [01 / 07]
```

Bottom:

```text
PREVIOUS FILE              NEXT FILE
```

Do not add a large sticky navbar.

---

# 34. Scroll Behavior

Use scroll as an editorial mechanism.

Potential sequence:

```text
hero
  ↓
project introduction
  ↓
large artifact
  ↓
technical explanation
  ↓
architecture
  ↓
process
  ↓
outcome
  ↓
next file
```

Use scroll-triggered reveals sparingly.

Good:

```text
document enters viewport
→
small vertical reveal
→
settle
```

Bad:

```text
every paragraph rotates / scales / flies / fades
```

---

# 35. Scroll Animation Rules

Maximum:

**1 primary scroll animation per visual section.**

Prefer:

```text
opacity
translateY
clip-path
small scale
```

Avoid:

```text
large rotations
3D spins
constant parallax
horizontal scroll everywhere
```

Motion should support reading.

---

# 36. Z-Index Architecture

Define explicit depth layers.

```text
--z-background: 0;
--z-surface: 10;
--z-folder: 20;
--z-active-folder: 30;
--z-document: 40;
--z-artifact: 50;
--z-dragged: 70;
--z-navigation: 100;
--z-modal: 200;
--z-cursor: 500;
```

Do not scatter arbitrary z-index values throughout the application.

---

# 37. Motion Tokens

Create central motion tokens.

```js
const motion = {
  micro: 0.18,
  quick: 0.28,
  standard: 0.45,
  material: 0.7,
  reveal: 0.9,
  cinematic: 1.2,

  ease: {
    standard: "power3.out",
    material: "power4.out",
    reveal: "expo.out",
    soft: "power2.inOut"
  }
};
```

If using GSAP, centralize these values.

If using CSS-only motion, create CSS custom properties.

---

# 38. Reduced Motion

This is mandatory.

If:

```css
@media (prefers-reduced-motion: reduce)
```

then:

- disable large folder travel
- remove parallax
- remove drag inertia
- shorten transitions
- preserve state changes
- preserve visual hierarchy

The website must remain fully usable.

---

# 39. Responsive Behavior

Do not simply shrink desktop.

## Desktop

Use:

- layered folders
- floating artifacts
- drag interactions
- larger spatial composition

## Tablet

Reduce:

- folder overlap
- floating elements
- decorative motion

## Mobile

Prioritize:

- touch
- vertical reading
- clear folder hierarchy
- large hit targets
- minimal overlap

On mobile, the folder metaphor should remain recognizable.

Do not convert folders into generic cards.

---

# 40. Touch Interaction

For touch devices:

```text
tap folder → open
long press → optional lift
drag artifact → direct manipulation
swipe → optional project navigation
```

Never depend on hover.

Every hover interaction needs a touch-equivalent or must remain decorative.

---

# 41. Performance Requirements

This is a highly animated website, so performance is part of the design.

Prefer:

```text
transform
opacity
clip-path
```

Avoid animating:

```text
top
left
width
height
box-shadow excessively
filter excessively
```

Use GPU-friendly properties where possible.

Images:

- use responsive formats
- lazy-load below-the-fold assets
- preload hero assets
- use AVIF/WebP when appropriate
- provide dimensions to avoid layout shift

Target:

```text
60fps interaction
minimal layout shift
fast initial render
```

---

# 42. Animation Architecture

Do not put all animations inside page components.

Use a dedicated motion layer.

Suggested structure:

```text
src/
├── components/
│   ├── archive/
│   ├── dossier/
│   ├── artifacts/
│   └── technical/
│
├── motion/
│   ├── folder.ts
│   ├── dossier.ts
│   ├── artifacts.ts
│   ├── navigation.ts
│   └── tokens.ts
│
├── data/
│   └── projects.ts
│
└── styles/
    ├── tokens.css
    ├── archive.css
    ├── typography.css
    └── motion.css
```

---

# 43. Recommended State Model

Use a single source of truth.

Example:

```ts
type ArchiveState = {
  activeProject: string | null;
  folderState:
    | "idle"
    | "hover"
    | "pulling"
    | "opening"
    | "open"
    | "closing";
  draggedArtifact: string | null;
};
```

Avoid animation state being duplicated across unrelated components.

---

# 44. Data Model

Projects should be data-driven.

Example:

```ts
type Project = {
  id: string;
  index: string;
  title: string;
  year: string;
  category: string;
  color: string;

  summary: string;
  role: string;

  stack: string[];

  hero: {
    type: "image" | "video" | "interactive";
    src: string;
    alt: string;
  };

  architecture?: {
    image?: string;
    description?: string;
  };

  artifacts: Artifact[];

  links: {
    live?: string;
    github?: string;
    documentation?: string;
  };
};
```

This lets the agent generate additional projects without duplicating layout code.

---

# 45. Accessibility

The physical metaphor must never compromise accessibility.

Folders must be:

```html
<button>
```

or accessible interactive elements.

Use:

```text
aria-expanded
aria-label
aria-controls
```

Keyboard:

```text
Tab → navigate folders
Enter / Space → open folder
Escape → close dossier
Arrow keys → optional project navigation
```

Focus should be visible but stylistically integrated.

---

# 46. Anti-Patterns

The coding agent must explicitly avoid:

## Generic portfolio cards

Do not turn projects into:

```text
[IMAGE]
Project Name
Description
View →
```

## Excessive glassmorphism

No:

```text
backdrop-filter
glass cards
neon borders
```

unless a project itself requires it.

## Excessive rounded corners

Avoid modern SaaS styling.

## Excessive gradients

Use material shading, not decorative gradients.

## Scroll-jacking

Do not hijack normal browser scrolling.

## Animation overload

Do not animate every DOM element.

## Fake 3D

Do not use heavy 3D merely to look impressive.

## Gratuitous cursor effects

Cursor effects should remain subtle.

## Overlapping content that becomes unreadable

Physical chaos is acceptable.

Information chaos is not.

---

# 47. Design Quality Checklist

Before declaring the implementation complete, verify:

### Visual

- [ ] Folder system remains the hero
- [ ] Typography has clear hierarchy
- [ ] Color has semantic purpose
- [ ] Surfaces feel physical
- [ ] Shadows are subtle
- [ ] Texture is restrained
- [ ] Layout has controlled asymmetry

### Interaction

- [ ] Folder hover feels tactile
- [ ] Folder pull has physical weight
- [ ] Opening feels continuous
- [ ] Documents reveal progressively
- [ ] Artifacts settle naturally
- [ ] Close animation returns to archive
- [ ] Next/previous maintains continuity
- [ ] Drag interactions feel intentional

### UX

- [ ] No essential information requires animation
- [ ] No essential information requires dragging
- [ ] Keyboard navigation works
- [ ] Touch works
- [ ] Reduced motion works
- [ ] Browser back/forward works

### Performance

- [ ] No major layout shift
- [ ] Images are optimized
- [ ] Animations use transform/opacity where possible
- [ ] No unnecessary continuous animation
- [ ] Mobile performance is acceptable

---

# 48. Agent Implementation Workflow

**Do not attempt the entire website in one pass.**

Work in phases.

## Phase 1 — Audit

Inspect the existing project.

Identify:

- framework
- folder components
- CSS architecture
- routing
- state management
- assets
- fonts
- breakpoints
- existing animation
- existing dependencies

Do not rewrite anything yet.

Output an audit before implementation.

---

## Phase 2 — Preserve

Keep the existing folder architecture.

Refactor only where required.

Do not replace working components merely to change naming.

---

## Phase 3 — Design Tokens

Implement:

- colors
- typography
- spacing
- shadows
- z-index
- motion tokens

Do this before complex animation.

---

## Phase 4 — Folder Motion

Implement and test:

```text
FolderHoverLift
FolderPullForward
FolderOpen
FolderReturn
```

Do not proceed until the folder feels physically believable.

---

## Phase 5 — Dossier

Implement:

```text
ProjectDossier
ArchiveDocument
CatalogueMeta
TechnicalSheet
ProjectArtifact
```

Focus on visual hierarchy first.

---

## Phase 6 — Artifact Motion

Implement:

```text
DocumentReveal
ArtifactSettle
MaterialInertia
PaperclipAttachment
DirectManipulation
```

---

## Phase 7 — Navigation Continuity

Implement:

```text
DossierContinuity
NextProject
PreviousProject
BackToArchive
```

Ensure browser routing remains correct.

---

## Phase 8 — Responsive

Test:

```text
1440px
1280px
1024px
768px
480px
390px
```

Do not simply scale everything.

---

## Phase 9 — Accessibility

Implement:

- keyboard
- focus
- reduced motion
- touch equivalents
- semantic HTML

---

## Phase 10 — Performance

Audit:

- image size
- layout shifts
- animation FPS
- unnecessary re-renders
- loading waterfall

---

# 49. How the Agent Should Reason

When implementing any new element, ask:

### Question 1

**What physical object does this represent?**

### Question 2

**What is its information hierarchy?**

### Question 3

**What should happen when the user touches/interacts with it?**

### Question 4

**What is the physical explanation for that movement?**

### Question 5

**Can the same information be accessed without animation?**

### Question 6

**Does this interaction improve understanding or only decoration?**

If the answer to Question 4 is unclear, reconsider the animation.

---

# 50. Motion Composition Formula

Use this pattern for major transitions:

```text
INTENT
  ↓
PRIMARY OBJECT MOVEMENT
  ↓
DEPTH CHANGE
  ↓
CONTENT REVEAL
  ↓
SECONDARY OBJECT MOVEMENT
  ↓
MICRO SETTLE
```

Example:

```text
click folder
↓
folder pulls forward
↓
shadow/depth increases
↓
document reveals
↓
metadata enters
↓
screenshots settle
↓
final composition stabilizes
```

This produces cinematic motion without requiring excessive effects.

---

# 51. Visual Hierarchy Formula

Every screen should have:

```text
1 Primary focal point
2–3 Secondary objects
Supporting metadata
Background texture
```

Do not give every element equal visual importance.

---

# 52. The "Physical Truth" Rule

Before implementing a visual effect, classify it:

```text
OBJECT
MATERIAL
STATE
ACTION
FEEDBACK
```

Examples:

```text
Folder = OBJECT
Paper = MATERIAL
Open = STATE
Pull = ACTION
Shadow increase = FEEDBACK
```

This prevents random visual effects.

---

# 53. The "Technical Portfolio" Rule

The website should demonstrate both:

**what the developer built**

and:

**how the developer thinks.**

Therefore project pages should expose:

```text
problem
decision
architecture
tradeoff
implementation
result
```

Do not make the portfolio purely visual.

The technical depth is part of the brand.

---

# 54. Recommended Final Experience

The ideal visitor journey:

```text
LAND
 ↓
Immediately understand:
"This is an archive."
 ↓
Notice folders
 ↓
Hover
 ↓
Feel subtle physical response
 ↓
Open a folder
 ↓
See project dossier emerge
 ↓
Explore visual artifact
 ↓
Read technical story
 ↓
Inspect architecture
 ↓
Visit live project
 ↓
Return to archive
 ↓
Open another file
```

The experience should feel **coherent from first frame to final interaction**.

---

# 55. Final Creative Direction

The final implementation should communicate:

> **"This person doesn't just build projects. They investigate systems."**

The visual identity should therefore sit between:

```text
DIGITAL PRODUCT DESIGN
          +
EDITORIAL DESIGN
          +
TECHNICAL DOCUMENTATION
          +
PHYSICAL ARCHIVE
```

The folders are not decoration.

They are the **navigation system**.

The paper is not decoration.

It is the **content surface**.

The metadata is not decoration.

It is the **information architecture**.

The animation is not decoration.

It is the **physical language of the interface**.

---

# 56. Master Agent Prompt

When giving this document to an autonomous coding agent, append the following instruction:

> You are implementing an existing folder-based portfolio. Treat this document as the design and interaction specification.
>
> First inspect the existing codebase and understand the current folder implementation. Do not rewrite the project blindly.
>
> Preserve the existing folder concept and improve it into the Digital Project Archive system described here.
>
> Work incrementally. After each major phase, verify that the application still runs.
>
> Prioritize:
>
> 1. interaction quality
> 2. visual hierarchy
> 3. physical continuity
> 4. typography
> 5. responsive behavior
> 6. accessibility
> 7. performance
>
> Do not copy another website's proprietary assets, text, illustrations, source code, or exact implementation. Use the archival/folder interaction concept as design inspiration and create an original visual identity for this portfolio.
>
> Do not introduce libraries unless they materially improve the implementation. If an animation library already exists, use it consistently rather than adding another.
>
> Do not replace the folder system with cards or a conventional portfolio grid.
>
> Before coding complex motion, create a motion plan describing:
>
> - trigger
> - initial state
> - intermediate state
> - final state
> - duration
> - easing
> - stagger
> - reduced-motion behavior
>
> Every major animation should have a physical or information-architecture justification.
>
> After implementation, perform a visual QA pass at desktop, tablet, and mobile widths.
>
> Fix obvious issues autonomously instead of stopping for minor clarification.
>
> If an existing implementation conflicts with this document, prefer the existing working architecture unless changing it is necessary to achieve the intended experience.
>
> The final result should feel like a premium interactive digital archive for a technically sophisticated developer—not a generic portfolio template.

---

# 57. Recommended Agent Loop

For the smoothest autonomous implementation, use this loop:

```text
AUDIT
  ↓
PLAN
  ↓
IMPLEMENT ONE SYSTEM
  ↓
RUN
  ↓
VISUAL QA
  ↓
FIX
  ↓
NEXT SYSTEM
  ↓
RESPONSIVE QA
  ↓
PERFORMANCE QA
  ↓
FINAL POLISH
```

Do not prompt an agent with:

> "Make this website look amazing."

Instead give it:

```text
DESIGN SYSTEM
+
COMPONENT CONTRACTS
+
MOTION STATES
+
VISUAL REFERENCES
+
IMPLEMENTATION CONSTRAINTS
+
QA CHECKLIST
```

That produces substantially more consistent results.

---

# 58. Optional Advanced Agent Technique — Visual QA Loop

For an autonomous coding agent with browser access, require:

```text
1. Start dev server
2. Open site
3. Capture desktop screenshot
4. Inspect visual hierarchy
5. Capture mobile screenshot
6. Test folder interaction
7. Test project transition
8. Test back navigation
9. Test keyboard
10. Test reduced motion
11. Fix issues
12. Repeat
```

The agent should not consider the task complete merely because:

```text
npm run build
```

passes.

A successful build is **not** a successful design implementation.

---

# 59. Definition of Done

The project is complete only when:

```text
[✓] Archive metaphor is immediately understandable
[✓] Folder interaction feels physical
[✓] Project dossier feels like an extension of the folder
[✓] Typography establishes clear hierarchy
[✓] Technical content feels editorial
[✓] Animations have intentional choreography
[✓] No animation feels gratuitous
[✓] Mobile retains the concept
[✓] Keyboard interaction works
[✓] Reduced motion works
[✓] Images load efficiently
[✓] Browser navigation works
[✓] Project data is reusable
[✓] New projects can be added without rewriting UI
[✓] Visual identity feels original
[✓] Site feels like a premium product, not a template
```

---

# 60. North Star

If the implementation becomes visually complicated, return to this:

> **Open a project the way you would open a physical file. Read it like an editorial document. Explore it like a technical system. Move through it like a digital workspace.**

That is the design language the entire website should follow.
