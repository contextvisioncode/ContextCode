# Homepage Redesign: High-Conversion Bento Grid Layout

## PHASE 1: FEATURE EXTRACTION (Selecting Context)

### TOP 6 TECHNICAL FEATURES → VIRAL HOOKS

1. **XML Context Engine** (Backend: `ingestion.js`)
   - HOOK: "Upload Once. Understand Forever. AI Reads Your Entire Codebase Like a Senior Dev."
   - PROOF: Animated code snippet transforming into structured XML

2. **Gemini 2.5 Flash Integration** (2M token context window)
   - HOOK: "AI That Never Forgets. 2 Million Token Memory = Zero 'Lost in the Middle'."
   - PROOF: Live token counter animation

3. **Neural Graph Visualization** (Auto-generated architecture maps)
   - HOOK: "See the Invisible Architecture. Auto-Generated Dependency Maps in Seconds."
   - PROOF: Mini interactive graph preview

4. **Snippet Mode** (Instant AI analysis without repo)
   - HOOK: "Paste Code. Get Expert Review. No Repo Required."
   - PROOF: Code→Analysis transformation animation

5. **Zero-Retention Security** (Ephemeral containers + encryption)
   - HOOK: "Your IP Never Touches Our Servers. Bank-Grade AES-256 Encryption."
   - PROOF: Security badge with pulse animation

6. **Tactical AI Agents** (Bug Hunter, Performance Analyzer, Code Reviewer)
   - HOOK: "Deploy Specialized AI Agents With One Click. 10x Faster Code Reviews."
   - PROOF: Agent deployment grid

## PHASE 2: BENTO GRID LAYOUT (Writing Context)

```
┌─────────────────────────────────────────────────────┐
│  HERO BLOCK (Compact - No Massive Whitespace)       │
│  "Turn Amateur Prompts into Senior Engineer Code"   │
│  [START ANALYSIS] [Try Snippet Mode]                │
└─────────────────────────────────────────────────────┘

┌──────────────────┬──────────────────┬───────────────┐
│  FEATURE 1:      │  FEATURE 2:      │  FEATURE 3:   │
│  XML Engine      │  2M Token Memory │  Neural Graph │
│  (Animation)     │  (Counter)       │  (Mini Graph) │
├──────────────────┴──────────────────┴───────────────┤
│  FEATURE 4: Snippet Mode (Wide Card w/ Demo)        │
├──────────────────┬──────────────────┬───────────────┤
│  FEATURE 5:      │  STATS BAR                      │
│  Zero-Retention  │  10M+ Lines | 0ms Retention     │
└──────────────────┴──────────────────────────────────┘
```

### CSS Strategy: Compact UI
- Reduce padding: `p-8` → `p-4`
- Use borders/glassmorphism instead of gaps
- Grid layout: `gap-4` (not `gap-8`)
- Hero section height: `h-[60vh]` (not `min-h-screen`)

## PHASE 3: COPYWRITING (Neuro-Sales)

### Before vs After Examples:
❌ **BAD:** "AI-Powered Code Intelligence"
✅ **GOOD:** "Turn Any GitHub Repo Into a Neural Map in 10 Seconds"

❌ **BAD:** "We have security features"
✅ **GOOD:** "Your IP Never Leaves Your Sight. 0ms Data Retention."

❌ **BAD:** "Chat with your codebase"
✅ **GOOD:** "Ask Questions. Get Line-Number Citations. Like Pair Programming With a 10x Engineer."

## PHASE 4: IMPLEMENTATION NOTES

1. **Preserve `<head>`**: Keep all existing meta tags, scripts, fonts
2. **Keep Header**: Sticky header stays intact (ContextVision logo, auth buttons)
3. **Replace Hero**: Remove Aurora background, replace with compact gradient section
4. **Add Bento Grid**: 3-column responsive grid with feature cards
5. **Social Proof Bar**: Compact stats strip (10M+ lines analyzed, 2,847 vulnerabilities found, etc.)
6. **Final CTA**: Single button, no extra whitespace

## BLINK TEST REQUIREMENTS
User should instantly understand:
1. "This analyzes my code with AI" (0-1s)
2. "It's secure and private" (2s)
3. "I can upload a repo OR paste a snippet" (3s)
4. "There are specialized features (graph, agents)" (5s)

## SUCCESS METRICS
- [ ] Zero scrolling needed to understand value
- [ ] 6+ features visible above fold
- [ ] CTA button visible immediately
- [ ] Copywriting is benefit-driven, not feature-listing
- [ ] Design feels "expensive" but dense
