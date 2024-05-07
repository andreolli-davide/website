// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort();
  const max_len = Math.max(...commands.map((c) => c.length));

  var c = '';
  for (let i = 0; i < commands.length; i++) {
    c += commands[i];
    if (bin[commands[i]]['hint']) {
      for (let j = 0; j < max_len - commands[i].length + 5; j++) {
        c += ' ';
      }
      c += `- ${bin[commands[i]]['hint']}`;
    }
    c += '\n';
  }

  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

help.hint = 'Prints a list of available commands.';

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

repo.hint = 'Opens the Github repository of the website.';

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.`;
};

about.hint = 'Prints a short description of myself.';

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

resume.hint = 'Opens my latest resume.';

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

email.hint = 'Opens default mail client with my email.';

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

github.hint = 'Opens my Github profile.';

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

linkedin.hint = 'Opens my LinkedIn profile.';

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

echo.hint = 'Prints the arguments to the terminal.';

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

whoami.hint = 'Prints the current user.';

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

ls.hint = 'Lists all directories.';

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`;
};

cd.hint = 'Changes the current directory.';

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

date.hint = 'Prints the current date.';

export const vim = async (args: string[]): Promise<string> => {
  return `yes, i use vim. Weird flex, i know...`;
};

vim.hint = 'Prints small flex.';

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

sudo.hint = 'Gain superuser privileges.';

// Banner
export const banner = (args?: string[]): string => {
  return `
█████        ███                       ███████████                                   
░░███        ░░░                       ░█░░░███░░░█                                   
 ░███        ████  █████ █████  ██████ ░   ░███  ░   ██████  ████████  █████████████  
 ░███       ░░███ ░░███ ░░███  ███░░███    ░███     ███░░███░░███░░███░░███░░███░░███ 
 ░███        ░███  ░███  ░███ ░███████     ░███    ░███████  ░███ ░░░  ░███ ░███ ░███ 
 ░███      █ ░███  ░░███ ███  ░███░░░      ░███    ░███░░░   ░███      ░███ ░███ ░███ 
 ███████████ █████  ░░█████   ░░██████     █████   ░░██████  █████     █████░███ █████
░░░░░░░░░░░ ░░░░░    ░░░░░     ░░░░░░     ░░░░░     ░░░░░░  ░░░░░     ░░░░░ ░░░ ░░░░░ 

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

banner.hint = 'Prints the banner.';
