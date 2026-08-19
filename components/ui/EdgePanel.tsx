import type { ReactNode } from "react";

type EdgePanelProps = {
  children: ReactNode;
  className?: string;
};

export function EdgePanel({ children, className = "" }: EdgePanelProps) {
  return (
    <div className={`edge-panel relative border border-ink/8 bg-white/72 ${className}`}>
      <span className="edge-corner left-0 top-0 border-l border-t" aria-hidden="true" />
      <span className="edge-corner right-0 top-0 border-r border-t" aria-hidden="true" />
      <span className="edge-corner bottom-0 left-0 border-b border-l" aria-hidden="true" />
      <span className="edge-corner bottom-0 right-0 border-b border-r" aria-hidden="true" />
      {children}
    </div>
  );
}
