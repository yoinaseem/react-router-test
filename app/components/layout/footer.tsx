import { ArrowCounterClockwiseIcon } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="bg-custom-navy h-25 flex items-center justify-between fixed bottom-0 w-full px-12">
      <div className="flex items-center w-1/2 gap-4">
        <div className="rounded-md bg-custom-green h-5 w-1/4"></div>
        <div className="rounded-md border border-white h-5 w-1/4"></div>
        <div className="rounded-md border border-white h-5 w-1/4"></div>
        <div className="rounded-md border border-white h-5 w-1/4"></div>
      </div>
      <div className="flex items-center gap-4">
        <div className="rounded-lg py-3 px-3 border border-white text-white flex items-center justify-center">
          <ArrowCounterClockwiseIcon size={32} />
        </div>
        <div className="rounded-lg py-3 px-12 text-2xl bg-custom-green text-white flex items-center justify-center">
          Submit
        </div>
      </div>
    </footer>
  );
}

// Make the footer dynamic and use url param for the submissions and submisisons edit page instead of 
// creating separate footers.