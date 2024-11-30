import { Component } from '@angular/core';
import { faBrandIcon } from '../../../utils/icon.utils';

@Component({
  selector: 'ngc-member',
  standalone: true,
  imports: [],
  templateUrl: './member.component.html',
  styles: ``
})
export class MemberComponent {
  protected readonly faBrandIcon = faBrandIcon;
}
