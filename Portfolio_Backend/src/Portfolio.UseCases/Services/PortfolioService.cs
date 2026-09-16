using Portfolio.Core.Entities;
using Portfolio.Core.Interfaces;
using Portfolio.UseCases.DTOs;

namespace Portfolio.UseCases.Services;

public class PortfolioService
{
    private readonly IPortfolioRepository _repository;

    public PortfolioService(IPortfolioRepository repository)
    {
        _repository = repository;
    }

    public async Task<PortfolioSummaryDto> GetPortfolioSummaryAsync(CancellationToken ct = default)
    {
        var projects = await _repository.GetProjectsAsync(ct);
        var skills = await _repository.GetSkillsAsync(ct);
        var experience = await _repository.GetExperienceAsync(ct);

        var personal = new PersonalInfoDto(
            Name: "Anushka Sharma",
            Role: "Software Engineer | .NET Backend & Full-Stack Developer",
            Location: "Saharanpur, UP, India (Open to Remote & Relocation)",
            Email: "anushka.sharma.cse.2021@miet.ac.in",
            Phone: "+91 8171262720",
            Bio: "Software Engineer with 1.7+ years of production experience engineering enterprise web APIs, distributed microservices, and full-stack platforms using C#, .NET 8/10, EF Core, and SQL Server.",
            HeroHeadline: "Architecting High-Throughput .NET Systems & Full-Stack Platforms",
            HeroStatement: "I build the dependable backend systems behind ambitious products.",
            ExperienceYears: "1.7+",
            PlatformsDeliveredCount: projects.Count,
            LatencyReduction: "84%",
            GithubUrl: "https://github.com/anushka-sharma",
            LinkedinUrl: "https://www.linkedin.com/in/anushka-sharma-07ab1b24",
            StatusBadge: "AVAILABLE FOR PRODUCTION ENGINEERING / 2026"
        );

        var projectDtos = projects.Select(p => new ProjectDto(
            p.Id, p.Number, p.Name, p.Subtitle, p.Category, p.Status, p.Summary,
            p.ArchitectureHighlights, p.KeyOutcomes, p.Metrics, p.TechStack
        )).ToList();

        var skillDtos = skills.Select(s => new SkillCategoryDto(
            s.Id, s.Category, s.Description, s.Skills
        )).ToList();

        var experienceDtos = experience.Select(e => new ExperienceDto(
            e.Company, e.Role, e.Period, e.Location, e.Summary, e.Highlights, e.PlatformsDelivered
        )).ToList();

        return new PortfolioSummaryDto(personal, projectDtos, skillDtos, experienceDtos);
    }

    public async Task<ContactResponse> HandleContactInquiryAsync(SubmitContactRequest request, CancellationToken ct = default)
    {
        if (string.IsNullOrWhiteSpace(request.Name) || string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Message))
        {
            return new ContactResponse(false, "Name, email, and message are required.");
        }

        var inquiry = new ContactInquiry
        {
            Name = request.Name.Trim(),
            Email = request.Email.Trim(),
            Subject = request.Subject?.Trim(),
            Message = request.Message.Trim()
        };

        var saved = await _repository.SaveContactInquiryAsync(inquiry, ct);
        return new ContactResponse(saved, saved 
            ? "Your inquiry has been successfully received. I will review and respond promptly." 
            : "Failed to log message. Please reach out directly via email.");
    }
}
