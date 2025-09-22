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
  isSubmitting?: boolean;
}

export function Footer({ onSubmit, sectionProgress, onClearForm, isSubmitting }: FooterProps) {
  return (
    <footer className="bg-custom-navy h-25 flex items-center justify-between fixed bottom-0 w-full px-12">
      <ProgressBar sectionProgress={sectionProgress} />
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onClearForm}
          className="rounded-lg py-3 px-3 border border-white text-white flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-colors"
          title="Clear Form"
          disabled={isSubmitting}
        >
          <ArrowCounterClockwiseIcon size={32} />
        </button>
        <button 
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className={`rounded-lg py-3 px-12 text-2xl text-white flex items-center justify-center transition-colors ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-custom-green hover:bg-opacity-90'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </footer>
  );
}