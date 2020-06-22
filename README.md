# The Black School Cards
The Process Deck is a tarot-style interactive tool for brainstorming and designing creative activism projects. This is a digital version of the cards that were made by The Black School.

#### Public Access
The latest public release of the application can be found at:
 https://theblackschoolcards.herokuapp.com

#### Development Process
When making changes to the repository, **NEVER directly push or merge to `master` from your personal branch**. This repository is set up to automatically deploy when the `master` branch has an update. 

Instead, there is a `develop` branch that we will use for internal use. You should only merge or push to `develop`. Once we have thoroughly tested that `develop` works properly and it is up to standard for a new release, we will merge `develop` into `master`, triggereing a new deployment.

*Note: The `develop` branch has been set to the default branch so that it's a little harder to accidentally do a pull request with master.*
