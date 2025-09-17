import { ArrowCounterClockwiseIcon } from "@phosphor-icons/react";
import { ProgressBar } from "./ProgressBar";
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

export function Footer({ onSubmit, sectionProgress, onClearForm }: FooterProps) {
  return (
    <footer className="bg-custom-navy h-25 flex items-center justify-between fixed bottom-0 w-full px-12">
      <ProgressBar sectionProgress={sectionProgress} />
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onClearForm}
          className="rounded-lg py-3 px-3 border border-white text-white flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors"
          title="Clear Form"
        >
          <ArrowCounterClockwiseIcon size={32} />
        </button>
        <button 
          type="button"
          onClick={onSubmit}
          className="rounded-lg py-3 px-12 text-2xl bg-custom-green text-white flex items-center justify-center hover:bg-opacity-90 transition-colors"
        >
          Submit
        </button>
      </div>
    </footer>
  );
}