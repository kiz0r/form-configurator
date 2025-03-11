import type { FC } from 'react';

export interface ITabItem {
  label: string;
  value: string;
  Component: FC;
}
