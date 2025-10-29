# Mithril Bulma

## Description

A collection of mithril components styled with the bulma css library. It offers auto-completion to take the work out of
working with these two excellent tools.

## Installation

The mithril-bulma package does _not_ include bulma out of the box. This is so you can include it yourself and implement
any customizations like fonts, colors, etc. before building it into your project.

```shell
npm install --save mithril-bulma bulma mithril
```

## Usage

```javascript
import m from 'mithril'; // install this yourself
import 'bulma'; // install this yourself
import mb from 'mithril-bulma';

const Demo = {
  view: () =>
    m(
      mb.Element.Box,
      m(mb.Element.Button, { color: 'primary', onclick: () => alert('Clicked!') }, 'Click Me!')
    )
};

m.mount(document.body, Demo);
```

## To-Do

More detailed documentation. In the meantime, the various components match up to the Bulma
documentation and the JSDoc contains links directly to the components.

Reference: https://bulma.io/documentation
