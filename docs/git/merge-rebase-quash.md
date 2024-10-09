# Git (merge, rebase & squash)

## 1. Merging Changes Into master

When merging changes from a local branch into master, you should use merge. This will keep the full history and show the changes made on your feature branch clearly.

**Steps:**

1. Ensure you are on the master branch:

```bash
git checkout master
```

2. Pull the latest changes from the remote master:

```bash
git pull origin master
```

3. Merge the feature branch (e.g., branch-100) into master:

```bash
git merge branch-100
```

4. Push the changes back to the remote master:

```bash
git push origin master
```

## 2. Getting Updates from master Into Your Local Branch

When your feature branch (e.g., branch-100) is outdated and you need to get updates from master, use rebase. This keeps a clean history, making your changes appear as if they were made on top of the latest master commits.

**Steps:**

1. Switch to your feature branch:

```bash
git checkout branch-100
```

2. Rebase onto the latest master:

```bash
git fetch origin
git rebase origin/master
```

3. Resolve conflicts (if any): If there are conflicts, Git will pause the rebase and show you which files have conflicts. Follow these steps to resolve:

- Open the files with conflicts and fix them.
- After resolving conflicts, mark the files as resolved:

```bash
git add <filename>
```

- Continue the rebase process:

```bash
git rebase --continue
```

4. Push your changes (force-push required because rebase rewrites history):

```bash
git push --force-with-lease
```

## 3. Merging into main with Squashed Commits

When merging a feature branch into main, you want to squash your commits into one commit. This simplifies the history, showing only one commit for all the work done in that branch.

**Steps:**

1. Ensure you are on the main branch:

```bash
git checkout main
```

2. Pull the latest changes from main:

```bash
git pull origin main
```

3. Merge the feature branch (e.g., branch-100) with squashing:

```bash
git merge --squash branch-100
```

4. Commit the squashed changes: Git will stage all the changes, and you can create a single commit message summarizing the work done:

```bash
git commit -m "A summary of the changes in branch-100"
```

5. Push the changes to the remote main:

```bash
git push origin main
```

### Summary of Rules

- **Merging into master:** Always use git merge.
- **Getting updates from master:** Always use git rebase.
- **Merging into main:** Always use git merge --squash to condense all commits into one.
  This ensures a clean history with clarity when changes are brought into your feature branch and when final changes are applied to main.
