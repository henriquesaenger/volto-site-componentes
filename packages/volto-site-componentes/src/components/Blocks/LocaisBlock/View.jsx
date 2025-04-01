import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withBlockExtensions } from '@plone/volto/helpers';
import { listLocais } from '../../../actions/locais/locais';
import LocaisView from './DefaultView';

const LocaisBlockView = (props) => {
  const { data, isEditMode, className } = props;
  const dispatch = useDispatch();
  const locais = useSelector((state) => state.locais?.data);
  // Dispara chamada na criação da constante dispatch

  useEffect(() => {
    dispatch(listLocais());
  }, [dispatch]);

  return (
    <LocaisView
      {...data}
      locais={locais}
      isEditMode={isEditMode}
      className={className}
    />
  );
};

export default withBlockExtensions(LocaisBlockView);
