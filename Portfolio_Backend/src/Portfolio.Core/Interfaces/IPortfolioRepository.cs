using Portfolio.Core.Entities;

namespace Portfolio.Core.Interfaces;

public interface IPortfolioRepository
{
    Task<List<ProjectItem>> GetProjectsAsync(CancellationToken ct = default);
    Task<ProjectItem?> GetProjectByIdAsync(string id, CancellationToken ct = default);
    Task<List<SkillCategory>> GetSkillsAsync(CancellationToken ct = default);
    Task<List<WorkExperience>> GetExperienceAsync(CancellationToken ct = default);
    Task<bool> SaveContactInquiryAsync(ContactInquiry inquiry, CancellationToken ct = default);
}
