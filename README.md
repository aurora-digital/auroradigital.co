# Aurora Digital's Website

This is the code repository that powers our [website](https://auroradigital.co).

## Setup

The setup is automated and you can do it with three easy commands:

```bash
$ git clone https://github.com/aurora-digital/auroradigital.co

$ cd auroradigital.co

$ bin/setup
```

The `bin/setup` script assumes you have the following dependencies installed:

* [asdf](https://github.com/asdf-vm/asdf) - manages the language versions
* [yarn](https://yarnpkg.com/lang/en/) - JavaScript package manager

## Development

This is a Gatsby project that integrates with Forestry CMS. Forestry creates markdown and json files on the `data` folder. We then pick that up using the respective gatsby source plugins.

To run the server, simply call:

```bash
$ bin/server
```

On the `src` folder you have most of the actual frontend code. The subfolders are organized as such:
* assets - all media assets used by the website.
* components - base UI components
* hooks - react hooks
* pages - react components that are turned into HTML pages via server-side rendering
* sections - individual page sections, organized as react components
* styles - global CSS styles
* templates - react components that are used in dynamic server-side rendering

We recommend getting familiar with Gatsby before peeking at this code base.

## About

This repository is maintained by [Aurora](http://auroradigital.co).

If you need to contact the maintainer use or <a href="mailto:contact@auroradigital.co">reach out to us</a> if you don't have access.
