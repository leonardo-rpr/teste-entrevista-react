import React from 'react';

export interface PaperInterface {
  title?: string | null;
  children?: React.ReactNode | null;
}

export interface PaperStylesInterface {
  hasChildren?: boolean;
  hasTitle?: boolean;
}
