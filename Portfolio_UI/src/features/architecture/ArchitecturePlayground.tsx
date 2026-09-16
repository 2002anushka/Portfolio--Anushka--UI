import React, { useState } from 'react';
import { SectionHeading } from '../../common/SectionHeading';
import { TerminalCard } from '../../common/TerminalCard';
import { Badge } from '../../common/Badge';
import { Layers, Zap, ArrowRight, Check, Code, Shield, Database, Sparkles } from 'lucide-react';

export const ArchitecturePlayground: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<'web' | 'usecases' | 'core' | 'infra'>('usecases');
  const [benchmarkMode, setBenchmarkMode] = useState<'after' | 'before'>('after');

  const layers = [
    {
      id: 'web',
      name: '01. WEB & API LAYER',
      tech: 'FastEndpoints / ASP.NET Core',
      desc: 'Thin HTTP endpoints, route mapping, JWT Bearer validation, Claims-based RBAC, and rate limiting middleware.',
      codeSample: `// FastEndpoints Endpoint Definition
public class GetPropertyListingEndpoint : Endpoint<GetPropertyRequest, PropertyResponse>
{
    private readonly IMediator _mediator;
    public GetPropertyListingEndpoint(IMediator mediator) => _mediator = mediator;

    public override void Configure()
    {
        Get("/api/properties/{id}");
        Policies("AdminOnly");
        Throttle(hitLimit: 60, durationSeconds: 60);
    }

    public override async Task HandleAsync(GetPropertyRequest req, CancellationToken ct)
    {
        var result = await _mediator.Send(new GetPropertyByIdQuery(req.Id), ct);
        await SendOkAsync(result, ct);
    }
}`
    },
    {
      id: 'usecases',
      name: '02. USE CASES (CQRS & MEDIATR)',
      tech: 'MediatR Commands & Queries',
      desc: 'Encapsulates business operations. Queries return lean DTOs without domain side-effects; Commands enforce validation and domain events.',
      codeSample: `// CQRS Query & Handler
public record GetPropertyByIdQuery(Guid Id) : IRequest<Result<PropertyDto>>;

public class GetPropertyByIdHandler : IRequestHandler<GetPropertyByIdQuery, Result<PropertyDto>>
{
    private readonly IReadRepository<Property> _repository;

    public async Task<Result<PropertyDto>> Handle(GetPropertyByIdQuery q, CancellationToken ct)
    {
        var spec = new PropertyDetailsSpecification(q.Id);
        var property = await _repository.FirstOrDefaultAsync(spec, ct);
        if (property is null) return Result.NotFound();
        
        return Result.Success(property.ToDto());
    }
}`
    },
    {
      id: 'core',
      name: '03. DOMAIN CORE',
      tech: 'Entities, Value Objects & Specifications',
      desc: 'Pure domain business logic with zero external dependencies. Contains business rules, invariants, and aggregate roots.',
      codeSample: `// Aggregate Root & Business Invariant
public class TimeEntry : EntityBase, IAggregateRoot
{
    public Guid ProjectId { get; private set; }
    public Guid MemberId { get; private set; }
    public decimal BillableHours { get; private set; }
    public bool IsApproved { get; private set; }

    public void Approve(Guid managerId)
    {
        if (BillableHours <= 0) 
            throw new DomainException("Cannot approve empty time log");
            
        IsApproved = true;
        RegisterDomainEvent(new TimesheetApprovedEvent(Id, managerId));
    }
}`
    },
    {
      id: 'infra',
      name: '04. INFRASTRUCTURE & DATA',
      tech: 'EF Core 10, SQL Server',
      desc: 'Database persistence, external API integrations, background worker scrapers, and OpenTelemetry logging.',
      codeSample: `// EF Core Repository
public class EfRepository<T> : RepositoryBase<T>, IReadRepository<T> where T : class, IAggregateRoot
{
    public EfRepository(AppDbContext dbContext) : base(dbContext) { }
}

// Multi-tenant Tenant Filter
protected override void OnModelCreating(ModelBuilder builder)
{
    builder.Entity<Invoice>().HasQueryFilter(e => e.TenantId == _tenantContext.TenantId);
}`
    }
  ];

  const activeLayerData = layers.find(l => l.id === selectedLayer)!;

  return (
    <section id="architecture" className="py-20 md:py-28 border-b border-[#27272A] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="// 03"
          tag="ARCHITECTURAL BLUEPRINT"
          title="Clean Architecture & Benchmarking"
          subtitle="Explore the decoupled 4-layer Clean Architecture pattern and interactive database performance optimization metrics."
        />

        {/* 1. Interactive Clean Architecture Explorer */}
        <div className="mb-16">
          <div className="font-mono text-xs text-[#E3FF00] tracking-widest uppercase mb-4">
            // INTERACTIVE LAYER EXPLORER — SELECT A LAYER TO INSPECT:
          </div>

          {/* Layer Selector Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {layers.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setSelectedLayer(layer.id as any)}
                className={`text-left p-4 border transition-all font-mono ${
                  selectedLayer === layer.id
                    ? 'border-[#E3FF00] bg-[#0F0F11] shadow-[0_0_15px_rgba(227,255,0,0.15)]'
                    : 'border-zinc-800 bg-[#070709] hover:border-zinc-700 text-zinc-400'
                }`}
              >
                <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                  {layer.tech}
                </div>
                <div className={`text-xs font-bold mt-1 ${selectedLayer === layer.id ? 'text-[#E3FF00]' : 'text-white'}`}>
                  {layer.name}
                </div>
              </button>
            ))}
          </div>

          {/* Layer Details & Code Inspector */}
          <TerminalCard 
            title={`CLEAN_ARCHITECTURE // ${activeLayerData.name}`} 
            badgeText={activeLayerData.tech}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4 font-sans text-sm text-zinc-300">
                <div className="font-mono text-xs text-[#E3FF00] uppercase tracking-wider">
                  LAYER PURPOSE & RESPONSIBILITY:
                </div>
                <p className="leading-relaxed">
                  {activeLayerData.desc}
                </p>
                <div className="border border-zinc-800 bg-black/60 p-4 font-mono text-xs space-y-2 text-zinc-400">
                  <div className="text-[#E3FF00] text-[10px] uppercase tracking-widest font-bold">KEY BENEFITS:</div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="size-3.5 text-[#E3FF00]" />
                    <span>Zero tight coupling between UI and Persistence</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="size-3.5 text-[#E3FF00]" />
                    <span>High testability with mocked MediatR handlers</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Check className="size-3.5 text-[#E3FF00]" />
                    <span>Strict compliance with SOLID & DDD guidelines</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 font-mono text-xs overflow-x-auto bg-black p-4 border border-zinc-800 text-zinc-300">
                <pre className="text-zinc-300 leading-relaxed font-mono">
                  <code>{activeLayerData.codeSample}</code>
                </pre>
              </div>
            </div>
          </TerminalCard>
        </div>

        {/* 2. Interactive Latency Benchmark Simulator */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="font-mono text-xs text-[#E3FF00] tracking-widest uppercase">
                // PRODUCTION LATENCY BENCHMARK
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                PINPS Search Optimization Case Study
              </h3>
            </div>

            {/* Toggle Mode */}
            <div className="flex items-center gap-2 border border-zinc-800 bg-black p-1">
              <button
                onClick={() => setBenchmarkMode('before')}
                className={`font-mono text-xs px-3.5 py-1.5 transition-colors ${
                  benchmarkMode === 'before'
                    ? 'bg-red-500/20 text-red-400 font-bold border border-red-500/40'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                UNOPTIMIZED (BEFORE)
              </button>
              <button
                onClick={() => setBenchmarkMode('after')}
                className={`font-mono text-xs px-3.5 py-1.5 transition-colors ${
                  benchmarkMode === 'after'
                    ? 'bg-[#E3FF00] text-black font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                OPTIMIZED (AFTER)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Metric 1 */}
            <div className="border border-zinc-800 bg-[#0C0C0E] p-6">
              <div className="font-mono text-xs text-zinc-500 uppercase">AVG PAGE-LOAD TIME</div>
              <div className={`text-4xl font-black font-mono mt-2 ${benchmarkMode === 'after' ? 'text-[#E3FF00]' : 'text-red-400'}`}>
                {benchmarkMode === 'after' ? '1.1s' : '7.0s'}
              </div>
              <div className="font-mono text-xs text-zinc-400 mt-2">
                {benchmarkMode === 'after' ? '⚡ 84% Response Speedup' : '❌ Heavy database scan overhead'}
              </div>
            </div>

            {/* Metric 2 */}
            <div className="border border-zinc-800 bg-[#0C0C0E] p-6">
              <div className="font-mono text-xs text-zinc-500 uppercase">DATABASE EXECUTION PLAN</div>
              <div className="text-lg font-bold font-mono text-white mt-2">
                {benchmarkMode === 'after' ? 'Index Seek + CQRS Projection' : 'Full Clustered Table Scan'}
              </div>
              <div className="font-mono text-xs text-zinc-400 mt-2">
                {benchmarkMode === 'after' ? 'Non-clustered composite indexes' : 'Table scans on unindexed filters'}
              </div>
            </div>

            {/* Metric 3 */}
            <div className="border border-zinc-800 bg-[#0C0C0E] p-6">
              <div className="font-mono text-xs text-zinc-500 uppercase">PAYLOAD OVER-FETCHING</div>
              <div className="text-lg font-bold font-mono text-white mt-2">
                {benchmarkMode === 'after' ? 'Lean DTOs (48 KB)' : 'Full Entity Graph (640 KB)'}
              </div>
              <div className="font-mono text-xs text-zinc-400 mt-2">
                {benchmarkMode === 'after' ? '92% payload serialization drop' : 'Circular graph serialization'}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
