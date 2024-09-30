import React from 'react';
import ExternalLinksPage from './ExternalLinksPage';
import NodeNpmPage from './NodeNpmPage';

function Exp01_01() {
  return (
    <div className=" bg-gray-900 flex flex-col items-center justify-center gap-6 p-10">
      <ExternalLinksPage />
      <NodeNpmPage />
    </div>
  );
}

export default Exp01_01;
