interface SectionProgress {
  sectionId: number;
  sectionTitle: string;
  progress: number;
  filledFields: number;
  totalFields: number;
}

interface ProgressBarProps {
  sectionProgress: SectionProgress[];
}

export function ProgressBar({ sectionProgress }: ProgressBarProps) {
  return (
    <div className="flex items-center w-1/2 gap-4">
      {sectionProgress.map((section) => (
        <div key={section.sectionId} className="flex flex-col w-1/4">
          <div className={`flex justify-between text-xs mb-1 text-white`}>
            <span>{section.sectionTitle}</span>
            <span>{section.filledFields}/{section.totalFields}</span>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ${section.progress === 100 ? 'bg-custom-green-light' : 'bg-custom-green'}`}
              style={{ width: `${section.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}