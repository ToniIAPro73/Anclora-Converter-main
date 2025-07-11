export type FileCategory =
  | 'image'
  | 'video'
  | 'audio'
  | 'document'
  | 'archive'
  | 'other';

const extensionToCategory: Record<string, FileCategory> = {
  // images
  jpg: 'image',
  jpeg: 'image',
  png: 'image',
  gif: 'image',
  webp: 'image',
  bmp: 'image',
  tiff: 'image',

  // videos
  mp4: 'video',
  mov: 'video',
  avi: 'video',
  mkv: 'video',
  webm: 'video',

  // audio
  mp3: 'audio',
  wav: 'audio',
  flac: 'audio',
  aac: 'audio',
  ogg: 'audio',

  // documents
  pdf: 'document',
  doc: 'document',
  docx: 'document',
  rtf: 'document',
  txt: 'document',
  odt: 'document',
  epub: 'document',
  mobi: 'document',
  csv: 'document',

  // archives
  zip: 'archive',
  rar: 'archive',
  '7z': 'archive',
  tar: 'archive',
  gz: 'archive',
};

const categoryToTargetFormats: Record<FileCategory, string[]> = {
  image: ['png', 'jpeg', 'webp', 'gif'],
  video: ['mp4', 'mov', 'avi', 'webm'],
  audio: ['mp3', 'wav', 'aac'],
  document: ['pdf', 'txt', 'docx'],
  archive: ['zip', 'tar', '7z'],
  other: [],
};

export function getFileCategory(extension: string): FileCategory {
  const ext = extension.replace(/^\./, '').toLowerCase();
  return extensionToCategory[ext] || 'other';
}

export function getTargetFormats(category: FileCategory): string[] {
  return categoryToTargetFormats[category] || [];
}
