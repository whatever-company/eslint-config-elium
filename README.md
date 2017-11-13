# eslint-config-elium

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for Javascript [@Elium](https://elium.com)

## Install
```bash
yarn add @whatever/eslint-config-elium --dev
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

Then, add this to your .eslintrc file:

```
{
  "extends": "@whatever/elium"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

