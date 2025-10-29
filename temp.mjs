import m from 'mithril'; // install this yourself
import 'bulma'; // install this yourself
import mb from './index.mjs';

const Demo = {
  view: () =>
    m(
      mb.Element.Box,
      m(mb.Element.Button, { color: 'primary', onclick: () => alert('Clicked!') }, 'Click Me!')
    )
};

m.mount(document.body, Demo);
