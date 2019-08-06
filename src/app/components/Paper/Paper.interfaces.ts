import React from 'react';

export interface PaperInterface {
  title?: string | null;
  children?: React.ReactNode | null;
  width?: string;
}

export interface PaperStylesInterface {
  hasChildren?: boolean;
  hasTitle?: boolean;
  width?: string;
}
