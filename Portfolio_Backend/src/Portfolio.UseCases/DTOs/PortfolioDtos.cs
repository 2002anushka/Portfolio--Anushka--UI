using Portfolio.Core.Entities;

namespace Portfolio.UseCases.DTOs;

public record ProjectDto(
    string Id,
    string Number,
    string Name,
    string Subtitle,
    string Category,
    string Status,
    string Summary,
    List<string> ArchitectureHighlights,
    List<string> KeyOutcomes,
    List<ProjectMetric> Metrics,
    List<string> TechStack
);

public record SkillCategoryDto(
    string Id,
    string Category,
    string Description,
    List<string> Skills
);

public record ExperienceDto(
    string Company,
    string Role,
    string Period,
    string Location,
    string Summary,
    List<string> Highlights,
    List<string> PlatformsDelivered
);

public record SubmitContactRequest(
    string Name,
    string Email,
    string? Subject,
    string Message
);

public record ContactResponse(
    bool Success,
    string Message
);

public record PortfolioSummaryDto(
    PersonalInfoDto Personal,
    List<ProjectDto> Projects,
    List<SkillCategoryDto> Skills,
    List<ExperienceDto> Experience
);

public record PersonalInfoDto(
    string Name,
    string Role,
    string Location,
    string Email,
    string Phone,
    string Bio,
    string HeroHeadline,
    string HeroStatement,
    string ExperienceYears,
    int PlatformsDeliveredCount,
    string LatencyReduction,
    string GithubUrl,
    string LinkedinUrl,
    string StatusBadge
);
