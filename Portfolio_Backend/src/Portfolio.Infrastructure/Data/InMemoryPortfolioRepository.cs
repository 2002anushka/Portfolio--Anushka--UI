using System.Collections.Concurrent;
using Portfolio.Core.Entities;
using Portfolio.Core.Interfaces;

namespace Portfolio.Infrastructure.Data;

public class InMemoryPortfolioRepository : IPortfolioRepository
{
    private readonly List<ProjectItem> _projects;
    private readonly List<SkillCategory> _skills;
    private readonly List<WorkExperience> _experience;
    private readonly ConcurrentBag<ContactInquiry> _inquiries = new();

    public InMemoryPortfolioRepository()
    {
        _projects = new List<ProjectItem>
        {
            new()
            {
                Id = "pinps",
                Number = "01",
                Name = "PINPS",
                Subtitle = "Property Intelligence & Distributed Web Scraping Platform",
                Category = "PROPERTY INTELLIGENCE",
                Status = "PRODUCTION",
                Summary = "A high-performance property discovery and market intelligence platform that aggregates, cleanses, and indexes large-scale rental housing listings (PadSplit) with an interactive Google Maps geospatial interface.",
                ArchitectureHighlights = new List<string>
                {
                    "Implemented distributed web scraping pipelines to extract, validate, deduplicate, and persist rental property and room-level records into SQL Server.",
                    "Applied CQRS with MediatR to decouple query workloads from ingestion pipelines, dramatically reducing database contention.",
                    "Optimized query execution plans, missing non-clustered indexes, and caching layers, slashing page-load times by 84%.",
                    "Developed reactive React.js frontend features including dynamic geospatial Google Maps search, faceted multi-attribute filters, and custom lead acquisition workflows."
                },
                KeyOutcomes = new List<string>
                {
                    "Slashed average property search page-load latency from ~7.0s down to 1.1s (84% improvement).",
                    "Automated background scraping workers processing thousands of property rooms continuously.",
                    "Delivered full-stack geospatial Google Maps search experience with high user engagement."
                },
                Metrics = new List<ProjectMetric>
                {
                    new() { Label = "Query Latency", Value = "7.0s → 1.1s (-84%)" },
                    new() { Label = "Architecture", Value = "CQRS + MediatR" },
                    new() { Label = "Frontend", Value = "React + Google Maps" }
                },
                TechStack = new List<string>
                {
                    "ASP.NET Core", ".NET Aspire", "CQRS / MediatR", "EF Core", "SQL Server", "React.js", "Google Maps API", "Tailwind CSS"
                }
            },
            new()
            {
                Id = "barpatrol",
                Number = "02",
                Name = "BarPatrol",
                Subtitle = "Hospitality Inventory Intelligence & POS Integration Platform",
                Category = "HOSPITALITY & POS",
                Status = "PRODUCTION",
                Summary = "An enterprise inventory management and cost control platform serving bars, restaurants, and hospitality groups, featuring automated invoice extraction, POS synchronization (Square, Lightspeed, Clover), and Cloudflare security.",
                ArchitectureHighlights = new List<string>
                {
                    "Architected backend integration pipelines syncing Point-of-Sale (POS) systems including Square, Lightspeed, and Clover to automate sales depletion logs and eliminate manual reconciliation.",
                    "Developed high-throughput bulk inventory upload pipelines and engineered mobile app AI invoice extraction features (currently in development).",
                    "Re-engineered legacy inventory variance calculation algorithms to resolve discrepancies caused by multi-location timezones and historic depletion logs.",
                    "Hardened platform security by implementing Cloudflare CAPTCHA verification combined with ASP.NET Core IP/endpoint rate limiting, JWT Bearer authentication, and claims-based RBAC."
                },
                KeyOutcomes = new List<string>
                {
                    "Eliminated manual sales reconciliations by connecting POS APIs for Square, Lightspeed, and Clover.",
                    "Protected backend endpoints against bot abuse and brute-force traffic via Cloudflare CAPTCHA and rate limiters.",
                    "Reduced manual inventory onboarding effort by ~70% via bulk uploads and AI invoice extraction workflows."
                },
                Metrics = new List<ProjectMetric>
                {
                    new() { Label = "POS Integrations", Value = "Square, Lightspeed, Clover" },
                    new() { Label = "Perimeter Defense", Value = "Cloudflare CAPTCHA + Rate Limiting" },
                    new() { Label = "Mobile AI", Value = "AI Invoice Extraction (In-Progress)" }
                },
                TechStack = new List<string>
                {
                    "ASP.NET Core Web API", "Clean Architecture", "EF Core", "SQL Server", "Square / Lightspeed / Clover APIs", "Cloudflare Turnstile", "API Rate Limiting", "JWT Bearer & RBAC", "Azure App Services", "Swagger"
                }
            },
            new()
            {
                Id = "gdm-eco-on-site",
                Number = "03",
                Name = "GDM (Eco-On-Site)",
                Subtitle = "Smart Waste & IoT Sensor Telemetry Monitoring Platform",
                Category = "IOT & TELEMETRY",
                Status = "PRODUCTION",
                Summary = "A real-time IoT waste management and telemetry platform capturing live data directly from physical bin sensors and devices via webhooks, providing operational dashboards, threshold alerts, and mobile monitoring.",
                ArchitectureHighlights = new List<string>
                {
                    "Engineered resilient webhook ingestion endpoints to receive and parse high-frequency live telemetry payloads emitted by physical IoT devices and smart bin sensors.",
                    "Architected microservice backend with FastEndpoints and MediatR to process sensor heartbeats, battery health, and container fill levels in real time.",
                    "Implemented automated collection scheduling logic and missed-disposal detection algorithms with automated MailKit alert triggers.",
                    "Contributed to both the React 19 / TypeScript administration portal (live sensor telemetry tables & charts) and the companion Flutter mobile app (eco_on_site)."
                },
                KeyOutcomes = new List<string>
                {
                    "Real-time webhook ingestion processing physical device payloads and sensor telemetry within seconds.",
                    "Live operational dashboard displaying real-time fill percentages and automated disposal scheduling.",
                    "Automated operational alerts dispatched within 5 seconds of container threshold breaches."
                },
                Metrics = new List<ProjectMetric>
                {
                    new() { Label = "Data Pipeline", Value = "IoT Device Webhooks" },
                    new() { Label = "Alert Latency", Value = "< 5s Trigger" },
                    new() { Label = "Client Stack", Value = "React 19 & Flutter" }
                },
                TechStack = new List<string>
                {
                    ".NET 8", "FastEndpoints", "MediatR", "IoT Device Webhooks", ".NET Aspire", "React 19", "TypeScript", "Tailwind CSS", "Flutter (Dart)", "OpenTelemetry"
                }
            },
            new()
            {
                Id = "sgdps",
                Number = "04",
                Name = "SGDPS",
                Subtitle = "Community Treasury, Field Collection & Society Management System",
                Category = "FIELD COLLECTION & FINTECH",
                Status = "PRODUCTION",
                Summary = "A community fintech and collection management ecosystem built for festival committees and housing societies, enabling on-field payment collection with GPS logging, treasury tracking, and instant WhatsApp receipts.",
                ArchitectureHighlights = new List<string>
                {
                    "Built .NET 10 backend using FastEndpoints, MediatR, and EF Core with role authorization for Admins and Collectors.",
                    "Developed companion Flutter mobile app (SGDPSMobile) for on-field volunteer collectors, capturing real-time GPS coordinates and timestamps upon payment recording.",
                    "Implemented single-click WhatsApp digital receipt dispatch and PDF audit receipt generation.",
                    "Designed React 19 + Redux Toolkit Query (RTK Query) admin treasury portal with interactive residential tower and floor collection matrices."
                },
                KeyOutcomes = new List<string>
                {
                    "Digitalized 100% of physical collection receipts with real-time GPS coordinate proof.",
                    "Instant WhatsApp automated digital receipt delivery to residents upon payment recording.",
                    "Live financial dashboard with real-time expense ledgers and tower-by-tower collection heatmaps."
                },
                Metrics = new List<ProjectMetric>
                {
                    new() { Label = "Geo-Tracking", Value = "Real-Time GPS Logs" },
                    new() { Label = "Receipts", Value = "Instant WhatsApp & PDF" },
                    new() { Label = "Stack", Value = ".NET 10 + React 19 + Flutter" }
                },
                TechStack = new List<string>
                {
                    ".NET 10", "FastEndpoints", "MediatR", "EF Core", "React 19", "RTK Query", "Flutter 3 (Dart)", "Tailwind CSS", "SQLite"
                }
            }
        };

        _skills = new List<SkillCategory>
        {
            new() { Id = "languages", Category = "LANGUAGES", Description = "Core programming and database languages", Skills = new() { "C# (12 / 13)", "SQL", "TypeScript", "JavaScript (ES6+)", "Dart", "HTML5 & CSS3" } },
            new() { Id = "backend", Category = "BACKEND & ARCHITECTURE", Description = "Distributed architectures, microservices, and design patterns", Skills = new() { "ASP.NET Core Web API", "FastEndpoints", ".NET Aspire", "Clean Architecture", "CQRS (MediatR)", "Repository & Unit of Work", "Dependency Injection", "RESTful APIs" } },
            new() { Id = "database", Category = "DATABASE & ORM", Description = "Relational persistence, data modeling, and performance tuning", Skills = new() { "Microsoft SQL Server", "SQLite", "Entity Framework Core (EF Core 8/10)", "Stored Procedures", "Index Tuning", "Schema Migrations" } },
            new() { Id = "security-cloud", Category = "SECURITY & CLOUD", Description = "Authentication, authorization, infrastructure, and resilience", Skills = new() { "JWT Bearer Authentication", "Multi-Tenancy & IDOR Isolation", "API Rate Limiting", "Microsoft Azure (App Services)", "OpenTelemetry", "Serilog" } },
            new() { Id = "frontend-mobile", Category = "FRONTEND & MOBILE", Description = "Modern UI frameworks, state management, and cross-platform apps", Skills = new() { "React 19", "TypeScript", "Vite", "Redux Toolkit & RTK Query", "Tailwind CSS", "Recharts", "Flutter 3 (Dart)", "Provider", "Material 3" } },
            new() { Id = "tooling-devops", Category = "TOOLING & INTEGRATIONS", Description = "Developer workflows, testing, and third-party ecosystems", Skills = new() { "Git & GitHub", "Swagger / OpenAPI & Scalar", "Postman", "POS Integrations (Square, Lightspeed, Clover)", "Cloudflare Turnstile", "IoT Webhooks", "MailKit" } }
        };

        _experience = new List<WorkExperience>
        {
            new()
            {
                Company = "Intellisoft Technologies",
                Role = "Software Engineer",
                Period = "December 2024 – Present",
                Location = "Noida, India",
                Summary = "Architecting high-throughput backend APIs and distributed services across 5 mission-critical commercial platforms. Enforcing Clean Architecture, CQRS, and automated Azure cloud deployments.",
                Highlights = new List<string>
                {
                    "Architect, develop, and maintain enterprise web APIs and distributed services using C#, ASP.NET Core 8/10, EF Core, and SQL Server.",
                    "Spearhead backend and full-stack development across 5 production systems spanning multi-tenant SaaS, IoT telemetry, hospitality inventory, and real estate data pipelines.",
                    "Implement enterprise security standards including JWT Bearer authentication, claims-based RBAC, multi-tenant isolation (IDOR mitigation), and API rate limiting.",
                    "Optimize complex SQL queries, execution plans, and indexes, cutting response times by up to 84% on production workloads.",
                    "Deploy and configure applications on Microsoft Azure App Services, integrating OpenTelemetry and Serilog to maintain 99.9% uptime."
                },
                PlatformsDelivered = new List<string>
                {
                    "TimeAxis (TimePulse SaaS)",
                    "PINPS Property Platform",
                    "BarPatrol Inventory System",
                    "GDM (Eco-On-Site IoT)",
                    "SGDPS Treasury Ecosystem"
                }
            }
        };
    }

    public Task<List<ProjectItem>> GetProjectsAsync(CancellationToken ct = default) =>
        Task.FromResult(_projects);

    public Task<ProjectItem?> GetProjectByIdAsync(string id, CancellationToken ct = default) =>
        Task.FromResult(_projects.FirstOrDefault(p => string.Equals(p.Id, id, StringComparison.OrdinalIgnoreCase)));

    public Task<List<SkillCategory>> GetSkillsAsync(CancellationToken ct = default) =>
        Task.FromResult(_skills);

    public Task<List<WorkExperience>> GetExperienceAsync(CancellationToken ct = default) =>
        Task.FromResult(_experience);

    public Task<bool> SaveContactInquiryAsync(ContactInquiry inquiry, CancellationToken ct = default)
    {
        _inquiries.Add(inquiry);
        return Task.FromResult(true);
    }
}
