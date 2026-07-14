import { Component, h, ComponentInterface, State, Method } from '@stencil/core';

@Component({
  tag: 'slot-test-b',
  styleUrl: './styles/style.scss',
})
export class SlotTestB implements ComponentInterface {
  @State() itemsRendered = true;

  @Method()
  async toggleContent() {
    this.itemsRendered = !this.itemsRendered;
  }
  render() {
    return (
      <slot-test-a>
        <slot></slot>
        <slot name="named"></slot>
        {this.itemsRendered && [
          <span class="item-b">
            Cmp B<br />
            Default
            <br />
            Conditional
          </span>,
          <span slot="named" class="item-b">
            Cmp B<br />
            Named
            <br />
            Conditional
          </span>,
        ]}
      </slot-test-a>
    );
  }
}
