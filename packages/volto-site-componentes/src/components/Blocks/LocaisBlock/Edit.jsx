import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';

import LocaisBlockData from './Data';
import LocaisBlockView from './View';

const LocaisBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  return (
    <>
      <LocaisBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <LocaisBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(LocaisBlockEdit);
