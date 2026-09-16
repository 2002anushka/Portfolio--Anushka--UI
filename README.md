# Anushka Sharma — Production Developer Portfolio Ecosystem

An enterprise-grade personal developer portfolio architected to showcase high-throughput .NET backend engineering, Clean Architecture, and full-stack capabilities across 5 mission-critical commercial platforms.

---

## 🏛️ Architecture Overview (Strictly Mirroring PINPS)

This repository follows the dual-subsystem monorepo structure from the **PINPS** project:

```
D:\Anushka_Portfolio\
│
├── Portfolio_Backend/                # .NET 8 / C# 13 Clean Architecture
│   ├── Portfolio.slnx                # Modern Visual Studio / .NET Solution
│   └── src/
│       ├── Portfolio.Core/           # Domain Entities, Value Objects, Repository Interfaces
│       ├── Portfolio.UseCases/       # CQRS Application Layer (DTOs, Queries, Handlers)
│       ├── Portfolio.Infrastructure/ # Data Access, Persistence, In-Memory Providers
│       └── Portfolio.Web/            # ASP.NET Core Web API, Swagger / OpenAPI, CORS
│
└── Portfolio_UI/                     # React 19 + TypeScript + Vite + Tailwind CSS
    ├── public/
    │   ├── assets/portrait.jpg       # High-res software engineer portrait
    │   ├── resume.html               # 1-Page ATS Printable Resume (Ctrl+P to PDF)
    │   └── favicon.svg               # AS Brand Mark
    └── src/
        ├── app/                      # App root providers & shell
        ├── common/                   # Reusable UI (Badges, TerminalCards, SectionHeadings)
        ├── components/               # Navbar & Footer
        ├── config/                   # portfolioData.ts with all 5 platforms
        ├── features/
        │   ├── hero/                 # High-impact title, live status, quick CTAs
        │   ├── about/                # Bio, portrait, core architectural tenets
        │   ├── projects/             # 5 production platforms with architecture drawer
        │   ├── architecture/         # Interactive Clean Architecture & latency benchmark
        │   ├── experience/           # Intellisoft Technologies timeline & achievements
        │   ├── skills/               # Interactive categorized skills taxonomy
        │   └── contact/              # Live contact form with real-time feedback
        ├── lib/                      # Axios API client with graceful offline fallback
        └── types/                    # Full TypeScript contract interfaces
```

---

## 🚀 How to Run

### Option 1: One-Click Launch (Recommended)
Double-click `start-all.bat` in the root folder. It will:
1. Start the .NET Backend API on `http://localhost:5000` (Swagger UI at `/swagger`)
2. Start the Vite Frontend on `http://localhost:5173`
3. Automatically launch your browser

### Option 2: Run Manually

**Backend (.NET 8):**
```bash
cd Portfolio_Backend\src\Portfolio.Web
"C:\Program Files\dotnet\dotnet.exe" run --urls="http://localhost:5000"
```

**Frontend (React 19 + Vite):**
```bash
cd Portfolio_UI
npm run dev
```

---

## 🌟 5 Key Platforms Showcased

1. **TimeAxis (TimePulse)** — Multi-tenant SaaS time tracking, 4-tier rate precedence engine (Client → Project → Task → Member), Jira synchronization, and HMAC-SHA256 webhooks.
2. **PINPS** — Distributed property scraping pipelines, CQRS pattern, React geospatial map search, and an **84% query latency reduction (7.0s → 1.1s)**.
3. **BarPatrol** — Hospitality inventory intelligence, POS ingestion, Retell AI voice agent integration, and **70% manual data entry reduction**.
4. **GDM (Eco-On-Site)** — IoT sensor telemetry monitoring, automated missed-disposal detection, .NET Aspire, React 19, and Flutter mobile app.
5. **SGDPS** — Community treasury management, field payments with **real-time GPS coordinate logging**, automated PDF receipts, and instant WhatsApp delivery.

---

## 📄 ATS Resume Integration
- A single-page ATS-optimized resume is accessible directly in the UI header and contact section.
- Visitors can view or print directly to an exact 1-page PDF using standard browser printing (`Ctrl + P`).
