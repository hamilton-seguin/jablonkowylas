import { join } from 'path';
import { readdirSync, lstatSync } from 'fs';

export const defaultLanguage: string = 'en';

// based on the directories get the language codes
export const languages: string[] = readdirSync(join(__dirname, 'locales')).filter((fileName: string) => {
  const joinedPath: string = join(join(__dirname, 'locales'), fileName);
  const isDirectory: boolean = lstatSync(joinedPath).isDirectory();
  return isDirectory;
});
// defaultLanguage as first
languages.splice(languages.indexOf(defaultLanguage), 1);
languages.unshift(defaultLanguage);
