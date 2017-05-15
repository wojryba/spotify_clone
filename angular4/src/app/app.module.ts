import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdProgressBarModule, MdSliderModule } from '@angular/material';

import { AppComponent } from './app.component';
import { WebplayerComponent } from './components/webplayer/webplayer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { PlayerComponent } from './components/player/player.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { UserComponent } from './components/user/user.component';
import { CategoryComponent } from './components/category/category.component';
import { SearchComponent } from './components/search/search.component';
import { MeComponent } from './components/me/me.component';
import { LoginComponent } from './components/login/login.component';

import { ApiService } from './services/api.service';
import { AuthGuardService } from './services/auth-guard.service';
import { MusicService } from './services/music.service';

import 'hammerjs';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: WebplayerComponent, canActivate: [AuthGuardService], children: [
    {path: '', component: MainComponent, canActivate: [AuthGuardService]},
    {path: 'playlist', component: PlaylistComponent, canActivate: [AuthGuardService]},
    {path: 'artist', component: ArtistComponent, canActivate: [AuthGuardService]},
    {path: 'album', component: AlbumComponent, canActivate: [AuthGuardService]},
    {path: 'user', component: UserComponent, canActivate: [AuthGuardService]},
    {path: 'category', component: CategoryComponent, canActivate: [AuthGuardService]},
    {path: 'search', component: SearchComponent, canActivate: [AuthGuardService]},
    {path: 'me', component: MeComponent, canActivate: [AuthGuardService]}
  ]},
];



@NgModule({
  declarations: [
    AppComponent,
    WebplayerComponent,
    SidebarComponent,
    MainComponent,
    PlayerComponent,
    PlaylistComponent,
    ArtistComponent,
    AlbumComponent,
    UserComponent,
    CategoryComponent,
    SearchComponent,
    MeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MdProgressBarModule,
    MdSliderModule
  ],
  providers: [ApiService, AuthGuardService, MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
