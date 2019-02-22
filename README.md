# eslint-config-elium

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for Javascript [@Elium](https://elium.com)

## Install

```bash
yarn add @eliumhq/eslint-config-elium --dev
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

Here's how to install everything you need:

```bash
yarn add --dev eslint eslint-config-standard eslint-config-standard-react eslint-config-prettier eslint-plugin-import eslint-plugin-graphql eslint-plugin-node eslint-plugin-prettier eslint-plugin-promise eslint-plugin-react eslint-plugin-standard eslint-plugin-react-hooks graphql prettier
```

Then, add this to your .eslintrc file:

```
{
  "extends": "@eliumhq/elium"
}
```

_Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint._

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.
