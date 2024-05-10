// // List of commands that require API calls

import { getProjects, getTxtFile } from '../api';
import { getQuote } from '../api';
import { getWeather } from '../api';
import config from '../../../config.json';

export const projects = async (args: string[]): Promise<string> => {
  const projects = await getProjects();
  return projects
    .map(
      (repo) =>
        `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    )
    .join('\n');
};

projects.hint = 'Fetches a list of my projects from Github.';

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

quote.hint = 'Fetches a random quote.';

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};

weather.hint = 'Fetches the weather of a city.';

export const cat = async (args: string[]): Promise<string> => {
  if (args.length === 0) {
    return 'Error: Missing argument. Usage: cat [filename]';
  }

  // Remove duplicates
  args = Array.from(new Set(args));
  let files: { filename: string; url: string }[] = [];
  let command_text = '';

  for (let i = 0; i < args.length; i++) {
    const file = config.files.find((file) => file.filename === args[i]);
    if (file) {
      if (file.type === 'text') {
        files.push(file);
      } else {
        return `Error: "${args[i]}" is not a text file. Use 'open' command instead.`;
      }
    } else {
      return `Error: No such file or directory "${args[i]}"`;
    }
  }

  for (const file of files) {
    const file_text = await getTxtFile(file.url);
    command_text += `${file_text}\n`;
  }

  return command_text;
};
