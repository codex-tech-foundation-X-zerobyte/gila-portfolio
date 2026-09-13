import type { Skill } from "@/types";

export function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="font-medium text-text">{skill.name}</p>
          <p className="text-sm text-muted">{skill.description}</p>
        </div>
        <span className="shrink-0 font-mono text-xs text-muted">{skill.level}</span>
      </div>
      <div
        className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border"
        role="progressbar"
        aria-valuenow={skill.proficiency}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} proficiency`}
      >
        <div
          className="h-full rounded-full bg-accent"
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
    </div>
  );
}
