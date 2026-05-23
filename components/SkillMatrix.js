import { resume } from '../data/resume';

const allSkills = resume.skillGroups.flatMap((g) =>
  g.skills.map((skill) => ({ skill, group: g.title }))
);

export default function SkillMatrix() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {allSkills.map(({ skill, group }) => (
        <div
          key={skill}
          title={group}
          className="skill-cell panel-border flex min-h-[72px] flex-col items-center justify-center p-3 text-center"
        >
          <span className="font-mono text-[10px] text-matrix-dim/70">{group.split(' ')[0]}</span>
          <span className="mt-1 text-xs text-[#c8e6ca]">{skill}</span>
        </div>
      ))}
    </div>
  );
}
