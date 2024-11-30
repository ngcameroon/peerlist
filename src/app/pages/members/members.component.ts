import { Component } from '@angular/core';
import { faBrandIcon, faIcon } from '../../utils/icon.utils';
import { MemberComponent } from './member/member.component';
import { members } from '../../members/members';

@Component({
  selector: 'ngc-members',
  standalone: true,
  imports: [MemberComponent],
  templateUrl: './members.component.html',
  styles: ``
})
export class MembersComponent {
  protected readonly faIcon = faIcon;
  protected readonly faBrandIcon = faBrandIcon;
  protected members = members
}
