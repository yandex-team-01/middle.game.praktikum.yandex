declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export const src: string;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.ico';
declare module '*.png';
