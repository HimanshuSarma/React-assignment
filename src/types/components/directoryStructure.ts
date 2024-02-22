interface DirectoryType {
  id: string,
  name: string,
  type: 'file' | 'folder',
  expanded: boolean,
  children: Array<DirectoryType>,
  [key: string]: any
};

interface DirectoryProps extends DirectoryType {
  updateDirectory?: (directoryId: string, key: string, value: any) => void,
  updateActiveFileId?: (fileId: string) => void,
  updateActiveDirectoryId?: (directoryId: string) => void,
  activeFileId?: string,
  activeDirectoryId?: string
};

interface DirectoryStructureProps {
  directory: Array<DirectoryType>
};

export type { DirectoryStructureProps, DirectoryType, DirectoryProps };