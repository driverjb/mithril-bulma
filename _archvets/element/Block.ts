import m from 'mithril';
import { Common } from '../util/index.js';

interface BlockOptions extends Common.MbColorOptions, Common.MbCommonOptions {}

export const Block: m.Component<BlockOptions, { class: string }> = {
  oninit: (vnode) => {
    const { attrs } = vnode;
    const common = Common.prepareCommonOptions(attrs);
    const color = Common.prepareColorOptions(attrs);
    vnode.state.class = Common.prepareClasses([...common, ...color]);
  },
  view: (vnode) => {
    return m('div', { class: vnode.state.class }, vnode.children);
  }
};
