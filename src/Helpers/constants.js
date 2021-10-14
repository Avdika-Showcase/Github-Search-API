export const searchCriteriaBtnText = ['Code', 'Commits', 'Issues and pull requests', 'Labels', 'Repositories', 'Topics', 'Users'];

export const helpText = {
  Code: 'Searches for query terms inside of a file. Due to the complexity of searching code, there are a few restrictions on how searches are performed: Only the default branch is considered. In most cases, this will be the master branch. Only files smaller than 384 KB are searchable. You must always include at least one search term when searching source code. For example, searching for language:go is not valid, while amazing language:go is.',
  Commits: 'Find commits via various criteria on the default branch (usually master).',
  Issues: 'Find issues by state and keyword.',
  Labels: 'Find labels in a repository with names or descriptions that match search keywords.',
  Repositories: 'Find repositories via various criteria.',
  Topics: 'Find topics via various criteria. Results are sorted by best match.',
  Users: 'Find users via various criteria.'
};
