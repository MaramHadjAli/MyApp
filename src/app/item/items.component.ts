import { Component, NO_ERRORS_SCHEMA, inject } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular'
import { Page } from '@nativescript/core'
import { ItemService } from './item.service'
import { registerElement } from '@nativescript/angular';

registerElement('RadListView', () => require('nativescript-ui-listview').RadListView);
registerElement('StackLayout', () => require('@nativescript/core').StackLayout);

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
  imports: [NativeScriptCommonModule, NativeScriptRouterModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ItemsComponent {
 items = Array.from({ length: 100 }, (_, i) => `Item #${i + 1}`);

  loadMore() {
    const start = this.items.length;
    this.items.push(...Array.from({ length: 100 }, (_, i) => `Item #${start + i + 1}`));
  }
}
