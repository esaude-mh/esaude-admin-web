import { EsaudeApp } from './esaude-app';

export const ESAUDE_APPS: EsaudeApp[] = [
  {
    id: 1,
    name: "eSaude EMR Platform",
    description: "The eSaude EMR OpenMRS Distributiin",
    version: "1.22.5",
    installed: true,
    running: true,
    homepage: "https://www.esaude.org",
    config: "https://get.esaude.org/app/esaude-app-platform.yml",
    docs: "https://paper.dropbox.com/doc/eSaude-App-Install-Guide-Uvk5mTlgG2m0nyOYy5Zyg"
  },
  {
    id: 2,
    name: "eSaude EMR POC",
    description: "The eSaude EMR OpenMRS Distribution",
    version: "1.0.0",
    installed: true,
    running: true,
    homepage: "https://www.esaude.org",
    config: "https://get.esaude.org/app/esaude-app-poc.yml",
    docs: "https://paper.dropbox.com/doc/eSaude-App-Install-Guide-Uvk5mTlgG2m0nyOYy5Zyg"
  }
];
