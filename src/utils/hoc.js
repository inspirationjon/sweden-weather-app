import React from 'react';

export const hoc = (hook, Component, displayName = 'HocWrapper') => {
  Component.displayName = displayName;

  const HocResult = props => {
    const hookProps = hook(props);
    return <Component {...hookProps} {...props} />;
  };

  HocResult.hook = hook;
  HocResult.Original = Component;

  return HocResult;
};
