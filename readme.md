### StencilJS named slots bug reproduction

When passing a named slot content through multiple components, content gets slotted to default slot instead.

Bug was not present in 4.40.1.

### Running the demo

`npm install`

`npm run start`

### How this demo works

Demo has 3 `shadow: false` components, with different nesting depth. Every component has `named` slot as well as default slot.

`Component B` wraps around `Component A`, and `Component C` wraps around `Component B`.

`items` are being slotted into each component in multiple ways. Each `item` has text, detailing its parent component, slot it is supposed to go to, and its source (conditionally rendered by component itself or slotted from outside)

In this example:

- `Component A` has no `items` of its own, and has some slotted from outside.
- `Component B` has its own conditionally rendered `items` (one per slot), and two slotted from outside.
- `Component C` has its own conditionally rendered `items` (one per slot), two slotted from outside (and 2 from internal `Component B`).

On initial render everything works as expected.

Clicking `Toggle Externally Added Content` button adds (via `appendChild()`)/removes (via `remove()`) `span` elements with `[slot="named"]`. These are supposed to go to `named` slot, however this is true only for `Component A`. In other components `span`s go to default slot instead.

Clicking `Toggle Internal Conditional Content` toggles rendering of component's own content. Re-enabling internal content moves `Component C`'s own named slot item from its appropriate named slot to default slot.

Downgrading to `@stencil/core@4.40.1` restores correct behavior.