import React from 'react';

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { DirectoryType, DirectoryProps } from '../../types/components/directoryStructure';

const Directory: React.FC<DirectoryProps> = ({ id, name, type, children, expanded, updateDirectory, updateActiveFileId, activeFileId, updateActiveDirectoryId, activeDirectoryId }): JSX.Element => {
  return (
    <>
      <div
        className={`directory-details-root`}
      >
        <div
          className={`directory-details ${activeFileId === id || activeDirectoryId === id ? 'active-file' : 'inactive-file'}`}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            updateDirectory?.(id, 'expanded', !expanded);
            if (type === 'file') {
              updateActiveFileId?.(id);
            } else {
              updateActiveDirectoryId?.(id);
            }
          }}
        >
          <span>{name}</span>
          {type === 'folder' ? expanded ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} /> : null}
        </div>
        {expanded ? children.map((item: DirectoryType, itemIdx: number): JSX.Element => {
          return (
            <React.Fragment
              key={item.id}
            >
              <div
                style={{
                  margin: '0 0 0 0.5rem'
                }}
              >
                <Directory id={item.id} name={item.name} type={item.type} children={item.children} expanded={item.expanded} updateActiveFileId={updateActiveFileId} activeFileId={activeFileId} />
              </div>
            </React.Fragment>
          );
        }) : null}
      </div>
    </>
  );
};

export default Directory;