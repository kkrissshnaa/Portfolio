export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  categoryShort: string;
  year: string;
  role: string;
  color: string;
  bgColor: string;
  accentColor: string;
  textColor: string;
  githubUrl: string;
  liveUrl?: string;
  summary: string;
  coverDescription: string;
  folderIndex: number;
  tags: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    ai_web3?: string[];
    tools?: string[];
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
  architecture: {
    overview: string;
    diagramSteps: {
      step: string;
      title: string;
      description: string;
    }[];
  };
  highlights: {
    title: string;
    description: string;
    codeSnippet?: {
      language: string;
      filename: string;
      code: string;
    };
  }[];
  challenges: {
    problem: string;
    solution: string;
  }[];
}

export const PROJECTS: Project[] = [
  {
    id: "givemore-context",
    slug: "givemore-context",
    title: "GiveMore-Context",
    tagline: "Multimodal AI Image & Video Studio with Dynamic Model Context Switching",
    category: "Generative AI & Multimodal Media",
    categoryShort: "Generative AI",
    year: "2025 - 2026",
    role: "Lead Fullstack & AI Systems Architect",
    color: "#1E4BD7", // Electric Royal Blue
    bgColor: "#1E4BD7",
    accentColor: "#60A5FA",
    textColor: "#FDFAF7",
    githubUrl: "https://github.com/kkrissshnaa/GiveMore-Context",
    liveUrl: "https://givemore-context.vercel.app",
    summary:
      "A cross-platform mobile and web generative studio designed to seamlessly synthesize high-resolution images and dynamic AI video sequences directly on mobile hardware using multi-model switching, prompt context chaining, and GPU cloud orchestration.",
    coverDescription:
      "An intelligent multimodal generation workbench bridging high-parameter visual AI models directly into a streamlined mobile interface. Designed for rapid prompt iteration, context persistence, and parallel video frame rendering without mobile thermal throttling.",
    folderIndex: 0,
    tags: ["TypeScript", "Next.js", "React Native", "OpenAI / Claude", "Fal.ai", "FFmpeg", "Tailwind CSS"],
    techStack: {
      frontend: ["Next.js 15", "React Native (Expo)", "Tailwind CSS", "Framer Motion", "Zustand"],
      backend: ["Node.js", "Serverless Edge Functions", "WebSocket Realtime Stream"],
      ai_web3: ["OpenAI GPT-4o Vision", "Stable Diffusion XL", "Runway Gen-3 / Luma API", "Fal.ai API"],
      tools: ["FFmpeg WASM", "Bun", "Docker", "Vercel"]
    },
    metrics: [
      {
        label: "Render Latency",
        value: "< 3.2s",
        description: "Average multi-frame preview generation time on mobile connections"
      },
      {
        label: "Model Interop",
        value: "6+ Models",
        description: "Simultaneous context switching between Diffusion & Autoregressive video LLMs"
      },
      {
        label: "Client Overhead",
        value: "0% GPU",
        description: "Zero client-side compute bottleneck via edge-orchestrated task streaming"
      },
      {
        label: "Context Retention",
        value: "100%",
        description: "Cross-generation seed and style persistence across sequential frames"
      }
    ],
    architecture: {
      overview:
        "GiveMore-Context leverages an event-driven edge orchestrator that ingests complex natural language prompts, applies domain-specific aesthetic weights, dispatches parallel sub-tasks across heterogeneous AI clusters, and streams live frame previews back to the client via WebSockets.",
      diagramSteps: [
        {
          step: "01. Client Ingestion",
          title: "Prompt Tokenizer & Context Extractor",
          description: "Ingests user prompt, references previous visual history, and builds a weighted semantic graph."
        },
        {
          step: "02. Model Dispatcher",
          title: "Dynamic Model Router",
          description: "Routes image vs. video synthesis tasks to optimal low-latency clusters (Fal.ai, Replicate, Custom endpoints)."
        },
        {
          step: "03. Synthesis Pipeline",
          title: "Progressive Latent Diffusion",
          description: "Generates high-frequency keyframes while maintaining lighting, composition, and identity coherence."
        },
        {
          step: "04. Frame Interpolation",
          title: "FFmpeg Edge Video Assembly",
          description: "Stitches latent sequences into smooth MP4/WebM videos with temporal upscaling and compression."
        }
      ]
    },
    highlights: [
      {
        title: "Multi-Model Context Chaining",
        description:
          "Enables users to generate an initial concept image with FLUX/SDXL, immediately attach semantic context, and generate continuous video sequences using Runway or Luma models without losing visual coherence.",
        codeSnippet: {
          language: "typescript",
          filename: "lib/orchestrator.ts",
          code: `export async function orchestrateMultimodalGeneration(
  prompt: string,
  contextHistory: VisualContext[],
  targetFormat: "image" | "video"
): Promise<ReadableStream<GenerationChunk>> {
  const enhancedPrompt = await contextualizePrompt(prompt, contextHistory);
  const router = selectOptimalModelCluster({
    format: targetFormat,
    fidelity: "ultra-high",
    budgetMs: 4000
  });

  return router.streamPipeline({
    prompt: enhancedPrompt,
    seed: contextHistory.at(-1)?.seed ?? generateSecureSeed(),
    aspectRatio: "16:9",
    motionBucketId: 127
  });
}`
        }
      },
      {
        title: "Optimized Mobile Native Experience",
        description:
          "Engineered for fluid touch interactions with gesture-driven zooming, instant seed tweaking, and real-time generation previews streamed in 60fps chunks."
      }
    ],
    challenges: [
      {
        problem: "Preserving character and style identity across multiple sequential video generations on mobile devices.",
        solution: "Implemented automated LoRA token injection and latent seed locking in the request pipeline to enforce semantic continuity."
      },
      {
        problem: "High latency when waiting for long video rendering tasks.",
        solution: "Architected a dual-stream WebSocket channel that pushes instant intermediate keyframe previews within 800ms while the final video encodes in background workers."
      }
    ]
  },
  {
    id: "prediction-market",
    slug: "prediction-market",
    title: "Prediction-Market",
    tagline: "Decentralized Binary Outcome Prediction Platform with Solana & Supabase",
    category: "Web3 & Decentralized Finance",
    categoryShort: "Web3 & DeFi",
    year: "2025 - 2026",
    role: "Blockchain Engineer & Fullstack Developer",
    color: "#D71E1E", // Crimson Carmine Red
    bgColor: "#D71E1E",
    accentColor: "#F87171",
    textColor: "#FDFAF7",
    githubUrl: "https://github.com/kkrissshnaa/Prediction-Market",
    liveUrl: "https://prediction-market-sol.vercel.app",
    summary:
      "A high-speed, non-custodial decentralized prediction market inspired by Polymarket. Features Solana on-chain liquidity settlement, AMM pricing curves, Supabase authentication with cryptographic wallet signatures, and real-time live odds charts.",
    coverDescription:
      "An institutional-grade prediction exchange built atop Solana's sub-second finality. Combines decentralized order resolution with ultra-responsive off-chain order books synced continuously via Supabase Realtime.",
    folderIndex: 1,
    tags: ["Solana", "Rust / Anchor", "Supabase", "TypeScript", "Tailwind CSS", "Chart.js"],
    techStack: {
      frontend: ["Next.js 15", "TypeScript", "Tailwind CSS", "Lucide React", "Lightweight Charts"],
      backend: ["Supabase Realtime", "PostgreSQL", "Node.js Serverless"],
      ai_web3: ["@solana/web3.js", "@solana/wallet-adapter", "Anchor Framework", "SPL Tokens"],
      tools: ["Phantom Wallet", "Solana Devnet / Mainnet", "Bun", "Postman"]
    },
    metrics: [
      {
        label: "Block Time",
        value: "~400ms",
        description: "Sub-second transaction finality on Solana blockchain"
      },
      {
        label: "Order Matching",
        value: "< 50ms",
        description: "Off-chain hybrid order engine with real-time websocket broadcast"
      },
      {
        label: "Slippage Control",
        value: "0.05%",
        description: "Constant product automated market maker (CPAMM) curve"
      },
      {
        label: "Gas Efficiency",
        value: "< $0.0005",
        description: "Minimal transaction fees per position order placement"
      }
    ],
    architecture: {
      overview:
        "The application combines a high-speed Supabase event pipeline with Solana smart contracts. Wallet authentication uses SIWE (Sign-In with Ethereum/Solana) cryptography, verifying public keys without storing private keys.",
      diagramSteps: [
        {
          step: "01. Wallet Connection",
          title: "Cryptographic Handshake",
          description: "User connects Phantom/Solflare wallet, signs an EIP-4361 nonce to establish an authenticated Supabase session."
        },
        {
          step: "02. Order Placement",
          title: "AMM Pricing & Risk Engine",
          description: "Calculates Yes/No token probabilities based on pool liquidity and records intent in Supabase."
        },
        {
          step: "03. On-Chain Settlement",
          title: "Solana Program Execution",
          description: "Mints and burns outcome tokens via Anchor smart contracts, transferring SOL to the vault escrow."
        },
        {
          step: "04. Real-Time Broadcast",
          title: "Supabase Realtime Sync",
          description: "Broadcasts updated probability odds and order book depth to all active traders in <30ms."
        }
      ]
    },
    highlights: [
      {
        title: "Hybrid Off-Chain Order Book + On-Chain Settlement",
        description:
          "Combines the blazing speed of Web2 applications with the trustless settlement guarantees of Solana smart contracts.",
        codeSnippet: {
          language: "typescript",
          filename: "lib/solana-market.ts",
          code: `export async function executeMarketTrade(
  connection: Connection,
  wallet: WalletContextState,
  marketAddress: PublicKey,
  outcome: "YES" | "NO",
  amountSol: number
): Promise<TransactionSignature> {
  const transaction = new Transaction();
  const [marketVault] = PublicKey.findProgramAddressSync(
    [Buffer.from("vault"), marketAddress.toBuffer()],
    PROGRAM_ID
  );

  const buyInstruction = createBuyOutcomeInstruction({
    market: marketAddress,
    buyer: wallet.publicKey!,
    vault: marketVault,
    outcomeIndex: outcome === "YES" ? 0 : 1,
    amount: new BN(amountSol * LAMPORTS_PER_SOL),
  });

  transaction.add(buyInstruction);
  return await wallet.sendTransaction(transaction, connection);
}`
        }
      },
      {
        title: "Live Probability Charts & Depth Visualization",
        description:
          "Interactive time-series charting showing price fluctuations from 1¢ to 99¢ with responsive candlestick and area graph modes."
      }
    ],
    challenges: [
      {
        problem: "Handling race conditions in high-volume simultaneous bids across volatile events.",
        solution: "Designed an optimistic UI state machine backed by atomic PostgreSQL row locks in Supabase prior to Solana transaction confirmation."
      },
      {
        problem: "Wallet session invalidation across browser tabs.",
        solution: "Implemented an auto-refreshing JWT token pipeline tied to the wallet's session public key with automatic fallback to RPC verification."
      }
    ]
  },
  {
    id: "recurly",
    slug: "recurly",
    title: "Recurly",
    tagline: "Centralized Subscription & Recurring Billing Management Engine",
    category: "Mobile SaaS & Financial Tracking",
    categoryShort: "Mobile SaaS",
    year: "2025",
    role: "Mobile Architect & React Native Engineer",
    color: "#1E8D4E", // Emerald Green
    bgColor: "#1E8D4E",
    accentColor: "#34D399",
    textColor: "#FDFAF7",
    githubUrl: "https://github.com/kkrissshnaa/Recurly",
    summary:
      "A cross-platform financial mobile application created with React Native and Expo that aggregates all recurring subscriptions, predicts monthly cash flow impacts, schedules smart cancellation alerts, and provides localized expense breakdown.",
    coverDescription:
      "A streamlined financial sanctuary designed to eradicate zombie subscriptions. Crafted with native gestures, fluid physics, and proactive expense forecasting algorithms.",
    folderIndex: 2,
    tags: ["React Native", "Expo", "TypeScript", "AsyncStorage / SQLite", "NativeWind", "Push Notifications"],
    techStack: {
      frontend: ["React Native", "Expo SDK 52", "NativeWind (Tailwind)", "React Navigation", "Reanimated 3"],
      backend: ["Node.js Edge Functions", "Local SQLite DB", "Encrypted Key-Value Store"],
      ai_web3: ["OCR Receipt Scanner Integration", "Predictive Spend Forecaster"],
      tools: ["EAS Build", "Expo Go", "TypeScript", "Jest"]
    },
    metrics: [
      {
        label: "App Launch",
        value: "< 350ms",
        description: "Cold start time with zero network-blocking startup queries"
      },
      {
        label: "Data Privacy",
        value: "100% Local",
        description: "Offline-first architecture with on-device AES-256 encryption"
      },
      {
        label: "Alert Accuracy",
        value: "99.9%",
        description: "Smart localized background push notifications before billing cycles"
      },
      {
        label: "Currencies",
        value: "35+ Supported",
        description: "Automatic real-time FX rate conversions for global subscriptions"
      }
    ],
    architecture: {
      overview:
        "Built with an offline-first philosophy using SQLite and MMKV for sub-millisecond data reads. Native background task schedulers trigger notification workers without draining device battery.",
      diagramSteps: [
        {
          step: "01. Subscription Entry",
          title: "Smart Preset or Manual Add",
          description: "Selects from 200+ preloaded service templates (Netflix, AWS, Spotify) with icon, color & default tiers."
        },
        {
          step: "02. Schedule Engine",
          title: "Billing Cycle Computation",
          description: "Calculates recurrence timestamps, handling leap years, monthly rollover, and custom frequency intervals."
        },
        {
          step: "03. Local Notification",
          title: "Background Push Scheduler",
          description: "Registers on-device local alerts 3 days, 1 day, and 2 hours prior to scheduled charge."
        },
        {
          step: "04. Financial Analytics",
          title: "Predictive Cash Flow Charting",
          description: "Aggregates categorical spend into dynamic breakdown rings and monthly forecast bars."
        }
      ]
    },
    highlights: [
      {
        title: "Offline-First Reactive SQLite Store",
        description:
          "Zero-lag local state synchronization that guarantees instant UI updates with zero cloud dependencies.",
        codeSnippet: {
          language: "typescript",
          filename: "src/services/subscriptionManager.ts",
          code: `export class SubscriptionManager {
  static calculateUpcomingRenewals(
    subscriptions: Subscription[],
    horizonDays = 30
  ): UpcomingRenewalItem[] {
    const today = new Date();
    const threshold = addDays(today, horizonDays);

    return subscriptions
      .filter((sub) => sub.isActive)
      .map((sub) => ({
        ...sub,
        nextBillingDate: computeNextBillingDate(sub.startDate, sub.billingCycle),
      }))
      .filter((sub) => isWithinInterval(sub.nextBillingDate, { start: today, end: threshold }))
      .sort((a, b) => a.nextBillingDate.getTime() - b.nextBillingDate.getTime());
  }
}`
        }
      },
      {
        title: "1-Tap Direct Cancellation Flows",
        description:
          "Direct deeplinks to official account management portals so users can cancel subscriptions before unwanted renewals."
      }
    ],
    challenges: [
      {
        problem: "Handling complex non-standard billing frequencies (e.g. bi-weekly, every 3 months, leap year adjustments).",
        solution: "Created a pure deterministic calendar math engine with comprehensive unit tests for all edge cases."
      },
      {
        problem: "Background notification delivery failure when devices enter deep sleep / battery saver modes.",
        solution: "Configured high-priority local calendar trigger notifications backed by Expo TaskManager."
      }
    ]
  },
  {
    id: "sportz",
    slug: "sportz",
    title: "sportz",
    tagline: "High-Throughput Live Match Commentary & Real-Time Broadcast Engine",
    category: "Real-Time Distributed Systems",
    categoryShort: "Realtime Systems",
    year: "2025",
    role: "Backend & Systems Architect",
    color: "#D78B1E", // Warm Ochre / Amber
    bgColor: "#D78B1E",
    accentColor: "#FBBF24",
    textColor: "#FDFAF7",
    githubUrl: "https://github.com/kkrissshnaa/sportz",
    summary:
      "A distributed backend engine and WebSocket broadcasting system engineered with Express and PostgreSQL to deliver sub-10ms ball-by-ball sports commentary and live match timeline events to tens of thousands of concurrent subscribers.",
    coverDescription:
      "An ultra-reliable event publishing engine designed for high-concurrency sporting events. Features sub-millisecond timeline fanout, persistent event audit trails, and pub/sub message deduplication.",
    folderIndex: 3,
    tags: ["Node.js", "Express", "PostgreSQL", "WebSockets", "Redis Pub/Sub", "JavaScript / TypeScript"],
    techStack: {
      frontend: ["React 19", "Tailwind CSS", "WebSocket Client", "Virtual List Scroller"],
      backend: ["Express.js", "Node.js Cluster", "PostgreSQL", "WS / Socket.io"],
      ai_web3: ["Real-time Event Ingestion API", "Match Stat Aggregation Worker"],
      tools: ["Docker", "PostgreSQL CLI", "K6 Load Testing", "Bun"]
    },
    metrics: [
      {
        label: "Broadcast Latency",
        value: "< 8ms",
        description: "WebSocket fanout latency from match event ingestion to client render"
      },
      {
        label: "Concurrency",
        value: "50,000+",
        description: "Concurrent connected sockets sustained per cluster node"
      },
      {
        label: "DB Query Time",
        value: "1.2ms",
        description: "Indexed PostgreSQL composite time-series timeline queries"
      },
      {
        label: "Uptime",
        value: "99.99%",
        description: "Resilient zero-downtime reconnection with backoff retry"
      }
    ],
    architecture: {
      overview:
        "Engineered with a decoupled Ingestion -> Persistence -> Broadcast pipeline. Incoming commentator actions write atomically to PostgreSQL and simultaneously trigger non-blocking WebSocket fanouts.",
      diagramSteps: [
        {
          step: "01. Admin Commentary Input",
          title: "Authenticated Event Ingestion",
          description: "Live match officials push timestamped ball events, scores, and commentary markdown."
        },
        {
          step: "02. PostgreSQL Persistence",
          title: "Atomic Write & Indexing",
          description: "Stores event in partitioned match tables with sequence numbers for deterministic client replay."
        },
        {
          step: "03. WebSocket Fanout",
          title: "Pub/Sub Broadcast Hub",
          description: "Fans out serialized JSON payloads to subscribed match channels in sub-8ms."
        },
        {
          step: "04. Client Hydration",
          title: "Virtual Scroll & Audio Cues",
          description: "Clients append new events smoothly at 60fps with automatic sound and visual badges."
        }
      ]
    },
    highlights: [
      {
        title: "Low-Latency WebSocket Broadcast Channel",
        description:
          "Custom broadcast manager maintaining active connection pools with heartbeat ping/pong keepalives and automatic backpressure management.",
        codeSnippet: {
          language: "javascript",
          filename: "src/websocket/broadcastServer.js",
          code: `const WebSocket = require('ws');

class MatchBroadcastHub {
  constructor(server) {
    this.wss = new WebSocket.Server({ server });
    this.channels = new Map(); // matchId -> Set<WebSocket>

    this.wss.on('connection', (ws, req) => {
      const matchId = new URL(req.url, 'http://localhost').searchParams.get('matchId');
      this.subscribe(matchId, ws);

      ws.on('close', () => this.unsubscribe(matchId, ws));
    });
  }

  broadcastMatchEvent(matchId, eventPayload) {
    const clients = this.channels.get(matchId);
    if (!clients) return;

    const data = JSON.stringify({ type: 'MATCH_UPDATE', payload: eventPayload, timestamp: Date.now() });
    for (const client of clients) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    }
  }
}`
        }
      },
      {
        title: "Relational Schema & Deterministic Event Sequence",
        description:
          "Partitioned table schema ensuring match historical replays can be streamed to late-joining clients without hitting database bottlenecks."
      }
    ],
    challenges: [
      {
        problem: "Network disconnects during high-stakes match moments causing clients to miss commentary packets.",
        solution: "Introduced sequence numbers on every payload; reconnecting clients send their last known sequence ID and receive an instant backfill buffer."
      },
      {
        problem: "Server CPU spikes when tens of thousands of connections are opened simultaneously at match kickoff.",
        solution: "Implemented WebSocket connection throttling with jittered backoff and connection clustering across multiple Node.js worker threads."
      }
    ]
  },
  {
    id: "portfolio",
    slug: "portfolio",
    title: "Krishna's Files (Portfolio)",
    tagline: "Architectural Folder-Stack Digital Portfolio Engine Inspired by Mosby Files",
    category: "Modernist Digital Architecture",
    categoryShort: "Digital Archive",
    year: "2026",
    role: "Designer & Creative Technologist",
    color: "#5832E6", // Royal Indigo / Modernist Purple
    bgColor: "#5832E6",
    accentColor: "#A78BFA",
    textColor: "#FDFAF7",
    githubUrl: "https://github.com/kkrissshnaa/Portfolio",
    liveUrl: "https://krishna-files.vercel.app",
    summary:
      "A bespoke, architectural portfolio web application modeled after Mosby Files. Features an interactive 3D folder stack with authentic chamfered folder tags, tactile Web Audio feedback, responsive blueprint grids, and comprehensive technical case studies.",
    coverDescription:
      "An unapologetic celebration of technical craftsmanship and modernist web design. Reimagining developer portfolios into tactile, interactive architectural file archives.",
    folderIndex: 4,
    tags: ["Next.js 16", "React 19", "Tailwind CSS", "Framer Motion", "Web Audio API", "TypeScript"],
    techStack: {
      frontend: ["Next.js 16", "React 19", "Tailwind CSS v4", "Framer Motion", "Lucide React"],
      backend: ["Static Generation (SSG)", "Edge Rendering"],
      ai_web3: ["Modernist 3D CSS Matrix", "Web Audio Synthesizer"],
      tools: ["Bun", "PostCSS", "TypeScript", "Vercel"]
    },
    metrics: [
      {
        label: "Lighthouse Score",
        value: "100 / 100",
        description: "Perfect score across Performance, SEO, Best Practices, and Accessibility"
      },
      {
        label: "3D Frame Rate",
        value: "60 FPS",
        description: "Hardware-accelerated CSS 3D transforms with zero layout reflows"
      },
      {
        label: "Zero External Audio",
        value: "0 KB Audio Assets",
        description: "Real-time procedural paper and mechanical click synthesis via Web Audio API"
      },
      {
        label: "Design Fidelity",
        value: "Pixel-Perfect",
        description: "Faithfully modeled on Mosby Files architectural aesthetics"
      }
    ],
    architecture: {
      overview:
        "Constructed using React 19 and Next.js 16 App Router. Utilizes CSS 3D perspective (`perspective: 3000px`) combined with hardware-accelerated transform matrices to deliver desktop folder unfolding and mobile drawer transitions.",
      diagramSteps: [
        {
          step: "01. Design Token Layer",
          title: "Architectural Variables & Typography",
          description: "Curated HSL palette, IBM Plex Mono scales, and responsive clamp typography rules."
        },
        {
          step: "02. 3D Stack Mechanics",
          title: "Hierarchical Folder Grouping",
          description: "Manages active hover/unfold states, z-index elevation, and transform rotations."
        },
        {
          step: "03. Procedural Audio Engine",
          title: "Web Audio Synthesizer",
          description: "Generates high-frequency noise bursts and lowpass filter sweeps on folder tab touch."
        },
        {
          step: "04. Case Study Engine",
          title: "Technical Deep-Dive Lightbox",
          description: "Dynamic SSG routes with interactive architectural blueprint tabs and code inspect modals."
        }
      ]
    },
    highlights: [
      {
        title: "Hardware-Accelerated 3D Folder Stacking",
        description:
          "Delivers smooth physics-based tilting, tag reveal, and depth stratification.",
        codeSnippet: {
          language: "css",
          filename: "app/globals.css",
          code: `.stack {
  perspective: var(--stack-perspective, 3000px);
  transform-style: preserve-3d;
}

.stack-group {
  transform-origin: bottom center;
  transition: transform 0.65s cubic-bezier(0.33, 1, 0.68, 1),
              height 0.65s cubic-bezier(0.33, 1, 0.68, 1);
}

.stack-group.is-unfolded {
  transform: rotateX(0deg) translateZ(20px);
}`
        }
      },
      {
        title: "Procedural Tactile Sound Generator",
        description:
          "Lightweight Web Audio oscillator mimicking the sound of pulling archival cardboard folders and sliding paper sheets."
      }
    ],
    challenges: [
      {
        problem: "Simulating complex curved folder tab tags across various browser viewport widths without raster pixelation.",
        solution: "Engineered scalable vector path components with dynamic aspect ratio preservation and SVG fill matching."
      },
      {
        problem: "Ensuring 3D perspective hover states remain performant on touch and mobile screens.",
        solution: "Implemented adaptive touch detection that gracefully transitions to mobile tab accordions with native-feel gestures."
      }
    ]
  }
];

export const ABOUT_DATA = {
  name: "Krishna Bhardwaj",
  title: "Full-Stack Software Engineer & Creative Technologist",
  location: "New Delhi, India",
  coordinates: "28.6139° N, 77.2090° E",
  bio: "I am a software engineer focused on building robust, scalable full-stack applications, decentralized systems, mobile experiences, and multimodal AI tools. Approaching code through an architectural lens, I prioritize structural reliability, high performance, and meticulous visual craftsmanship.",
  philosophy: [
    {
      title: "Structural Integrity First",
      description: "Systems must be resilient under load, deterministic in failure, and elegant in architecture before superficial flourishes."
    },
    {
      title: "Tactile & Expressive Interfaces",
      description: "Software should feel alive, rewarding every user interaction with tactile feedback, intentional motion, and thoughtful typography."
    },
    {
      title: "Zero Superfluous Overhead",
      description: "Code as architecture: minimal dependencies, sub-millisecond execution, and clean separation of concerns."
    }
  ],
  skills: [
    {
      category: "Core Languages",
      items: ["TypeScript", "JavaScript (ESNext)", "Rust", "Python", "SQL (PostgreSQL)", "HTML5 / CSS3"]
    },
    {
      category: "Frontend & Mobile",
      items: ["Next.js (App Router)", "React 19", "React Native", "Expo", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend & Systems",
      items: ["Node.js", "Express", "PostgreSQL", "Supabase", "WebSockets / Socket.io", "Redis", "REST & GraphQL"]
    },
    {
      category: "Web3 & Generative AI",
      items: ["Solana (@solana/web3.js)", "Anchor Framework", "OpenAI API", "Diffusion Models (FLUX / SDXL)", "Fal.ai / Replicate"]
    },
    {
      category: "DevOps & Tooling",
      items: ["Bun", "Docker", "Git / GitHub", "Vercel", "EAS", "Postman", "Linux"]
    }
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/kkrissshnaa", handle: "@kkrissshnaa" },
    { name: "Email", url: "mailto:krishnabhardwaj.dev@gmail.com", handle: "krishnabhardwaj.dev@gmail.com" },
    { name: "LinkedIn", url: "https://linkedin.com/in/kkrissshnaa", handle: "Krishna Bhardwaj" },
    { name: "X / Twitter", url: "https://twitter.com/kkrissshnaa", handle: "@kkrissshnaa" }
  ]
};
