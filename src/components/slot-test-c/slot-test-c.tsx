import { Component, h, ComponentInterface, State, Method } from '@stencil/core';

@Component({
  tag: 'slot-test-c',
  styleUrl: './styles/style.scss',
})
export class SlotTestC implements ComponentInterface {
  @State() itemsRendered = true;

  @Method()
  async toggleContent() {
    this.itemsRendered = !this.itemsRendered;
  }

  render() {
    return (
      <slot-test-b>
        <slot></slot>
        <slot name="named"></slot>
        {this.itemsRendered && [
          <span class="item-c">
            Cmp C<br />
            Default
            <br />
            Conditional
          </span>,
          <span slot="named" class="item-c">
            Cmp C<br />
            Named
            <br />
            Conditional
          </span>,
        ]}
      </slot-test-b>
    );
  }
}
