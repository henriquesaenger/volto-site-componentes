import React from 'react';
import { BlockDataForm, SidebarPortal } from '@plone/volto/components';
import { imagemTextoSchema } from './schema';
import { useIntl } from 'react-intl';

import ImagemTextoBlockView from './View';

const ImagemTextoBlockEdit = (props) => {
  const { selected, block, data, onChangeBlock } = props;

  const intl = useIntl();
  const schema = imagemTextoSchema({ ...props, intl });
  const onChangeField = (id, value) => {
    onChangeBlock(block, {
      ...data,
      [id]: value,
    });
  };

  return (
    <>
      <ImagemTextoBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={schema.title}
          onChangeField={onChangeField}
          onChangeBlock={onChangeBlock}
          formData={data}
          block={block}
        />
      </SidebarPortal>
    </>
  );
};

export default ImagemTextoBlockEdit;
