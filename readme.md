# Mithril-Bulma

I've come to really enjoy using [MithrilJS](https://mithril.js.org/) for my web applications because
it allows a lot of freedom to build things the way you want to, rather than the way the tools want
you to. I also really like [Bulma](https://bulma.io/) because it's lightweight and easy to work
with. I decided to combine the two into a library to reduce the need to re-roll mithril components
with bulma in each project. So here it is.

# Usage

I'm providing this library unpackaged so that you can include it in any front-end project and allow
your tool chain to build it however you want. So it's pretty simple:

```bash
npm install --save mithril-bulma mithril bulma
```

Then in your project:

```javascript
import m from 'mithril';
//if you want to use vanilla bulma do this, otherwise it's up to you to customize and import bulma
import 'bulma';
import mb from 'mithril-bulma';

const demoPage = {
  view: () =>
    m(
      mb.Element.Box,
      { padding: { all: 5 } },
      m(
        mb.Element.Content,
        { size: attrs.size },
        m('h1', 'Title'),
        m('p', 'This is a paragraph.'),
        m('ul', m('li', 'With an'), m('li', 'Unordered'), m('li', 'list'))
      )
    )
};

m.route(document.body, '/', {
  '/': demoPage
});
```

I've been painstakingly creating detailed autocompletion that follows the Bulma documentation. If
you need to know how something works, read the Bulma documentation.

# Roadmap

- Elements
  - [x] Block
  - [x] Box
  - [ ] Button
  - [x] Content
  - [x] Delete
  - [ ] Icon
  - [ ] Image
  - [x] Notification
  - [x] Progress Bars
  - [ ] Table
  - [ ] Tag
  - [x] Title
- Components
  - [ ] Breadcrumb
  - [ ] Card
  - [ ] Dropdown
  - [ ] Menu
  - [ ] Message
  - [ ] Modal
  - [ ] Navbar
  - [ ] Pagination
  - [ ] Panel
  - [ ] Tabs
- Form
  - [ ] General
  - [ ] Input
  - [ ] Textarea
  - [ ] Select
  - [ ] Checkbox
  - [ ] Radio
  - [ ] File
- Columns
  - [ ] Basics
  - [ ] Sizes
  - [ ] Responsiveness
  - [ ] Nesting
  - [ ] Gap
  - [ ] Options
- Grid
  - [ ] Smart Grid
  - [ ] Fixed Grid
  - [ ] Grid Cells
  - [ ] Playground
- Layout
  - [ ] Container
  - [ ] Hero
  - [ ] Section
  - [ ] Level
  - [ ] Media Object
  - [ ] Footer
- Helpers
  - [x] Color
  - [ ] Color Pallette
  - [x] Spacing
  - [ ] Typeography
  - [ ] Visibility
  - [x] Flexbox
  - [x] Other
