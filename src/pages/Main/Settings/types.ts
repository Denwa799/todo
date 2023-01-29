import React from 'react';

export interface ISettings {
  newsLineIsActive: boolean;
  setNewsLineIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
