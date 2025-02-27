import React from 'react';

const TextsizeElement = (props) => {
  const { attributes, children, element } = props;
  const { data = {} } = element;
  const tag = data.textsize_size || 'span';

  return (
    <small className={tag} {...attributes}>
      {children}
    </small>
  );
};

export default TextsizeElement;
