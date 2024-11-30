import { Routes } from '@angular/router';
import { MembersComponent } from './pages/members/members.component';

export const routes: Routes = [
    {
        path: '',
        component: MembersComponent
    },
    {
        path: '**',
        component: MembersComponent
    }
];
