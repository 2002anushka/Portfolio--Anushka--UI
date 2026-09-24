using Portfolio.Core.Interfaces;
using Portfolio.Infrastructure.Data;
using Portfolio.UseCases.DTOs;
using Portfolio.UseCases.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new()
    {
        Title = "Anushka Sharma - Portfolio API",
        Version = "v1",
        Description = "Clean Architecture production API serving Anushka Sharma's software engineer portfolio and contact endpoints."
    });
});

// Dependency Injection - Clean Architecture layers
builder.Services.AddSingleton<IPortfolioRepository, InMemoryPortfolioRepository>();
builder.Services.AddScoped<PortfolioService>();

// CORS policy for frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowPortfolioFrontend", policy =>
    {
        policy.SetIsOriginAllowed(_ => true)
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure HTTP request pipeline.
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Portfolio API v1");
    c.RoutePrefix = "swagger";
});

app.UseCors("AllowPortfolioFrontend");

// --- API Endpoints ---

// GET /api/portfolio (Complete payload)
app.MapGet("/api/portfolio", async (PortfolioService service, CancellationToken ct) =>
{
    var summary = await service.GetPortfolioSummaryAsync(ct);
    return Results.Ok(summary);
})
.WithName("GetPortfolioSummary")
.WithOpenApi();

// GET /api/projects
app.MapGet("/api/projects", async (IPortfolioRepository repo, CancellationToken ct) =>
{
    var projects = await repo.GetProjectsAsync(ct);
    return Results.Ok(projects);
})
.WithName("GetProjects")
.WithOpenApi();

// GET /api/projects/{id}
app.MapGet("/api/projects/{id}", async (string id, IPortfolioRepository repo, CancellationToken ct) =>
{
    var project = await repo.GetProjectByIdAsync(id, ct);
    return project is not null ? Results.Ok(project) : Results.NotFound();
})
.WithName("GetProjectById")
.WithOpenApi();

// GET /api/skills
app.MapGet("/api/skills", async (IPortfolioRepository repo, CancellationToken ct) =>
{
    var skills = await repo.GetSkillsAsync(ct);
    return Results.Ok(skills);
})
.WithName("GetSkills")
.WithOpenApi();

// GET /api/experience
app.MapGet("/api/experience", async (IPortfolioRepository repo, CancellationToken ct) =>
{
    var experience = await repo.GetExperienceAsync(ct);
    return Results.Ok(experience);
})
.WithName("GetExperience")
.WithOpenApi();

// POST /api/contact
app.MapPost("/api/contact", async (SubmitContactRequest request, PortfolioService service, CancellationToken ct) =>
{
    var response = await service.HandleContactInquiryAsync(request, ct);
    return response.Success ? Results.Ok(response) : Results.BadRequest(response);
})
.WithName("SubmitContact")
.WithOpenApi();

// GET /api/health
app.MapGet("/api/health", () => Results.Ok(new
{
    Status = "Healthy",
    Version = "1.0.0",
    TimestampUtc = DateTime.UtcNow,
    Architecture = "Clean Architecture (.NET 8)",
    EngineeredBy = "Anushka Sharma"
}))
.WithName("HealthCheck")
.WithOpenApi();

// Root redirect to Swagger
app.MapGet("/", () => Results.Redirect("/swagger"));

app.Run();
