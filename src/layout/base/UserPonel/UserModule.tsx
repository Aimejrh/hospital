import React, { useRef, useCallback } from 'react';
import './UserModule.scss';

// interface SidebarItem {
//   id: number;
//   title: string;
// }

const DraggableSidebar: React.FC = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const resizerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!sidebarRef.current || !resizerRef.current || e.button !== 0) return;

    const startX = e.clientX;
    const startWidth = sidebarRef.current?.offsetWidth || 0;

    const moveHandler = (moveEvent: MouseEvent) => {
      if (!sidebarRef.current) return;

      const dx = startX - moveEvent.clientX;
      const newWidth = startWidth + dx;

      const finalWidth = Math.max(300, Math.min(newWidth, 800));

      sidebarRef.current!.style.width = `${finalWidth}px`;
    };

    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mouseup', () => {
      window.removeEventListener('mousemove', moveHandler);
    });

    e.preventDefault();
  }, []);

  // useEffect(() => {
  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseDown);
  //     window.removeEventListener('mouseup', handleMouseDown);
  //   };
  // }, [handleMouseDown]);

  return (
    <>
      <div ref={sidebarRef} className="module">
        <div className="header">
          <h3>Sidebar Menu</h3>
        </div>
        <ul>  
          {[...Array(9)].map((_, index) => (
            <li key={index}>Sidebar menu list {index + 1}</li>
          ))}
        </ul>
        <div ref={resizerRef} className="resizer" onMouseDown={handleMouseDown}></div>
      </div>
    </>
  );
};

export default DraggableSidebar;
