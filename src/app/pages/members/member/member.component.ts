import { Component, Input, OnInit } from '@angular/core';
import { faBrandIcon } from '../../../utils/icon.utils';
import { GithubService } from '../../../service/github/github.service';
import { Member } from '../../../members/members';

@Component({
  selector: 'ngc-member',
  standalone: true,
  imports: [],
  templateUrl: './member.component.html',
  styles: ``
})
export class MemberComponent implements OnInit {
  protected readonly faBrandIcon = faBrandIcon;
  @Input() member!: Member
  protected avatarUrl = ""

  constructor(
    private githubService: GithubService
  ) {}

  ngOnInit(): void {
    this.githubService.getGithubProfile(this.member.socials.github).subscribe(res => {
      this.avatarUrl = res.avatar_url
    })
  }
}
