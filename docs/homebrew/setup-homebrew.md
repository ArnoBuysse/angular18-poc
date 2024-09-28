https://brew.sh/
https://www.youtube.com/watch?v=P9nFjQFNAqA
https://docs.brew.sh/Manpage#autoupdate-subcommand-interval-options

Step 1: Install Homebrew
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Step 2: Install Autoupdate
```bash
brew tap homebrew/autoupdate

brew install pinentry-mac


brew autoupdate start 604800 --cleanup --upgrade --sudo

brew autoupdate start --cleanup --upgrade --sudo
```

As mentions in the terminal add this line to the file, might need to create the folder first.

```bash
mkdir -p ~/.gnupg
```

```conf
// File: ~/.gnupg/gpg-agent.conf
pinentry-program /opt/homebrew/bin/pinentry-mac
```
