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
  protected avatarUrl?: string;
  protected literal = '';

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit(): void {
    this.githubService.getGithubProfile(this.member.socials.github).subscribe({
      next: res => {
        this.avatarUrl = res.avatar_url
      },
      error: err => {
        if (this.member) this.literal = this.createUserProfile(this.member.name);
      }
    })
  }

  private createUserProfile(name: string): string {
    if (!name.trim()) throw new Error('Name must not be empty.');
    return name
      .split(' ')
      .filter(word => word.length > 0)
      .map(word => word.charAt(0).toUpperCase())
      .join('');
  }
  
}
