import React from 'react';

export interface ISettingsModal {
  isOpen: boolean;
  newsLineIsActive: boolean;
  setIsOpen: (value: boolean) => void;
  setNewsLineIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
