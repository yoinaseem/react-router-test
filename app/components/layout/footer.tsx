// app/components/layout/footer.tsx
import { ArrowCounterClockwiseIcon } from "@phosphor-icons/react";

interface SectionProgress {
  sectionId: number;
  sectionTitle: string;
  progress: number;
  filledFields: number;
  totalFields: number;
}

interface FooterProps {
  onSubmit: () => void;
  sectionProgress: SectionProgress[];
  onClearForm: () => void;
}

export function Footer({
  onSubmit,
  sectionProgress,
  onClearForm,
}: FooterProps) {
  return (
    <footer className="bg-custom-navy h-25 flex items-center justify-between fixed bottom-0 w-full px-12">
      <div className="flex items-center w-1/2 gap-4">
        {sectionProgress.map((section, index) => (
          <div key={section.sectionId} className="flex flex-col w-1/4">
            <div className="flex justify-between text-xs text-white mb-1">
              <span>{section.sectionTitle}</span>
              <span>
                {section.filledFields}/{section.totalFields}
              </span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-custom-green transition-all duration-300"
                style={{ width: `${section.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onClearForm}
          className="rounded-lg py-3 px-3 border border-white text-white flex items-center justify-center hover:bg-white/10 transition-colors"
          title="Clear Form"
        >
          <ArrowCounterClockwiseIcon size={32} />
        </button>
        <button
          type="button"
          onClick={onSubmit}
          className="rounded-lg py-3 px-12 text-2xl bg-custom-green text-white flex items-center justify-center hover:bg-custom-green/90 transition-colors"
        >
          Submit
        </button>
      </div>
    </footer>
  );
}
