export function createPostSneakPeek(content: string): string {
  const sneakPeekMaxChars = 175
  return `${content.substring(0, Math.min(content.length, sneakPeekMaxChars))}...`
}
