import { Component, h, ComponentInterface} from '@stencil/core';

@Component({
  tag: 'slot-test-a',
  styleUrl: './styles/style.scss',
})
export class SlotTestA implements ComponentInterface {
  render() {
    return (
      <div class="cmp-a-outer">
        <div class="cmp-a-default-slot">
          <slot />
        </div>
        <div class="cmp-a-named-slot">
          <slot name="named" />
        </div>
      </div>
    );
  }
}
