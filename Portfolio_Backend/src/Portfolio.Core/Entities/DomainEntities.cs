namespace Portfolio.Core.Entities;

public class SkillCategory
{
    public string Id { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public List<string> Skills { get; set; } = new();
}

public class WorkExperience
{
    public string Company { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string Period { get; set; } = string.Empty;
    public string Location { get; set; } = string.Empty;
    public string Summary { get; set; } = string.Empty;
    public List<string> Highlights { get; set; } = new();
    public List<string> PlatformsDelivered { get; set; } = new();
}

public class ContactInquiry
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string? Subject { get; set; }
    public string Message { get; set; } = string.Empty;
    public DateTime SubmittedAtUtc { get; set; } = DateTime.UtcNow;
}
