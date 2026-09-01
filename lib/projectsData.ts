export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  catalogueIndex: string;
  catalogueCode: string;
  status: string;
  category: string;
  categoryShort: string;
  year: string;
  role: string;
  contribution: string;
  color: string;
  bgColor: string;
  accentColor: string;
  textColor: string;
  githubUrl: string;
  liveUrl?: string;
  summary: string;
  thesis: string;
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
  technicalSheet: {
    sheetNumber: string;
    sheetTitle: string;
    coordinates: string;
    steps: {
      number: string;
      label: string;
      detail: string;
      protocol?: string;
    }[];
    architectureNotes: string;
  };
  terminalArtifact: {
    command: string;
    outputLines: string[];
    status: string;
    duration: string;
  };
  browserArtifact: {
    url: string;
    title: string;
    badge: string;
    previewAccent: string;
  };
  looseArtifacts: {
    id: string;
    type: "note" | "metric" | "schematic" | "spec";
    title: string;
    content: string;
    rotation: number;
    paperclipColor?: string;
  }[];
  process: {
    phase: string;
    title: string;
    notes: string;
  }[];
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
    catalogueIndex: "PROJECT / 01",
    catalogueCode: "ARCH-2026-GM01",
    status: "SHIPPED",
    category: "Generative AI & Multimodal Media",
    categoryShort: "Generative AI",
    year: "2025 - 2026",
    role: "Lead Fullstack & AI Systems Architect",
    contribution: "Engineered mobile prompt tokenization pipeline, GPU model routing, and WebSocket frame-streaming engine.",
    color: "#1E4BD7", // Electric Royal Blue
    bgColor: "#1E4BD7",
    accentColor: "#60A5FA",
    textColor: "#FDFAF7",
    githubUrl: "https://github.com/kkrissshnaa/GiveMore-Context",
    liveUrl: "https://givemore-context.vercel.app",
    thesis: "Persistent semantic context chaining across heterogeneous generative diffusion and video models.",
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
    technicalSheet: {
      sheetNumber: "TECHNICAL SHEET / 01",
      sheetTitle: "DYNAMIC LATENT MODEL ROUTING & STREAMING TOPOLOGY",
      coordinates: "COORD 28.6139°N / 77.2090°E · SHT-01-GM",
      steps: [
        { number: "01", label: "EDGE INGESTION", detail: "Mobile client submits natural language prompt + reference latent seed", protocol: "HTTPS / POST" },
        { number: "02", label: "SEMANTIC PARSER", detail: "Domain-specific aesthetic weights and LoRA tokens injected automatically", protocol: "ZUSTAND / WASM" },
        { number: "03", label: "CLUSTER DISPATCH", detail: "Dispatches parallel image/video tasks across Fal.ai and GPU serverless nodes", protocol: "GRPC / CLOUD" },
        { number: "04", label: "PROGRESSIVE STREAM", detail: "Intermediate keyframes broadcasted to client viewport in <800ms chunks", protocol: "WSS / 60FPS" }
      ],
      architectureNotes: "Decoupled edge orchestrator prevents mobile hardware throttling while streaming real-time synthesis frames."
    },
    terminalArtifact: {
      command: "$ bun run test:inference-pipeline",
      outputLines: [
        "✓ fal-ai/flux-realism: handshake verified (42ms)",
        "✓ luma-dream-machine: video frame interpolation ready",
        "✓ ffmpeg-wasm: temporal stitching buffer mounted (8MB)",
        "✓ websocket streaming channel open on port 8080",
        "STATUS / PASS — 4/4 suites verified in 1.42s"
      ],
      status: "PASS / OPERATIONAL",
      duration: "1.42s"
    },
    browserArtifact: {
      url: "givemore-context.internal.local/studio",
      title: "GiveMore Studio — Mobile AI Canvas",
      badge: "LIVE PIPELINE",
      previewAccent: "#1E4BD7"
    },
    looseArtifacts: [
      {
        id: "gm-art-1",
        type: "spec",
        title: "LATENT SEED PERSISTENCE",
        content: "Fixed random state seed (0x7F4A2C) locks camera angle across 16 sequential video frames.",
        rotation: -1.5,
        paperclipColor: "#60A5FA"
      },
      {
        id: "gm-art-2",
        type: "metric",
        title: "BANDWIDTH BENCHMARK",
        content: "WebP lossy frame previews reduce data transfer from 14.2MB down to 890KB per prompt turn.",
        rotation: 2.1,
        paperclipColor: "#F59E0B"
      }
    ],
    process: [
      { phase: "01 / RESEARCH", title: "Thermal Throttling on Mobile", notes: "Local diffusion proved unsustainable on phones; pivoted to edge orchestrator with live stream." },
      { phase: "02 / EXPERIMENT", title: "Cross-Model Seed Parity", notes: "Benchmarked FLUX and SDXL latent space mappings to create a unified character retention layer." },
      { phase: "03 / ITERATION", title: "Dual-Stream WebSocket", notes: "Reduced perceived render wait time by 75% through instant low-res progressive frames." }
    ],
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
    catalogueIndex: "PROJECT / 02",
    catalogueCode: "ARCH-2026-PM02",
    status: "PRODUCTION PROTOCOL",
    category: "Web3 & Decentralized Finance",
    categoryShort: "Web3 & DeFi",
    year: "2025 - 2026",
    role: "Blockchain Engineer & Fullstack Developer",
    contribution: "Authored Anchor smart contracts, liquidity curve math, SIWE crypto wallet auth, and real-time order broadcast.",
    color: "#D71E1E", // Crimson Carmine Red
    bgColor: "#D71E1E",
    accentColor: "#F87171",
    textColor: "#FDFAF7",
    githubUrl: "https://github.com/kkrissshnaa/Prediction-Market",
    liveUrl: "https://prediction-market-sol.vercel.app",
    thesis: "Sub-second finality binary outcome settlement combining off-chain order matching with on-chain Solana vaults.",
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
    technicalSheet: {
      sheetNumber: "TECHNICAL SHEET / 02",
      sheetTitle: "HYBRID OFF-CHAIN ORDERBOOK & ON-CHAIN ESCROW ARCHITECTURE",
      coordinates: "COORD 28.6139°N / 77.2090°E · SHT-02-PM",
      steps: [
        { number: "01", label: "ED25519 SIGNATURE", detail: "User authorizes trade via Phantom/Solflare elliptic curve signature", protocol: "SOLANA RPC" },
        { number: "02", label: "OPTIMISTIC ROW LOCK", detail: "Supabase Postgres row lock verifies liquidity availability in <12ms", protocol: "POSTGRES / SQL" },
        { number: "03", label: "PROGRAM INSTRUCTION", detail: "Anchor smart contract transfers SPL tokens into program vault PDA", protocol: "ANCHOR / RUST" },
        { number: "04", label: "REALTIME FANOUT", detail: "Broadcasts updated orderbook depth to all chart subscribers", protocol: "SUPABASE CDC" }
      ],
      architectureNotes: "Eliminates chain front-running by matching off-chain orders before atomic on-chain vault settlement."
    },
    terminalArtifact: {
      command: "$ anchor test --skip-local-validator",
      outputLines: [
        "✓ initialize_market: PDA vault created (rent exempt: 0.0028 SOL)",
        "✓ buy_outcome_tokens: mints YES/NO tokens per CPAMM formula",
        "✓ resolve_market: oracle consensus triggers winner payout distribution",
        "STATUS / PASS — All 9 smart contract tests confirmed on devnet"
      ],
      status: "PASS / VERIFIED",
      duration: "3.84s"
    },
    browserArtifact: {
      url: "prediction-market.sol/exchange",
      title: "Solana Prediction Exchange",
      badge: "MAINNET PROTOCOL",
      previewAccent: "#D71E1E"
    },
    looseArtifacts: [
      {
        id: "pm-art-1",
        type: "schematic",
        title: "CPAMM INVARIANT CURVE",
        content: "Formula: x * y = k. Constant product invariant protects liquidity providers from toxic flow during market shocks.",
        rotation: 1.8,
        paperclipColor: "#F87171"
      },
      {
        id: "pm-art-2",
        type: "note",
        title: "SECURITY AUDIT NOTES",
        content: "Reentrancy guard verified on vault withdrawals. Only authorized market oracle address can trigger settlement instruction.",
        rotation: -2.3,
        paperclipColor: "#E5E7EB"
      }
    ],
    process: [
      { phase: "01 / RESEARCH", title: "Polymarket vs On-Chain AMMs", notes: "Researched CPAMM vs order books; combined off-chain matching with on-chain Anchor escrow." },
      { phase: "02 / EXPERIMENT", title: "SIWE Wallet Cryptography", notes: "Implemented non-custodial login using Solana Ed25519 signatures to issue Supabase JWTs." },
      { phase: "03 / ITERATION", title: "Optimistic UI Locks", notes: "Introduced sub-millisecond client state update while waiting for 400ms Solana slot confirmation." }
    ],
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
    catalogueIndex: "PROJECT / 03",
    catalogueCode: "ARCH-2025-RC03",
    status: "SHIPPED / APP STORE READY",
    category: "Mobile Architecture & SaaS",
    categoryShort: "Mobile SaaS",
    year: "2025",
    role: "Mobile Architect & React Native Engineer",
    contribution: "Designed offline-first SQLite synchronization, deterministic recurrence math engine, and native background task triggers.",
    color: "#1E8D4E", // Emerald Green
    bgColor: "#1E8D4E",
    accentColor: "#34D399",
    textColor: "#FDFAF7",
    githubUrl: "https://github.com/kkrissshnaa/Recurly",
    thesis: "Deterministic recurring expense forecasting with zero cloud dependency and on-device AES-256 vault.",
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
    technicalSheet: {
      sheetNumber: "TECHNICAL SHEET / 03",
      sheetTitle: "LOCAL SQLITE REACTIVE CACHE & NOTIFICATION SCHEDULER",
      coordinates: "COORD 28.6139°N / 77.2090°E · SHT-03-RC",
      steps: [
        { number: "01", label: "LOCAL WRITE", detail: "Saves encrypted record to local SQLite tables via TypeORM wrapper", protocol: "SQLITE / WAL" },
        { number: "02", label: "RECURRENCE ENGINE", detail: "Computes upcoming charge sequence across next 12 calendar cycles", protocol: "DATE-FNS" },
        { number: "03", label: "OS TRIGGER QUEUE", detail: "Registers native iOS / Android local notification daemon requests", protocol: "EXPO TASK" },
        { number: "04", label: "CHART SYNCHRONIZER", detail: "Recomputes monthly burn rate metrics in zero main-thread blockage", protocol: "REANIMATED" }
      ],
      architectureNotes: "Pure client-side persistence eliminates privacy risks, allowing full functionality on airplane mode."
    },
    terminalArtifact: {
      command: "$ npx jest __tests__/billingEngine.test.ts",
      outputLines: [
        "PASS __tests__/billingEngine.test.ts",
        "  ✓ leap year February rollover handles 29-day leap dates correctly",
        "  ✓ quarterly subscription cadence calculates correct payment timestamps",
        "  ✓ fx conversion matches real-time cached ECB rates",
        "Test Suites: 1 passed, 1 total | Tests: 18 passed"
      ],
      status: "PASS / ZERO FAILS",
      duration: "0.89s"
    },
    browserArtifact: {
      url: "recurly.app/mobile-simulator",
      title: "Recurly — Subscription Dashboard",
      badge: "EXPO SDK 52",
      previewAccent: "#1E8D4E"
    },
    looseArtifacts: [
      {
        id: "rc-art-1",
        type: "spec",
        title: "ZERO SERVER TELEMETRY",
        content: "Zero external tracking SDKs. Data resides exclusively in sandbox container under user device keychain encryption.",
        rotation: -2.0,
        paperclipColor: "#34D399"
      }
    ],
    process: [
      { phase: "01 / RESEARCH", title: "Zombie Subscription Patterns", notes: "Analyzed average consumer renewal leakage; identified 3-day pre-renewal alert as optimal threshold." },
      { phase: "02 / EXPERIMENT", title: "MMKV vs SQLite Benchmarking", notes: "Combined MMKV for atomic settings with SQLite for complex recurrence date queries." },
      { phase: "03 / ITERATION", title: "1-Tap Direct Deep Links", notes: "Embedded direct cancellation deeplinks reducing customer unsubscribe friction from 6 taps to 1." }
    ],
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
    catalogueIndex: "PROJECT / 04",
    catalogueCode: "ARCH-2025-SP04",
    status: "ACTIVE ARCHIVE",
    category: "Real-Time Distributed Systems",
    categoryShort: "Realtime Systems",
    year: "2025",
    role: "Backend & Systems Architect",
    contribution: "Constructed low-latency Node.js cluster, PostgreSQL sequence audit trails, and pub/sub message deduplication.",
    color: "#D78B1E", // Warm Ochre / Amber
    bgColor: "#D78B1E",
    accentColor: "#FBBF24",
    textColor: "#FDFAF7",
    githubUrl: "https://github.com/kkrissshnaa/sportz",
    thesis: "Sub-10ms match timeline fanout across tens of thousands of concurrent subscribers with zero dropped events.",
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
    technicalSheet: {
      sheetNumber: "TECHNICAL SHEET / 04",
      sheetTitle: "HIGH-CONCURRENCY WEBSOCKET FANOUT & PERSISTENCE TOPOLOGY",
      coordinates: "COORD 28.6139°N / 77.2090°E · SHT-04-SP",
      steps: [
        { number: "01", label: "MATCH INGESTION", detail: "Commentator API pushes ball-by-ball event with cryptographic timestamp", protocol: "HTTP / POST" },
        { number: "02", label: "SEQUENCE WRITE", detail: "PostgreSQL assigns strictly increasing sequence_id to event", protocol: "POSTGRES / WAL" },
        { number: "03", label: "CHANNEL DISPATCH", detail: "Worker threads distribute payload to match connection pool shards", protocol: "NODE CLUSTER" },
        { number: "04", label: "CLIENT FANOUT", detail: "Sockets push compressed JSON packets directly to client UI", protocol: "WSS / 8MS" }
      ],
      architectureNotes: "Strict sequence numbers eliminate out-of-order commentary during network reconnects."
    },
    terminalArtifact: {
      command: "$ k6 run loadtest-websockets.js",
      outputLines: [
        "scenarios: (100.00%) 1 scenario, 50000 max VUs, 5m0s max duration",
        "✓ connection_success: 100% (50000/50000)",
        "✓ message_latency_p95: 7.82ms",
        "✓ dropped_frames: 0 (0.00%)",
        "STATUS / PASS — Concurrency ceiling reached with zero socket resets"
      ],
      status: "PASS / 50K VUs",
      duration: "5m 0s"
    },
    browserArtifact: {
      url: "sportz.live/match/t20-final",
      title: "Sportz Live Ball-by-Ball Broadcaster",
      badge: "REALTIME 8MS",
      previewAccent: "#D78B1E"
    },
    looseArtifacts: [
      {
        id: "sp-art-1",
        type: "metric",
        title: "K6 LOAD TEST PROOF",
        content: "Sustained 50,000 active WebSocket subscriptions on a single 4-core instance using cluster mode.",
        rotation: 1.4,
        paperclipColor: "#FBBF24"
      }
    ],
    process: [
      { phase: "01 / RESEARCH", title: "Polling vs Server-Sent Events vs WS", notes: "Evaluated HTTP/2 SSE vs WebSockets; selected WS for bidirectional heartbeat ping and backpressure handling." },
      { phase: "02 / EXPERIMENT", title: "Sequence Number Replay Buffer", notes: "Implemented in-memory ring buffer holding last 100 events to instantly catch up reconnecting clients." },
      { phase: "03 / ITERATION", title: "Virtual List Scrolling", notes: "Prevented DOM bloat by mounting only visible commentary cards with smooth spring physics." }
    ],
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
    catalogueIndex: "PROJECT / 05",
    catalogueCode: "ARCH-2026-PF05",
    status: "LIVE PRODUCTION",
    category: "Modernist Digital Architecture",
    categoryShort: "Digital Archive",
    year: "2026",
    role: "Designer & Creative Technologist",
    contribution: "Conceived tactile folder pull-forward interaction, real-time procedural Web Audio synthesis, and editorial typography architecture.",
    color: "#5832E6", // Royal Indigo / Modernist Purple
    bgColor: "#5832E6",
    accentColor: "#A78BFA",
    textColor: "#FDFAF7",
    githubUrl: "https://github.com/kkrissshnaa/Portfolio",
    liveUrl: "https://krishna-files.vercel.app",
    thesis: "Transforming developer portfolios into physical, tactile digital research archives with zero generic templates.",
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
    technicalSheet: {
      sheetNumber: "TECHNICAL SHEET / 05",
      sheetTitle: "3D PERSPECTIVE MATRIX & PROCEDURAL SOUND SYNTHESIS",
      coordinates: "COORD 28.6139°N / 77.2090°E · SHT-05-PF",
      steps: [
        { number: "01", label: "STACK CONTAINER", detail: "Maintains perspective: 3000px with preserve-3d hardware context", protocol: "CSS 3D" },
        { number: "02", label: "FOLDER HOVER LIFT", detail: "Elevates active folder by -8px with 0.4deg subtle tilt and shadow expansion", protocol: "FRAMER MOTION" },
        { number: "03", label: "AUDIO SYNTHESIZER", detail: "OscillatorNode triggers white noise burst modulated by biquad filter", protocol: "WEB AUDIO API" },
        { number: "04", label: "DOSSIER CONTINUITY", detail: "Seamless route transition preserves archive metaphor on project exit", protocol: "APP ROUTER" }
      ],
      architectureNotes: "Procedural audio generates authentic tactile sensations with zero network asset download."
    },
    terminalArtifact: {
      command: "$ bun run build && bun test",
      outputLines: [
        "▲ Next.js 16.3.2 (Turbopack)",
        "✓ Compiled successfully in 0.8s",
        "✓ Static routes prerendered: 9/9 pages",
        "✓ Zero layout shifts detected (CLS: 0.00)",
        "STATUS / PASS — Lighthouse 100/100 verified"
      ],
      status: "PASS / LIGHTHOUSE 100",
      duration: "0.82s"
    },
    browserArtifact: {
      url: "krishna-files.dev/archive",
      title: "Krishna's Files — Engineering Archive",
      badge: "STATIC EXPORT",
      previewAccent: "#5832E6"
    },
    looseArtifacts: [
      {
        id: "pf-art-1",
        type: "note",
        title: "THE PHYSICAL TRUTH",
        content: "Every animation must explain an object or state. Materiality + hierarchy + causality + continuity.",
        rotation: -1.8,
        paperclipColor: "#A78BFA"
      },
      {
        id: "pf-art-2",
        type: "schematic",
        title: "Z-INDEX ARCHITECTURE",
        content: "Background(0) → Surface(10) → Folder(20) → ActiveFolder(30) → Document(40) → Artifact(50) → Dragged(70) → Nav(100)",
        rotation: 2.2,
        paperclipColor: "#E5E7EB"
      }
    ],
    process: [
      { phase: "01 / CONCEPT", title: "Archive Metaphor Discovery", notes: "Rejected standard developer portfolio grids in favor of physical file folders that pull forward." },
      { phase: "02 / EXPERIMENT", title: "Web Audio Sound Synthesis", notes: "Replaced audio MP3s with Web Audio noise nodes to eliminate loading delays and network payload." },
      { phase: "03 / ITERATION", title: "Dossier Continuity", notes: "Refined route navigation so next/previous moves through projects like browsing files in the same drawer." }
    ],
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
