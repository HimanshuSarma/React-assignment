import React, { useState } from 'react';

import Directory from './Directory';

import { DirectoryStructureProps, DirectoryType } from '../../types/components/directoryStructure';

import './DirectoryStructure.css';

const DirectoryStructure: React.FC<DirectoryStructureProps> = ({ directory }): JSX.Element => {
  const [directoryStructure, setDirectoryStructure] = React.useState<Array<DirectoryType>>(directory);
  const [activeFileId, setActiveFileId] = useState<string>('');
  const [activeDirectoryId, setActiveDirectoryId] = useState<string>('');

  const updateDirectory = (directoryId: string, key: string, value: any) => {
    setDirectoryStructure((directoryStructure: Array<DirectoryType>) => {
      const directoryStructureCpy = [...directoryStructure];
      const update = (directory: Array<DirectoryType>) => {
        for (let i: number = 0; i < directory.length; i++) {
          if (directory[i].id === directoryId) {
            directory[i][key] = value;
            return;
          } else {
            update(directory[i].children);
          }
        }
      };

      update(directoryStructureCpy);
      return directoryStructureCpy;
    });
  };

  const updateActiveFileId = (fileId: string): void => {
    setActiveFileId(fileId);
    const update = (directory: Array<DirectoryType>, directoryId: string | null): string | null => {
      for (let i: number = 0; i < directory.length; i++) {
        if (directory[i].id === fileId) {
          return directoryId;
        } else {
          console.log(directory[i].children, 'directoryId');
          const directoryId = update(directory[i].children, directory[i].id) as string | null;
          if (directoryId) return directoryId;
        }
      }

      return null;
    };

    const directoryId: string | null = update(directoryStructure, null) as string | null;
    console.log(directoryId, fileId, 'result');
    if (directoryId) {
      setActiveDirectoryId(directoryId);
    }
  };

  const updateActiveDirectoryId = (directoryId: string): void => {
    setActiveDirectoryId(directoryId);
    setActiveFileId('')
  }

  return (
    <div>
      {directoryStructure.map((item: DirectoryType, itemIdx: number) => {
        return (
          <React.Fragment key={item.id}>
            <Directory id={item.id} name={item.name} type={item.type} children={item.children} expanded={item.expanded}
              updateDirectory={updateDirectory}
              updateActiveFileId={updateActiveFileId}
              activeFileId={activeFileId}
              updateActiveDirectoryId={updateActiveDirectoryId}
              activeDirectoryId={activeDirectoryId}
            />
          </React.Fragment>
        )
      })}
    </div>
  );
};

export default DirectoryStructure;