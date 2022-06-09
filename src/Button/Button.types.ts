import { ReactNode } from "react";

export interface Button {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
};
