# Gatsby Theme Starter

Welcome to Gatsby Theme Starter

This repository template aims to help you quickstart a new Gatsby theme in a matter of seconds. :rocket:

For more informations on what are themes and why you could use them, just head to [Gatsby Theme Documentation](https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/).

## How does it work? :cyclone:

This repository uses the power of Yarn workspaces to provide you two separate projects

- Your theme, located in packages/
- A site using your brand new theme

Every change you perform on the theme is repercuted to the site.

## I want to see it work :eyes:

    yarn
    yarn workspace site develop

Then head on http://localhost:8000/
You should see a welcome page provided by the theme. You can try to edit some files in the theme and see the magic hapen.

## I want to create my Theme :raising_hand:

There are two options 1) You start from nothing 2) You already have a gatsby website you would like to turn into a Theme.

### Start from nothing :open_hands:

- Click on the "Use this template" button
- Edit the packages/gatsby-theme-simple/package.json and change the name of the plugin with your theme name
- Rename the packages/gatsby-theme-simple folder with your theme name (name must be the same that in the package.json)
- Edit the site/package.json and change the theme name with your theme name
- Edit the site/gatsby-config.js and change the theme name with your theme name

Run
yarn workspace site develop

### I already have a gatsby website :sunglasses:

Coming soon.
