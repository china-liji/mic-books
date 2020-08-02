import { PrismLight as ReactSyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';

export let languageInited = false;

export const useInitLanguage = (): void => {
  if (languageInited) {
    return;
  }

  ReactSyntaxHighlighter.registerLanguage('bash', bash);
  ReactSyntaxHighlighter.registerLanguage('jsx', tsx);
  ReactSyntaxHighlighter.registerLanguage('tsx', tsx);
  ReactSyntaxHighlighter.registerLanguage('ts', tsx);
  ReactSyntaxHighlighter.registerLanguage('js', tsx);

  languageInited = true;
};