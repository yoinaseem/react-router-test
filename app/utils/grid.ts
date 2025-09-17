export function getGridStyle(className?: string) {
  // Default to col-span-6 if className is not provided
  if (!className) {
    return { gridColumn: 'span 6 / span 6' };
  }
  
  const colSpanMatch = className.match(/col-span-(\d+)/);
  if (colSpanMatch) {
    const span = parseInt(colSpanMatch[1]);
    return { gridColumn: `span ${span} / span ${span}` };
  }
  
  // If className is provided but doesn't contain a col-span class, default to col-span-6
  return { gridColumn: 'span 6 / span 6' };
}