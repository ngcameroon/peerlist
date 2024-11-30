import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, map } from 'rxjs';

export interface Avatar{
  avatar_url: string
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  protected readonly apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getGithubProfile(username: string): Observable<Avatar> {
    return this.http.get<Avatar>(`${this.apiUrl}/users/${username}`).pipe(
      map(data => <Avatar>{ avatar_url: data.avatar_url })
    )
  }
}
