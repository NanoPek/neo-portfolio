import React from 'react';
import { MapPin } from 'lucide-react';
import { SkillDetail } from '../../../constants/skillData';
import WorkBoxButtons from './WorkBoxButtons';
import TechChip from '../../atoms/TechChip';

type WorkBoxDescriptionProps = {
  title: string;
  description: string;
  location?: string;
  techs: SkillDetail[];
  link?: string;
  figma?: string;
  github?: string;
  appStore?: string[];
};

type Block = { kind: 'p'; text: string } | { kind: 'ul'; items: string[] };

/** Plain-text descriptions: lines starting with "- " become a list, other lines paragraphs. */
function parseDescription(description: string): Block[] {
  const blocks: Block[] = [];
  description.split('\n').map((line) => line.trim()).filter(Boolean).forEach((line) => {
    if (line.startsWith('-')) {
      const item = line.replace(/^-\s*/, '');
      const last = blocks[blocks.length - 1];
      if (last?.kind === 'ul') last.items.push(item);
      else blocks.push({ kind: 'ul', items: [item] });
    } else {
      blocks.push({ kind: 'p', text: line });
    }
  });
  return blocks;
}

function WorkBoxDescription({
  title, description, location, techs, link, figma, github, appStore,
}: WorkBoxDescriptionProps) {
  return (
    <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
      <div className="flex flex-col items-start gap-3">
        <h2 className="text-[22px] font-medium leading-tight text-fg">{title}</h2>
        {location && (
          <span className="inline-flex items-center gap-1.5 rounded-md border-2 border-ink bg-raised px-2 py-1 text-sm font-medium text-fg">
            <MapPin size={16} strokeWidth={1.5} aria-hidden />
            {location}
          </span>
        )}
      </div>
      <ul className="flex flex-row flex-wrap gap-2" aria-label="Tech">
        {techs.map((tech) => (
          <li key={tech.name}><TechChip skill={tech} /></li>
        ))}
      </ul>
      <div className="flex flex-col gap-3 text-[15px] leading-6 text-fg-secondary">
        {parseDescription(description).map((block) => (block.kind === 'p'
          ? <p key={block.text}>{block.text}</p>
          : (
            <ul key={block.items[0]} className="flex list-disc flex-col gap-1 pl-5 marker:text-fg-muted">
              {block.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )))}
      </div>
      <div className="mt-auto pt-1">
        <WorkBoxButtons link={link} figma={figma} github={github} appStore={appStore} />
      </div>
    </div>
  );
}

export default React.memo(WorkBoxDescription);
