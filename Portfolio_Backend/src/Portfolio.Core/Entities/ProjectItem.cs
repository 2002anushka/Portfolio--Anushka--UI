namespace Portfolio.Core.Entities;

public class ProjectItem
{
    public string Id { get; set; } = string.Empty;
    public string Number { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Subtitle { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string Status { get; set; } = "PRODUCTION";
    public string Summary { get; set; } = string.Empty;
    public List<string> ArchitectureHighlights { get; set; } = new();
    public List<string> KeyOutcomes { get; set; } = new();
    public List<ProjectMetric> Metrics { get; set; } = new();
    public List<string> TechStack { get; set; } = new();
}

public class ProjectMetric
{
    public string Label { get; set; } = string.Empty;
    public string Value { get; set; } = string.Empty;
}
