webpackJsonp([1,4],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(189),
        styles: [__webpack_require__(174)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_webplayer_webplayer_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_sidebar_sidebar_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_main_main_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_player_player_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_playlist_playlist_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_artist_artist_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_album_album_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_user_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_category_category_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_search_search_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_me_me_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_api_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_music_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_hammerjs__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__["a" /* LoginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_webplayer_webplayer_component__["a" /* WebplayerComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_main_main_component__["a" /* MainComponent */] },
            { path: 'playlist', component: __WEBPACK_IMPORTED_MODULE_12__components_playlist_playlist_component__["a" /* PlaylistComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]] },
            { path: 'artist', component: __WEBPACK_IMPORTED_MODULE_13__components_artist_artist_component__["a" /* ArtistComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]] },
            { path: 'album', component: __WEBPACK_IMPORTED_MODULE_14__components_album_album_component__["a" /* AlbumComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]] },
            { path: 'user', component: __WEBPACK_IMPORTED_MODULE_15__components_user_user_component__["a" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]] },
            { path: 'category', component: __WEBPACK_IMPORTED_MODULE_16__components_category_category_component__["a" /* CategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]] },
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_17__components_search_search_component__["a" /* SearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]] },
            { path: 'me', component: __WEBPACK_IMPORTED_MODULE_18__components_me_me_component__["a" /* MeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */]] }
        ] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_webplayer_webplayer_component__["a" /* WebplayerComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_player_player_component__["a" /* PlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_playlist_playlist_component__["a" /* PlaylistComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_artist_artist_component__["a" /* ArtistComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_album_album_component__["a" /* AlbumComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_category_category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_me_me_component__["a" /* MeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__["a" /* LoginComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdSliderModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_20__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_21__services_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_22__services_music_service__["a" /* MusicService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_music_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlbumComponent = (function () {
    function AlbumComponent(api, music, router) {
        this.api = api;
        this.music = music;
        this.router = router;
        this.show = false;
    }
    AlbumComponent.prototype.showPlay = function (i) {
        this.selected = i;
    };
    AlbumComponent.prototype.hidePlay = function (i) {
        this.selected = undefined;
    };
    AlbumComponent.prototype.ngOnInit = function () {
        if (this.api.album) {
            this.album = this.api.album;
            this.checkAlbum();
        }
    };
    AlbumComponent.prototype.playSong = function (i) {
        this.music.playlist = this.album.tracks.items;
        this.music.play(i);
    };
    AlbumComponent.prototype.openArtist = function (i) {
        var _this = this;
        this.api.useLink(i.href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.artist = res;
            _this.router.navigate(['/artist']);
        }, function (error) { return console.log(error); });
    };
    AlbumComponent.prototype.checkAlbum = function () {
        var _this = this;
        this.api.checkIfAlbumSaved(this.album.id).subscribe(function (response) {
            _this.saved = JSON.parse(response['_body']);
        }, function (error) { return console.log(error); });
    };
    AlbumComponent.prototype.saveAlbum = function () {
        var _this = this;
        this.api.saveAlbum(this.album.id).subscribe(function (response) {
            _this.saved = true;
        }, function (error) { return console.log(error); });
    };
    AlbumComponent.prototype.deleteAlbum = function () {
        var _this = this;
        this.api.deleteAlbum(this.album.id).subscribe(function (response) {
            _this.saved = false;
            console.log(response);
        }, function (error) { return console.log(error); });
    };
    return AlbumComponent;
}());
AlbumComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-album',
        template: __webpack_require__(190),
        styles: [__webpack_require__(175)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["a" /* trigger */])('enter', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('150ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({ opacity: 1 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_music_service__["a" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_music_service__["a" /* MusicService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AlbumComponent);

var _a, _b, _c;
//# sourceMappingURL=album.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_music_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArtistComponent = (function () {
    function ArtistComponent(api, router, music) {
        this.api = api;
        this.router = router;
        this.music = music;
        this.view = 'overview';
    }
    // UI CHANGES
    // show and hide play icon
    ArtistComponent.prototype.showPlay = function (i) {
        this.selected = i;
    };
    ArtistComponent.prototype.hidePlay = function (i) {
        this.selected = undefined;
    };
    // show/ hide play buttons
    ArtistComponent.prototype.showBackgroundPlay = function (i) {
        this.imgSelected = i;
    };
    ArtistComponent.prototype.hideBackgroundPlay = function (i) {
        this.imgSelected = undefined;
    };
    // INITIALIZATION
    ArtistComponent.prototype.ngOnInit = function () {
        if (this.api.artist) {
            this.getInfo();
            this.checkIfArtistFollowed();
        }
    };
    // get all the neccerry data
    ArtistComponent.prototype.getInfo = function () {
        var _this = this;
        this.artist = this.api.artist;
        console.log(this.artist);
        this.api.getArtistEverything(this.artist.id).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.relatedArtists = res.relatedArtists.artists;
            _this.topTracks = res.topTracks.tracks;
            _this.albums = res.albums;
        }, function (error) { return console.log(error); });
    };
    // check if artist is followed
    ArtistComponent.prototype.checkIfArtistFollowed = function () {
        var _this = this;
        this.api.checkIfArtistFollowed(this.artist.id).subscribe(function (response) {
            _this.followed = JSON.parse(response['_body'])[0];
        }, function (error) { return console.log(error); });
    };
    ArtistComponent.prototype.followArtist = function () {
        var _this = this;
        this.api.followArtist(this.artist.id).subscribe(function (response) {
            _this.followed = true;
        }, function (error) { return console.log(error); });
    };
    ArtistComponent.prototype.unFollowArtist = function () {
        var _this = this;
        this.api.unFollowArtist(this.artist.id).subscribe(function (response) {
            _this.followed = false;
        }, function (error) { return console.log(error); });
    };
    //TOP TRACKS
    // play chosen song from top tracks
    ArtistComponent.prototype.playSong = function (i) {
        this.music.playlist = this.topTracks;
        this.music.play(i);
    };
    // ALBUMS
    // open certin album
    ArtistComponent.prototype.openAlbum = function (i) {
        var _this = this;
        this.api.useLink(this.albums.items[i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.album = res;
            _this.router.navigate(['/album']);
        }, function (error) { return console.log(error); });
    };
    // play chosen album
    ArtistComponent.prototype.playAlbum = function (event, i) {
        var _this = this;
        event.stopPropagation();
        this.api.useLink(this.albums.items[i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.music.playlist = res.tracks.items;
            _this.music.play(0);
        }, function (error) { return console.log(error); });
    };
    // open artist from artist list benefe albums
    ArtistComponent.prototype.chooseAndOpenArtist = function (i, j) {
        var _this = this;
        this.api.useLink(this.albums.items[i].artists[j].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.artist = res;
            _this.getInfo();
        }, function (error) { return console.log(error); });
    };
    // RELATED ARTISTS
    // change to diffrent artist
    ArtistComponent.prototype.artistR = function (i) {
        var _this = this;
        this.api.useLink(this.relatedArtists[i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.artist = res;
            _this.getInfo();
            _this.view = 'overview';
        }, function (error) { return console.log(error); });
    };
    // play top tracks of chosen artist
    ArtistComponent.prototype.playArtist = function (event, i) {
        var _this = this;
        event.stopPropagation();
        this.api.getArtistEverything(this.relatedArtists[i].id).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.music.playlist = res.topTracks.tracks;
            _this.music.play(0);
        }, function (error) { return console.log(error); });
    };
    return ArtistComponent;
}());
ArtistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-artist',
        template: __webpack_require__(191),
        styles: [__webpack_require__(176)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["a" /* trigger */])('enter', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('150ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({ opacity: 1 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_music_service__["a" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_music_service__["a" /* MusicService */]) === "function" && _c || Object])
], ArtistComponent);

var _a, _b, _c;
//# sourceMappingURL=artist.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_music_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryComponent = (function () {
    function CategoryComponent(api, router, music) {
        this.api = api;
        this.router = router;
        this.music = music;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        if (this.api.category) {
            this.playlists = this.api.category;
            console.log(this.playlists);
        }
    };
    // show/ hide play buttons
    CategoryComponent.prototype.showBackgroundPlay = function (i) {
        this.imgSelected = i;
    };
    CategoryComponent.prototype.hideBackgroundPlay = function (i) {
        this.imgSelected = undefined;
    };
    // open playlist
    CategoryComponent.prototype.openPlaylist = function (i) {
        var _this = this;
        this.api.useLink(this.playlists.items[i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.playlist = res;
            _this.router.navigate(['/playlist']);
        }, function (error) { return console.log(error); });
    };
    CategoryComponent.prototype.playPlaylist = function (event, i) {
        var _this = this;
        event.stopPropagation();
        this.api.useLink(this.playlists.items[i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.music.playlist = res.tracks.items;
            _this.music.play(i);
        }, function (error) { return console.log(error); });
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-category',
        template: __webpack_require__(192),
        styles: [__webpack_require__(177)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["a" /* trigger */])('enter', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('150ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({ opacity: 1 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_music_service__["a" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_music_service__["a" /* MusicService */]) === "function" && _c || Object])
], CategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(api) {
        this.api = api;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.logIn = function () {
        this.api.login().subscribe(function (response) {
            window.location.assign(response['_body']);
        }, function (error) { return console.log(error); });
    };
    LoginComponent.prototype.logOut = function () {
        console.log('logout');
        localStorage.removeItem('code');
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(193),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_music_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = (function () {
    function MainComponent(api, router, music) {
        this.api = api;
        this.router = router;
        this.music = music;
        this.show = false;
        this.switch = 'chosen';
    }
    // UI CHANGES
    // show/hide play buttons
    MainComponent.prototype.showBackgroundPlay = function (i) {
        this.imgSelected = i;
    };
    MainComponent.prototype.hideBackgroundPlay = function (i) {
        this.imgSelected = undefined;
    };
    // INITIATION
    MainComponent.prototype.ngOnInit = function () {
        this.getFeaturedPlaylists();
        this.getCategoriesAndReleses();
    };
    // get featured playlists
    MainComponent.prototype.getFeaturedPlaylists = function () {
        var _this = this;
        this.api.getFeaturedPlaylists().subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.message = res.message;
            _this.playlists = res.playlists;
        }, function (error) {
            if (_this.api.auth) {
                // window.location.reload();
            }
            else {
                _this.router.navigate['login'];
            }
        });
    };
    // get categories and releses
    MainComponent.prototype.getCategoriesAndReleses = function () {
        var _this = this;
        this.api.getCategoriesAndReleses().subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.categories = res.categories.categories;
        }, function (error) { return console.log(error); });
    };
    // FEATURED PLAYLISTS
    // open playlist
    MainComponent.prototype.openPlaylist = function (i) {
        var _this = this;
        this.api.useLink(this.playlists['items'][i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.playlist = res;
            _this.router.navigate(['/playlist']);
        }, function (error) { return console.log(error); });
    };
    // play clicked playlist
    MainComponent.prototype.playPlaylist = function (event, i) {
        var _this = this;
        event.stopPropagation();
        this.api.useLink(this.playlists.items[i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.music.playlist = res.tracks.items;
            _this.music.play(0);
        }, function (error) { return console.log(error); });
    };
    // find more playlists click handle
    MainComponent.prototype.findMore = function () {
        var _this = this;
        this.api.useLink(this.playlists['next']).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            if (res.playlists.next == _this.playlists['next']) {
                _this.show = true;
                setTimeout(function () { return _this.show = false; }, 1000);
            }
            else {
                var items = _this.playlists['items'];
                items = items.concat(res.playlists.items);
                res.playlists.items = items;
                _this.playlists = res.playlists;
            }
        }, function (error) {
            _this.show = true;
            setTimeout(function () { return _this.show = false; }, 1000);
        });
    };
    // CATEGORIS PAGE
    // open category
    MainComponent.prototype.openCategory = function (i) {
        var _this = this;
        this.api.getCategory(this.categories.items[i].id).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.category = res.playlists;
            _this.router.navigate(['/category']);
        }, function (error) { return console.log(error); });
    };
    // NEW RELESES
    // open album
    MainComponent.prototype.openAlbum = function (i) {
        var _this = this;
        this.api.useLink(this.newReleses.items[i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.album = res;
            _this.router.navigate(['/album']);
        }, function (error) { return console.log(error); });
    };
    // play album
    MainComponent.prototype.playAlbum = function (event, i) {
        var _this = this;
        event.stopPropagation();
        this.api.useLink(this.newReleses.items[i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.music.playlist = res.tracks.items;
            _this.music.play(0);
        }, function (error) { return console.log(error); });
    };
    // open artist
    MainComponent.prototype.openArtist = function (event, i, j) {
        var _this = this;
        event.stopPropagation();
        this.api.useLink(this.newReleses.items[i].artists[j].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.artist = res;
            _this.router.navigate(['/artist']);
        }, function (error) { return console.log(error); });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__(194),
        styles: [__webpack_require__(179)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["a" /* trigger */])('enter', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('150ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({ opacity: 1 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_music_service__["a" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_music_service__["a" /* MusicService */]) === "function" && _c || Object])
], MainComponent);

var _a, _b, _c;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_music_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MeComponent = (function () {
    function MeComponent(api, music, router) {
        this.api = api;
        this.music = music;
        this.router = router;
        this.switch = 'playlists';
    }
    // UI CHANGES
    // show and hide play icon
    MeComponent.prototype.showPlay = function (i) {
        this.selected = i;
    };
    MeComponent.prototype.hidePlay = function (i) {
        this.selected = undefined;
    };
    // show/ hide play buttons
    MeComponent.prototype.showBackgroundPlay = function (i) {
        this.imgSelected = i;
    };
    MeComponent.prototype.hideBackgroundPlay = function (i) {
        this.imgSelected = undefined;
    };
    MeComponent.prototype.ngOnInit = function () {
        this.getUserMusic();
    };
    // get all the needed data
    MeComponent.prototype.getUserMusic = function () {
        var _this = this;
        this.api.getUserMusic().subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.albums = res.albums;
            _this.tracks = res.tracks;
            _this.artists = res.artists.artists;
            _this.playlists = res.playlists;
            console.log(res);
        }, function (error) { return console.log(error); });
    };
    // tracks
    MeComponent.prototype.playSong = function (i) {
        this.music.playlist = this.tracks.items;
        this.music.play(i);
    };
    // ARTISTS
    MeComponent.prototype.openArtist = function (i, j) {
        var _this = this;
        if (j) {
            console.log('YEY');
        }
        else {
            this.api.useLink(this.artists.items[i].href).subscribe(function (response) {
                var res = JSON.parse(response['_body']);
                _this.api.artist = res;
                _this.router.navigate(['/artist']);
            }, function (error) { return console.log(error); });
        }
    };
    MeComponent.prototype.playArtist = function (event, i) {
        var _this = this;
        event.stopPropagation();
        this.api.getArtistEverything(this.artists.items[i].id).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.music.playlist = res.topTracks.tracks;
            _this.music.play(0);
        }, function (error) { return console.log(error); });
    };
    // ALBUMS
    MeComponent.prototype.openAlbum = function (i) {
        var _this = this;
        this.api.useLink(this.albums.items[i].album.href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.album = res;
            _this.router.navigate(['/album']);
        }, function (error) { return console.log(error); });
    };
    MeComponent.prototype.playAlbum = function (event, i) {
        var _this = this;
        event.stopPropagation();
        this.api.useLink(this.albums.items[i].album.href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.music.playlist = res.tracks.items;
            _this.music.play(0);
        }, function (error) { return console.log(error); });
    };
    // PLAYLISTS
    MeComponent.prototype.openPlaylist = function (i) {
        var _this = this;
        this.api.useLink(this.playlists.items[i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.playlist = res;
            _this.router.navigate(['/playlist']);
        }, function (error) { return console.log(error); });
    };
    MeComponent.prototype.playPlaylist = function (event, i) {
        var _this = this;
        event.stopPropagation();
        this.api.useLink(this.playlists.items[i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.music.playlist = res.tracks.items;
            _this.music.play(0);
        }, function (error) { return console.log(error); });
    };
    return MeComponent;
}());
MeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-me',
        template: __webpack_require__(195),
        styles: [__webpack_require__(180)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["a" /* trigger */])('enter', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('150ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({ opacity: 1 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_music_service__["a" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_music_service__["a" /* MusicService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], MeComponent);

var _a, _b, _c;
//# sourceMappingURL=me.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_music_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerComponent = (function () {
    function PlayerComponent(api, music, router) {
        this.api = api;
        this.music = music;
        this.router = router;
        this.slider = false;
        this.showsiebar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
    }
    PlayerComponent.prototype.ngOnInit = function () {
        if (JSON.parse(localStorage.getItem('playlist'))) {
            this.music.playlist = JSON.parse(localStorage.getItem('playlist'));
            this.music.i = JSON.parse(localStorage.getItem('i'));
            this.music.track = JSON.parse(localStorage.getItem('track'));
            this.music.audio.src = this.music.track.preview_url;
            this.music.checkIfTrackSaved();
        }
    };
    PlayerComponent.prototype.sidebar = function () {
        this.showsiebar.emit();
    };
    PlayerComponent.prototype.progressBar = function (event) {
        if (this.music.audio.duration) {
            var t = (this.music.value * this.music.audio.duration) / 100;
            this.music.changeTime(t);
        }
    };
    PlayerComponent.prototype.volume = function (event) {
        if (this.music.audio.duration) {
            this.music.changeVolume();
        }
    };
    // OPEN ARTIST AND ALBUM PAGES
    PlayerComponent.prototype.album = function () {
        var _this = this;
        this.api.useLink(this.music.track.album.href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.album = res;
            _this.router.navigate(['/album']);
        }, function (error) { return console.log(error); });
    };
    PlayerComponent.prototype.artist = function () {
        var _this = this;
        this.api.useLink(this.music.track.artists[0].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.artist = res;
            _this.router.navigate(['/artist']);
        }, function (error) { return console.log(error); });
    };
    // saving tracks
    PlayerComponent.prototype.saveTrack = function () {
        var _this = this;
        this.api.saveTrack(this.music.track.id).subscribe(function (response) {
            _this.music.saved = true;
        }, function (error) { return console.log(error); });
    };
    PlayerComponent.prototype.deleteTrack = function () {
        var _this = this;
        this.api.checkIfTrackSaved(this.music.track.id).subscribe(function (response) {
            _this.music.saved = false;
        }, function (error) { return console.log(error); });
    };
    return PlayerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], PlayerComponent.prototype, "mobileview", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])(),
    __metadata("design:type", Object)
], PlayerComponent.prototype, "showsiebar", void 0);
PlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-player',
        template: __webpack_require__(196),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_music_service__["a" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_music_service__["a" /* MusicService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PlayerComponent);

var _a, _b, _c;
//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_music_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlaylistComponent = (function () {
    function PlaylistComponent(api, music, router) {
        this.api = api;
        this.music = music;
        this.router = router;
        this.whitespace = "&nbsp;";
        this.show = false;
    }
    PlaylistComponent.prototype.showPlay = function (i) {
        this.selected = i;
    };
    PlaylistComponent.prototype.hidePlay = function (i) {
        this.selected = undefined;
    };
    PlaylistComponent.prototype.ngOnInit = function () {
        if (this.api.playlist) {
            this.playlist = this.api.playlist;
            this.checkIfPlaylistFollowed();
        }
    };
    PlaylistComponent.prototype.checkIfPlaylistFollowed = function () {
        var _this = this;
        this.api.checkIfPlaylistFollowed(this.playlist.owner.id, this.playlist.id).subscribe(function (response) {
            _this.followed = JSON.parse(response['_body']);
        }, function (error) { return console.log(error); });
    };
    PlaylistComponent.prototype.playSong = function (i) {
        this.music.playlist = this.playlist.tracks.items;
        this.music.play(i);
    };
    // OPEN ARTIST
    PlaylistComponent.prototype.artistR = function (i, j) {
        var _this = this;
        this.api.useLink(this.playlist.tracks.items[i].track.artists[j].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.artist = res;
            _this.router.navigate(['/artist']);
        }, function (error) { return console.log(error); });
    };
    // open user who created a playlist
    PlaylistComponent.prototype.openUser = function () {
        var _this = this;
        this.api.useLink(this.playlist.owner.href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.user = res;
            _this.router.navigate(['/user']);
        }, function (error) { return console.log(error); });
    };
    PlaylistComponent.prototype.followPlaylist = function () {
        var _this = this;
        this.api.followPlaylist(this.playlist.owner.id, this.playlist.id).subscribe(function (response) {
            _this.followed = true;
        }, function (error) { return console.log(error); });
    };
    PlaylistComponent.prototype.unFollowPlaylist = function () {
        var _this = this;
        this.api.unFollowPlaylist(this.playlist.owner.id, this.playlist.id).subscribe(function (response) {
            _this.followed = false;
        }, function (error) { return console.log(error); });
    };
    return PlaylistComponent;
}());
PlaylistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-playlist',
        template: __webpack_require__(197),
        styles: [__webpack_require__(182)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["a" /* trigger */])('enter', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["e" /* animate */])('150ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["c" /* style */])({ opacity: 1 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_music_service__["a" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_music_service__["a" /* MusicService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], PlaylistComponent);

var _a, _b, _c;
//# sourceMappingURL=playlist.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_music_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = (function () {
    function SearchComponent(api, music, router) {
        this.api = api;
        this.music = music;
        this.router = router;
        this.timeout = null;
        this.whitespace = '&nbsp;';
        this.show = 'top';
    }
    // UI CHANGES
    // show and hide play icon
    SearchComponent.prototype.showPlay = function (i) {
        this.selected = i;
    };
    SearchComponent.prototype.hidePlay = function (i) {
        this.selected = undefined;
    };
    // show/ hide play buttons
    SearchComponent.prototype.showBackgroundPlay = function (i) {
        this.imgSelected = i;
    };
    SearchComponent.prototype.hideBackgroundPlay = function (i) {
        this.imgSelected = undefined;
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    // search for the query
    SearchComponent.prototype.searchInput = function (event, search) {
        var _this = this;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(function () {
            _this.api.search(search.value).subscribe(function (response) {
                var res = JSON.parse(response['_body']);
                _this.tracks = res.tracks.tracks;
                _this.albums = res.albums.albums;
                _this.artists = res.artists.artists;
                _this.playlists = res.playlists.playlists;
                _this.overview = {
                    tracks: res.tracks.tracks.items.slice(0, 6),
                    albums: res.albums.albums.items.slice(0, 6),
                    artists: res.artists.artists.items.slice(0, 6),
                    playlists: res.playlists.playlists.items.slice(0, 6)
                };
                console.log(res);
                console.log(_this.overview);
            });
        }, 500);
    };
    // tracks
    SearchComponent.prototype.playSong = function (i) {
        this.music.playlist = this.tracks.items;
        this.music.play(i);
    };
    SearchComponent.prototype.findMoreTracks = function () {
        var _this = this;
        this.api.useLink(this.tracks['next']).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            console.log(res);
            if (res.tracks.next == _this.tracks['next']) {
                console.log('no more');
            }
            else {
                var items = _this.tracks['items'];
                items = items.concat(res.tracks.items);
                res.tracks.items = items;
                _this.tracks = res.tracks;
            }
        }, function (error) { return console.log(error); });
    };
    // ARTISTS
    SearchComponent.prototype.openArtist = function (i, j) {
        var _this = this;
        if (j) {
            console.log('YEY');
        }
        else {
            this.api.useLink(this.artists.items[i].href).subscribe(function (response) {
                var res = JSON.parse(response['_body']);
                _this.api.artist = res;
                _this.router.navigate(['/artist']);
            }, function (error) { return console.log(error); });
        }
    };
    SearchComponent.prototype.playArtist = function (event, i) {
        var _this = this;
        event.stopPropagation();
        this.api.getArtistEverything(this.artists.items[i].id).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.music.playlist = res.topTracks.tracks;
            _this.music.play(0);
        }, function (error) { return console.log(error); });
    };
    SearchComponent.prototype.findMoreArtists = function () {
        var _this = this;
        this.api.useLink(this.artists['next']).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            console.log(res);
            if (res.artists.next == _this.artists['next']) {
                console.log('no more');
            }
            else {
                var items = _this.artists['items'];
                items = items.concat(res.artists.items);
                res.artists.items = items;
                _this.artists = res.artists;
            }
        }, function (error) { return console.log(error); });
    };
    // ALBUMS
    SearchComponent.prototype.openAlbum = function (i) {
        var _this = this;
        this.api.useLink(this.albums.items[i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.album = res;
            _this.router.navigate(['/album']);
        }, function (error) { return console.log(error); });
    };
    SearchComponent.prototype.playAlbum = function (event, i) {
        var _this = this;
        event.stopPropagation();
        this.api.useLink(this.albums.items[i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.music.playlist = res.tracks.items;
            _this.music.play(0);
        }, function (error) { return console.log(error); });
    };
    SearchComponent.prototype.findMoreAlbums = function () {
        var _this = this;
        this.api.useLink(this.albums['next']).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            console.log(res);
            if (res.albums.next == _this.albums['next']) {
                console.log('no more');
            }
            else {
                var items = _this.albums['items'];
                items = items.concat(res.albums.items);
                res.albums.items = items;
                _this.albums = res.albums;
            }
        }, function (error) { return console.log(error); });
    };
    // PLAYLISTS
    SearchComponent.prototype.openPlaylist = function (i) {
        var _this = this;
        this.api.useLink(this.playlists.items[i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.playlist = res;
            _this.router.navigate(['/playlist']);
        }, function (error) { return console.log(error); });
    };
    SearchComponent.prototype.playPlaylist = function (event, i) {
        var _this = this;
        event.stopPropagation();
        this.api.useLink(this.playlists.items[i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.music.playlist = res.tracks.items;
            _this.music.play(0);
        }, function (error) { return console.log(error); });
    };
    SearchComponent.prototype.onScroll = function (event) {
        console.log();
    };
    SearchComponent.prototype.findMorePlaylists = function () {
        var _this = this;
        this.api.useLink(this.playlists['next']).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            if (res.playlists.next == _this.playlists['next']) {
                console.log('no more');
            }
            else {
                var items = _this.playlists['items'];
                items = items.concat(res.playlists.items);
                res.playlists.items = items;
                _this.playlists = res.playlists;
            }
        }, function (error) { return console.log(error); });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__(198),
        styles: [__webpack_require__(183)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["a" /* trigger */])('enter', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('150ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["c" /* style */])({ opacity: 1 }))
                ])
            ])
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_music_service__["a" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_music_service__["a" /* MusicService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SearchComponent);

var _a, _b, _c;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_music_service__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(api, music, router) {
        this.api = api;
        this.music = music;
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getMe().subscribe(function (response) {
            _this.user = JSON.parse(response['_body']);
            console.log(_this.user);
        }, function (error) {
            if (_this.api.auth) {
                // window.location.reload();
            }
            else {
                _this.router.navigate['login'];
            }
        });
    };
    SidebarComponent.prototype.logOut = function () {
        localStorage.removeItem('code');
        this.router.navigate(['/login']);
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__(199),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_music_service__["a" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_music_service__["a" /* MusicService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SidebarComponent);

var _a, _b, _c;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_music_service__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = (function () {
    function UserComponent(api, router, music) {
        this.api = api;
        this.router = router;
        this.music = music;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    UserComponent.prototype.getData = function () {
        var _this = this;
        if (this.api.user) {
            this.user = this.api.user;
            this.api.getUserPlaylists(this.user.id).subscribe(function (response) {
                var res = JSON.parse(response['_body']);
                _this.playlists = res;
            }, function (error) { return console.log(error); });
        }
    };
    UserComponent.prototype.openPlaylist = function (i) {
        var _this = this;
        this.api.useLink(this.playlists.items[i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.api.playlist = res;
            _this.router.navigate(['/playlist']);
        }, function (error) { return console.log(error); });
    };
    // show/ hide play buttons
    UserComponent.prototype.showBackgroundPlay = function (i) {
        this.imgSelected = i;
    };
    UserComponent.prototype.hideBackgroundPlay = function (i) {
        this.imgSelected = undefined;
    };
    // play selected playlist
    UserComponent.prototype.playPlaylist = function (event, i) {
        var _this = this;
        event.stopPropagation();
        this.api.useLink(this.playlists.items[i].href).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            _this.music.playlist = res.tracks.items;
            _this.music.play(i);
        }, function (error) { return console.log(error); });
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__(200),
        styles: [__webpack_require__(185)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["a" /* trigger */])('enter', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["d" /* transition */])(':enter', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('150ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["c" /* style */])({ opacity: 1 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_music_service__["a" /* MusicService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_music_service__["a" /* MusicService */]) === "function" && _c || Object])
], UserComponent);

var _a, _b, _c;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_api_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebplayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebplayerComponent = (function () {
    function WebplayerComponent(route, router, api, auth) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.auth = auth;
        this.mobileview = false;
        this.hidesidebar = false;
        this.innerWidth = (window.screen.width);
        if (this.innerWidth < 426) {
            this.mobileview = true;
            this.hidesidebar = true;
        }
        ;
    }
    WebplayerComponent.prototype.ngOnInit = function () {
        this.getCode();
    };
    WebplayerComponent.prototype.getCode = function () {
        var _this = this;
        if (this.route.snapshot.queryParams.code) {
            this.api.postCode(this.route.snapshot.queryParams.code).subscribe(function (response) {
                localStorage.setItem('code', response['_body']);
                setTimeout(function () { return _this.router.navigate['']; }, 500);
            }, function (error) { return console.log(error); });
        }
        else {
            if (this.auth.canActivate()) {
                this.router.navigate['/login'];
            }
        }
    };
    WebplayerComponent.prototype.showsiebar = function () {
        this.hidesidebar = !this.hidesidebar;
    };
    return WebplayerComponent;
}());
WebplayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-webplayer',
        template: __webpack_require__(201),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_api_service__["a" /* ApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__["a" /* AuthGuardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_guard_service__["a" /* AuthGuardService */]) === "function" && _d || Object])
], WebplayerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=webplayer.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".playlistInfo {\r\n  width: 25%;\r\n  height: 100%;\r\n  margin-left: 12%;\r\n  margin-top: 2.5%;\r\n  float: left;\r\n  text-align: center;\r\n}\r\n\r\n.playlistInfo img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.tracks {\r\n  width: 55%;\r\n  height: 100%;\r\n  float: right;\r\n  margin-top: 2.5%;\r\n}\r\n\r\n.tracks p {\r\n  display: inline-block;\r\n}\r\n\r\n.tracks ul {\r\n  list-style-type: none;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .playlistInfo {\r\n    float: none;\r\n    width: 60%;\r\n    margin: auto;\r\n    min-height: 500px;\r\n  }\r\n\r\n  .tracks {\r\n    float: left;\r\n    width: 100%;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".buttons {\r\n  display: block;\r\n}\r\n\r\n.round {\r\n  border-radius: 100%;\r\n}\r\n\r\n.playlist {\r\n  text-align: center;\r\n  min-height: 300px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient:vertical;\r\n  -webkit-box-direction:normal;\r\n      -ms-flex-direction:column;\r\n          flex-direction:column;\r\n  min-height: 250px;\r\n}\r\n\r\n\r\n.topTracks {\r\n  text-align: center;\r\n  max-width: 1050px;\r\n  max-height: 350px;\r\n  overflow-y: scroll;\r\n  margin: auto;\r\n}\r\n\r\n.topTracks ul {\r\n  text-align: left;\r\n  list-style-type: none;\r\n}\r\n\r\n.topTracks li {\r\n  margin-top: 50px;\r\n}\r\n\r\n.about {\r\n  margin: auto;\r\n  text-align: center;\r\n  max-width: 1050px;\r\n}\r\n\r\n.about ul {\r\n  list-style-type: none;\r\n  text-align: left;\r\n  margin-left: 20%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".webplayer {\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;\r\n}\r\n\r\n.login {\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".tracks {\r\n  margin-left: 15%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".info {\r\n  position: relative;\r\n  top: 5%;\r\n  left: 1%;\r\n  width: 15%;\r\n  height: 100%;\r\n}\r\n\r\n.info img {\r\n  float: left;\r\n  width: auto;\r\n  height: auto;\r\n  height: 80%;\r\n  margin-right: 2%;;\r\n}\r\n\r\n.info i {\r\n  float: right;\r\n  margin-top: -20%;\r\n  margin-right: 5%;\r\n}\r\n\r\n.controls {\r\n  position: relative;\r\n  left: 40%;\r\n  bottom: 100%;\r\n  padding: 1%;\r\n  width: 30%;\r\n  min-height: 110px;\r\n}\r\n\r\n.controls button {\r\n  background-color: inherit;\r\n  border: none;\r\n}\r\n\r\n.buttons {\r\n  text-align: center;\r\n}\r\n\r\n.progressBar {\r\n  padding:10px;\r\n}\r\n\r\n.progressBar md-slider {\r\n  width: 90%;\r\n  margin-top: -15px;\r\n}\r\n\r\n.progressBar md-progress-bar {\r\n  width: 90%;\r\n  height: 10px;\r\n}\r\n\r\n#duration {\r\n  position: fixed;\r\n  bottom: 5%;\r\n  right: 31.5%;\r\n}\r\n\r\n#currentTime {\r\n  position: fixed;\r\n  bottom: 5%;\r\n  right: 59%;\r\n}\r\n\r\n.volumeChange {\r\n  position: relative;\r\n  left: 85%;\r\n  bottom: 187%;\r\n  padding: 1%;\r\n  width: 200px;\r\n  height: 70px;\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .info {\r\n    width: 35%;\r\n  }\r\n\r\n  .volumeChange {\r\n    position: relative;\r\n    left: 78%;\r\n    bottom: 213%;\r\n    padding: 1%;\r\n    width: 200px;\r\n    height: 70px;\r\n  }\r\n\r\n  #duration {\r\n    position: fixed;\r\n    bottom: 5%;\r\n    right: 29%;\r\n  }\r\n\r\n  #currentTime {\r\n    position: fixed;\r\n    bottom: 5%;\r\n    right: 59%;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 425px) {\r\n  .controls {\r\n    position: relative;\r\n    left: 62%;\r\n    bottom: 85%;\r\n    padding: 1%;\r\n    width: 40%;\r\n    min-height: 110px;\r\n  }\r\n\r\n  .volumeChange {\r\n    left: 55%;\r\n    bottom: 145%;\r\n    padding: 0%;\r\n  }\r\n\r\n  .progressBar {\r\n    width: 127px;\r\n  }\r\n\r\n  .info {\r\n    left: 13%;\r\n    width: 40%;\r\n    height: 90%;\r\n  }\r\n\r\n  #sidebarShow {\r\n    position: relative;\r\n    right: 102%;\r\n    top: 50%;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".playlistInfo {\r\n  width: 25%;\r\n  height: 100%;\r\n  margin-left: 12%;\r\n  margin-top: 2.5%;\r\n  float: left;\r\n  text-align: center;\r\n}\r\n\r\n\r\n.tracks {\r\n  width: 55%;\r\n  height: 100%;\r\n  float: right;\r\n}\r\n\r\n.tracks p {\r\n  display: inline-block;\r\n}\r\n\r\n.tracks ul {\r\n  list-style-type: none;\r\n}\r\n\r\n.playPlaylist {\r\n  background-color: black;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .playlistInfo {\r\n    float: none;\r\n    width: 60%;\r\n    margin: auto;\r\n    min-height: 600px;\r\n  }\r\n\r\n  .tracks {\r\n    float: left;\r\n    width: 100%;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".search {\r\n  background-color: #242424;\r\n  width: 87%;\r\n  height: 110px;\r\n  margin-left: 10%;\r\n  text-align: left;\r\n}\r\n\r\n.search input {\r\n  border: none;\r\n  background: inherit;\r\n  margin-left: 4%;\r\n  font-size: 4em;\r\n}\r\n\r\n#label {\r\n  margin-left: 4%;\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n}\r\n\r\n.results {\r\n  width: 87%;\r\n  margin-left: 10%;\r\n}\r\n\r\n.results header {\r\n  background-color: grey;\r\n}\r\n\r\n.results header h4 {\r\n  display: inline-block;\r\n  margin: 2% 4%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".sidebar a {\r\n  color:inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n.borededBox {\r\n  border-bottom: 1px solid #4E5052;\r\n  margin-top: 6%;\r\n  padding-bottom: 6%;\r\n  padding-left: 6%;\r\n}\r\n\r\n.searchBox {\r\n  border-bottom: 1px solid #4E5052;\r\n  margin-top: 6%;\r\n  padding-left: 6%;\r\n}\r\n\r\n#searchIcon {\r\n  position: relative;\r\n  left: 85%;\r\n  bottom: 32px;\r\n}\r\n\r\n.user {\r\n  position: relative;\r\n  top: 25%;\r\n  border-top: 1px solid #4E5052;\r\n  padding-left: 6%;\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  #searchIcon {\r\n    left: 80%;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".user {\r\n  max-width: 1050px;\r\n  margin: auto;\r\n  margin-left: 15%;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" *ngIf=\"album\">\n  <div class=\"playlistInfo\">\n    <div class=\"playlistImg\" [style.background-image]=\"'url('+album.images[0].url+')'\" (mouseenter)=\"show = true\" (mouseleave)=\"show = false\">\n      <div class=\"background\" *ngIf=\"show\" [@enter]>\n        <i (click)=\"playSong(0)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n    <h2>{{album.name}}</h2>\n    <p *ngFor=\"let artist of album.artists; let i\"><span (click)=\"openArtist(i)\" class=\"highlight\">{{artist.name}}</span></p>\n    <p class=\"aroundHighlight\">Tracks: {{album.tracks.items.length}}</p>\n    <h4 (click)=\"deleteAlbum()\" *ngIf=\"saved; else save\" class=\"highlight\">Delete</h4>\n  </div>\n  <div class=\"tracks\">\n    <ul *ngFor=\"let item of album.tracks.items; let i = index\" (mouseenter)=\"showPlay(i)\" (mouseleave)=\"hidePlay(i)\">\n      <li><h4> <span *ngIf=\"selected !== i; else play\">{{i + 1}}.</span> {{item.name}}</h4><p *ngFor=\"let artist of item.artists let j\"><span (click)=\"openArtist(j)\" class=\"highlight\">{{artist.name}}</span></p></li>\n      <ng-template #play><i (click)=\"playSong(i)\" class=\"fa fa-play\" aria-hidden=\"true\" [@enter]></i></ng-template>\n    </ul>\n  </div>\n</div>\n\n<ng-template #save><h4 (click)=\"saveAlbum()\" class=\"highlight\">Save</h4></ng-template>\n"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <header *ngIf=\"artist\">\n    <h1>{{artist.name}}</h1>\n    <div class=\"buttons\">\n      <h1 (click)=\"playSong(0)\" class=\"btn btn-success\">Play</h1>\n      <h2 *ngIf=\"followed; else follow\" class=\"btn btn-default\" (click)=\"unFollowArtist()\">Unfollow</h2>\n      <ng-template #follow><h2 class=\"btn btn-default\" (click)=\"followArtist()\">Follow</h2></ng-template>\n    </div>\n    <h5 (click)=\"view = 'overview'\">Overview</h5>\n    <h5 (click)=\"view = 'related'\">Related Artists</h5>\n    <h5 (click)=\"view = 'about'\">About</h5>\n  </header>\n  <div *ngIf=\"view == 'overview'\">\n    <div class=\"topTracks\" *ngIf=\"topTracks\">\n      <h1>Popular</h1>\n      <ul *ngFor=\"let track of topTracks; let i = index\" (mouseenter)=\"showPlay(i)\" (mouseleave)=\"hidePlay(i)\">\n        <li><h4> <span *ngIf=\"selected !== i; else play\">{{i + 1}}.</span>  {{track.name}}</h4></li>\n        <ng-template #play><i (click)=\"playSong(i)\" class=\"fa fa-play\" aria-hidden=\"true\" [@enter]></i></ng-template>\n      </ul>\n    </div>\n    <div *ngIf=\"albums\">\n      <h1>Albums</h1>\n      <div class=\"playlists\">\n        <div class=\"playlist\" *ngFor=\"let item of albums.items; let i = index\">\n          <div *ngIf=\"item.images[0]; else placeHolderImg\" (click)=\"openAlbum(i)\" class=\"playlistImg\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+item.images[0].url+')'\">\n            <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n              <i (click)=\"playAlbum($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n          <h3 (click)=\"openAlbum(i)\">{{item.name}}</h3>\n          <h3 *ngFor=\"let artist of item.artists; let j = index\"><span (click)=\"chooseAndOpenArtist(i, j)\">{{artist.name}}</span></h3>\n          <ng-template #placeHolderImg>\n            <div (click)=\"openAlbum(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+'../../../assets/placeholder.png'+')'\" class=\"playlistImg\">\n              <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n                <i (click)=\"playAlbum($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"playlists\" *ngIf=\"view == 'related'\">\n    <div class=\"playlist\" *ngFor=\"let artist of relatedArtists; let i = index\">\n      <div *ngIf=\"artist.images[0]; else placeHolderImg\" (click)=\"artistR(i)\" class=\"playlistImg round\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+artist.images[0].url+')'\">\n        <div class=\"background round\" *ngIf=\"imgSelected == i\" [@enter]>\n          <i (click)=\"playArtist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n        </div>\n      </div>\n      <h4 (click)=\"artistR(i)\">{{artist.name}}</h4>\n      <ng-template #placeHolderImg>\n        <div (click)=\"artistR(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+'../../../assets/placeholder.png'+')'\" class=\"playlistImg round\">\n          <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n            <i (click)=\"playArtist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n  <div class=\"about\" *ngIf=\"view == 'about'\">\n    <h1>Popularity: {{artist.popularity}}</h1>\n    <h1 *ngIf=\"artist.genres.length !== 0\">Ganres:</h1>\n    <ul *ngFor=\"let genre of artist.genres\">\n      <li><h3>{{genre}}</h3></li>\n    </ul>\n    <img src={{artist.images[0].url}} />\n  </div>\n</div>\n"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<div class=\"main chosen\">\n  <h1>Popular Playlists:</h1>\n  <div class=\"playlists\" *ngIf=\"playlists\">\n    <div class=\"playlist\" *ngFor=\"let item of playlists.items; let i = index\">\n      <div (click)=\"openPlaylist(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+item.images[0].url+')'\" class=\"playlistImg\">\n        <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n          <i (click)=\"playPlaylist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n        </div>\n      </div>\n      <h3>{{item.name}}</h3>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<div class=\"webplayer\">\n  <div class=\"login\">\n    <h1>This is an Spotify Clone.</h1>\n    <h2>You can check out app's features at <a href=\"https://github.com/wojryba/spotify_clone\">GitHub</a> </h2>\n    <h2>Login to proceed:</h2>\n    <a class=\"btn btn-primary btn-lg\" *ngIf=\"api.auth(); else logout\" (click)=\"logOut()\">Log Out</a>\n  </div>\n</div>\n\n\n<ng-template #logout>\n  <a class=\"btn btn-primary btn-lg\" (click)=\"logIn()\">Log In</a>\n</ng-template>\n"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" *ngIf=\"playlists\">\n  <header>\n    <h5 (click)=\"switch = 'chosen'\">Chosen</h5>\n    <h5 (click)=\"switch = 'categories'\">Geners and moods</h5>\n    <h5 (click)=\"switch = 'newReleses'\">New Releses</h5>\n  </header>\n  <div class=\"chosen\" *ngIf=\"switch == 'chosen'\" [@enter]>\n    <h1>{{message}}</h1>\n    <div class=\"playlists\">\n      <div (click)=\"openPlaylist(i)\" *ngFor=\"let item of playlists.items; let i = index\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+item.images[0].url+')'\" class=\"playlist\">\n        <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n          <i (click)=\"playPlaylist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n        </div>\n      </div>\n    </div>\n    <h3 (click)=\"findMore()\">Find More</h3>\n    <h5 *ngIf=\"show\">There is no more for now!</h5>\n  </div>\n\n  <div class=\"chosen\" *ngIf=\"switch == 'categories'\" [@enter]>\n    <h1>Geners and moods</h1>\n    <div class=\"playlists\">\n      <div (click)=\"openCategory(i)\" class=\"playlist\" *ngFor=\"let item of categories.items; let i = index\">\n        <div  (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+item.icons[0].url+')'\" class=\"playlistImg\">\n          <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n          </div>\n        </div>\n        <h3>{{item.name}}</h3>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"chosen\" *ngIf=\"switch == 'newReleses'\" [@enter]>\n    <h1>New Releses</h1>\n    <div class=\"playlists\">\n      <div (click)=\"openAlbum(i)\" class=\"playlist\" *ngFor=\"let item of newReleses.items; let i = index\">\n        <div  (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+item.images[0].url+')'\" class=\"playlistImg\">\n          <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n            <i (click)=\"playAlbum($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n        <h3>{{item.name}}</h3>\n        <h3 *ngFor=\"let artist of item.artists; let j = index\"><span (click)=\"openArtist($event, i, j)\">{{artist.name}}</span></h3>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <header>\n    <h5 (click)=\"switch = 'playlists'\">Playlists</h5>\n    <h5 (click)=\"switch = 'tracks'\">Tracks</h5>\n    <h5 (click)=\"switch = 'albums'\">Albums</h5>\n    <h5 (click)=\"switch = 'artists'\">Artists</h5>\n  </header>\n  <div class=\"generalResultsSections\" *ngIf=\"switch === 'playlists'\">\n    <h1>Playlists</h1>\n    <div class=\"playlists\" *ngIf=\"playlists\">\n      <div class=\"playlist\" *ngFor=\"let playlist of playlists.items; let i = index\">\n        <div *ngIf=\"playlist.images[0]; else placeHolderImg;\" (click)=\"openPlaylist(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+playlist.images[0].url+')'\" class=\"playlistImg\">\n          <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n            <i (click)=\"playPlaylist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n        <h3 (click)=openPlaylist(i)>{{playlist.name}}</h3>\n        <ng-template #placeHolderImg>\n          <div (click)=\"openPlaylist(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+'../../../assets/placeholder.png'+')'\" class=\"playlistImg\">\n            <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n              <i (click)=\"playPlaylist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"tracks\" *ngIf=\"switch === 'tracks'\">\n    <h1>Tracks</h1>\n    <ul *ngFor=\"let track of tracks.items; let i = index\" (mouseenter)=\"showPlay(i)\" (mouseleave)=\"hidePlay(i)\">\n      <li>\n        <h4> <span *ngIf=\"selected !== i; else play\">{{i + 1}}.</span>  {{track.track.name}}</h4>\n        <p *ngFor=\"let artist of track.track.artists; let j = index\"><span (click)=\"openArtist(i, j)\">{{artist.name}}</span><span [innerHTML]=\"whitespace\"></span> <span>Album: {{track.track.album.name}}</span></p>\n      </li>\n      <ng-template #play><i (click)=\"playSong(i)\" class=\"fa fa-play\" aria-hidden=\"true\" [@enter]></i></ng-template>\n    </ul>\n  </div>\n\n  <div class=\"generalResultsSections\" *ngIf=\"switch === 'albums'\">\n    <h1>Albums</h1>\n    <div class=\"playlists\" *ngIf=\"playlists\">\n      <div class=\"playlist\" *ngFor=\"let album of albums.items; let i = index\">\n        <div *ngIf=\"album.album.images[0]; else placeHolderImg;\" (click)=\"openAlbum(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+album.album.images[0].url+')'\" class=\"playlistImg\">\n          <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n            <i (click)=\"playAlbum($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n        <h3 (click)=openAlbum(i)>{{album.album.name}}</h3>\n        <p *ngFor=\"let artist of album.album.artists; let j = index\"><span (click)=\"openArtist(i, j)\">{{artist.name}}</span><span [innerHTML]=\"whitespace\"></span></p>\n        <ng-template #placeHolderImg>\n          <div (click)=\"openAlbum(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+'../../../assets/placeholder.png'+')'\" class=\"playlistImg\">\n            <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n              <i (click)=\"playAlbum($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"generalResultsSections\" *ngIf=\"switch === 'artists'\">\n    <h1>Artists</h1>\n    <div class=\"playlists\" *ngIf=\"playlists\">\n      <div class=\"playlist\" *ngFor=\"let artist of artists.items; let i = index\">\n        <div *ngIf=\"artist.images[0]; else placeHolderImg;\" (click)=\"openArtist(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+artist.images[0].url+')'\" class=\"playlistImg\">\n          <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n            <i (click)=\"playArtist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n        <h3 (click)=openArtist(i)>{{artist.name}}</h3>\n        <ng-template #placeHolderImg>\n          <div (click)=\"openArtist(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+'../../../assets/placeholder.png'+')'\" class=\"playlistImg\">\n            <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n              <i (click)=\"playArtist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<div class=\"player\">\n  <div *ngIf=\"music.track; else info\" class=\"info\">\n    <i id=\"sidebarShow\" class=\"fa fa-bars fa-2x\" aria-hidden=\"true\" (click)=\"sidebar()\" *ngIf=\"mobileview\"></i>\n    <img src={{music.track.album.images[0].url}} *ngIf=\"!mobileview\" />\n    <div>\n      <h5 (click)=\"album()\" class=\"underline\">{{music.track.name}}</h5>\n      <p (click)=\"artist()\" class=\"highlight\">{{music.track.artists[0].name}}</p>\n    </div>\n    <i *ngIf=\"!mobileview && music.saved; else save\" class=\"fa fa-check highlight\" aria-hidden=\"true\" (click)=\"deleteTrack()\"></i>\n    <ng-template #save><i class=\"fa fa-plus highlight\" aria-hidden=\"true\" (click)=\"saveTrack()\" *ngIf=\"!mobileview\"></i></ng-template>\n  </div>\n  <div class=\"controls\">\n    <div class=\"buttons\">\n      <button (click)=\"music.random = !music.random\"><i class=\"fa fa-random\" aria-hidden=\"true\"></i></button>\n      <button (click)=\"music.previes(music.i)\"><i class=\"fa fa-step-backward\" aria-hidden=\"true\"></i></button>\n      <button *ngIf=\"music.p; else play\" (click)=\"music.pause()\"><i class=\"fa fa-play\" aria-hidden=\"true\"></i></button>\n      <button (click)=\"music.next(music.i)\"><i class=\"fa fa-step-forward\" aria-hidden=\"true\"></i></button>\n    </div>\n    <span id=\"currentTime\" *ngIf=\"!mobileview\" >{{music.currentTime}}</span><div (mouseenter)=\"slider = true\" (mouseleave)=\"slider = false\" class=\"progressBar\">\n      <md-slider *ngIf=\"slider; else progress\" min=\"1\" max=\"100\" step=\"0.5\" [(ngModel)]=\"music.value\" (change)=\"progressBar($event)\"></md-slider>\n    </div><span id=\"duration\" *ngIf=\"!mobileview\" >{{music.duration}}</span>\n  </div>\n  <div class=\"volumeChange\">\n    <i class=\"fa fa-volume-up\" aria-hidden=\"true\" (click)=\"music.mute()\"></i>\n    <md-slider min=\"0\" max=\"1\" step=\"0.01\" [(ngModel)]=\"music.volume\" (change)=\"volume($event)\"></md-slider>\n  </div>\n</div>\n\n<ng-template #play>\n  <button (click)=\"music.pause()\"><i class=\"fa fa-pause\" aria-hidden=\"true\"></i></button>\n</ng-template>\n\n<ng-template #progress>\n      <md-progress-bar [value]=\"music.value\"></md-progress-bar>\n</ng-template>\n\n<ng-template #info>\n    <div class=\"info\">\n    </div>\n</ng-template>\n"

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" *ngIf=\"playlist\">\n  <div class=\"playlistInfo\">\n    <div class=\"playlistImg\" [style.background-image]=\"'url('+playlist.images[0].url+')'\" (mouseenter)=\"show = true\" (mouseleave)=\"show = false\">\n      <div class=\"background\" *ngIf=\"show\" [@enter]>\n        <i (click)=\"playSong(0)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n    <h2>{{playlist.name}}</h2>\n    <p class=\"aroundHighlight\" (click)=\"openUser()\">Owner: <span class=\"highlight\">{{playlist.owner.id}}</span></p>\n    <p class=\"aroundHighlight\">Tracks: {{playlist.tracks.items.length}}</p>\n    <button (click)=\"playSong(0)\" class=\"btn btn-success\">Play!</button>\n    <h2 *ngIf=\"followed; else follow\" (click)=\"unFollowPlaylist()\">Unfollow</h2>\n  </div>\n  <div class=\"tracks\" *ngIf=\"playlist.tracks\">\n    <ul *ngFor=\"let item of playlist.tracks.items; let i = index\" (mouseenter)=\"showPlay(i)\" (mouseleave)=\"hidePlay(i)\">\n      <li ><h4> <span *ngIf=\"selected !== i; else play\">{{i + 1}}.</span> {{item.track.name}}</h4>\n        <p *ngFor=\"let artist of item.track.artists; let j = index\"><span (click)=\"artistR(i, j)\" class=\"highlight\">{{artist.name}}</span><span [innerHTML]=\"whitespace\"><i class=\"fa fa-circle\" aria-hidden=\"true\"></i></span></p></li>\n      <ng-template #play><i (click)=\"playSong(i)\" class=\"fa fa-play\" aria-hidden=\"true\" [@enter]></i></ng-template>\n    </ul>\n  </div>\n</div>\n\n<ng-template #follow><h2 (click)=\"followPlaylist()\">Follow</h2></ng-template>\n"

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\" (scroll)=\"onScroll($event)\" track-scroll>\n  <div class=\"searchComponent\">\n    <header class=\"search\">\n      <label><p id=\"label\">Search for tracks, artists, playlists, albums...</p>\n        <input #search placeholder=\"Start writing...\" value={{search.value}} (keyup)=\"searchInput($event, search)\" />\n      </label>\n    </header>\n    <div class=results *ngIf=\"tracks\">\n      <header>\n        <h4 (click)=\"show = 'top'\">Top Results</h4>\n        <h4 (click)=\"show = 'artists'\">Artists</h4>\n        <h4 (click)=\"show = 'albums'\">Albums</h4>\n        <h4 (click)=\"show = 'playlists'\">Plylists</h4>\n        <h4 (click)=\"show = 'tracks'\">Tracks</h4>\n      </header>\n\n      <!-- TOP RESULTS OF EVERYTHING SECTION -->\n      <div class=\"generalResults\" *ngIf=\"show === 'top'\">\n\n        <!-- TRACK SECTION -->\n        <div class=\"tracks\" *ngIf=\"tracks\">\n          <ul *ngFor=\"let track of overview.tracks; let i = index\" (mouseenter)=\"showPlay(i)\" (mouseleave)=\"hidePlay(i)\">\n            <li>\n              <h4> <span *ngIf=\"selected !== i; else play\">{{i + 1}}.</span>  {{track.name}}</h4>\n              <p *ngFor=\"let artist of track.artists; let j = index\"><span (click)=\"openArtist(i, j)\" class=\"highlight\">{{artist.name}}</span><span [innerHTML]=\"whitespace\"></span></p> <br />\n              <p class=\"aroundHighlight\">Album: <span class=\"highlight\">{{track.album.name}}</span></p>\n            </li>\n            <ng-template #play><i (click)=\"playSong(i)\" class=\"fa fa-play\" aria-hidden=\"true\" [@enter]></i></ng-template>\n          </ul>\n        </div>\n\n        <!-- ARTIST SECTION -->\n        <div class=\"generalResultsSections\">\n          <h1>Artists:</h1>\n          <div class=\"playlists\" *ngIf=\"playlists\">\n            <div class=\"playlist\" *ngFor=\"let artist of overview.artists; let i = index\">\n              <div *ngIf=\"artist.images[0]; else placeHolderImg;\" (click)=\"openArtist(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+artist.images[0].url+')'\" class=\"playlistImg\">\n                <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n                  <i (click)=\"playArtist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n                </div>\n              </div>\n              <h3 (click)=openArtist(i)>{{artist.name}}</h3>\n              <ng-template #placeHolderImg>\n                <div (click)=\"openArtist(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+'../../../assets/placeholder.png'+')'\" class=\"playlistImg\">\n                  <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n                    <i (click)=\"playArtist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n                  </div>\n                </div>\n              </ng-template>\n            </div>\n          </div>\n        </div>\n\n        <!-- ALBUMS SECTION -->\n        <div class=\"generalResultsSections\">\n          <h1>Albums:</h1>\n          <div class=\"playlists\" *ngIf=\"playlists\">\n            <div class=\"playlist\" *ngFor=\"let album of overview.albums; let i = index\">\n              <div *ngIf=\"album.images[0]; else placeHolderImg;\" (click)=\"openAlbum(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+album.images[0].url+')'\" class=\"playlistImg\">\n                <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n                  <i (click)=\"playAlbum($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n                </div>\n              </div>\n              <h3 (click)=openAlbum(i)>{{album.name}}</h3>\n              <p *ngFor=\"let artist of album.artists; let j = index\"><span (click)=\"openArtist(i, j)\">{{artist.name}}</span><span [innerHTML]=\"whitespace\"></span></p>\n              <ng-template #placeHolderImg>\n                <div (click)=\"openAlbum(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+'../../../assets/placeholder.png'+')'\" class=\"playlistImg\">\n                  <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n                    <i (click)=\"playAlbum($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n                  </div>\n                </div>\n              </ng-template>\n            </div>\n          </div>\n        </div>\n\n        <!-- PLAYLISTS SECTION -->\n        <div class=\"generalResultsSections\">\n          <h1>Playlists</h1>\n          <div class=\"playlists\" *ngIf=\"playlists\">\n            <div class=\"playlist\" *ngFor=\"let playlist of overview.playlists; let i = index\">\n              <div *ngIf=\"playlist.images[0]; else placeHolderImg;\" (click)=\"openPlaylist(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+playlist.images[0].url+')'\" class=\"playlistImg\">\n                <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n                  <i (click)=\"playPlaylist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n                </div>\n              </div>\n              <h3 (click)=openPlaylist(i)>{{playlist.name}}</h3>\n              <ng-template #placeHolderImg>\n                <div (click)=\"openPlaylist(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+'../../../assets/placeholder.png'+')'\" class=\"playlistImg\">\n                  <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n                    <i (click)=\"playPlaylist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n                  </div>\n                </div>\n              </ng-template>\n            </div>\n          </div>\n        </div>\n    </div>\n\n    <!-- SPECIFIC SECTIONS -->\n    <div class=\"generalResultsSections\" *ngIf=\"show === 'artists'\">\n      <h1>Artists:</h1>\n      <div class=\"playlists\" *ngIf=\"playlists\">\n        <div class=\"playlist\" *ngFor=\"let artist of artists.items; let i = index\">\n          <div *ngIf=\"artist.images[0]; else placeHolderImg;\" (click)=\"openArtist(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+artist.images[0].url+')'\" class=\"playlistImg\">\n            <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n              <i (click)=\"playArtist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n          <h3 (click)=openArtist(i)>{{artist.name}}</h3>\n          <ng-template #placeHolderImg>\n            <div (click)=\"openArtist(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+'../../../assets/placeholder.png'+')'\" class=\"playlistImg\">\n              <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n                <i (click)=\"playArtist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n      <h3 (click)=\"findMoreArtists()\" class=\"highlight\">Find More</h3>\n    </div>\n\n    <div class=\"generalResultsSections\" *ngIf=\"show === 'albums'\">\n      <h1>Albums:</h1>\n      <div class=\"playlists\" *ngIf=\"playlists\">\n        <div class=\"playlist\" *ngFor=\"let album of albums.items; let i = index\">\n          <div *ngIf=\"album.images[0]; else placeHolderImg;\" (click)=\"openAlbum(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+album.images[0].url+')'\" class=\"playlistImg\">\n            <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n              <i (click)=\"playAlbum($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n          <h3 (click)=openAlbum(i)>{{album.name}}</h3>\n          <p *ngFor=\"let artist of album.artists; let j = index\"><span (click)=\"openArtist(i, j)\">{{artist.name}}</span><span [innerHTML]=\"whitespace\"></span></p>\n          <ng-template #placeHolderImg>\n            <div (click)=\"openAlbum(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+'../../../assets/placeholder.png'+')'\" class=\"playlistImg\">\n              <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n                <i (click)=\"playAlbum($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n      <h3 (click)=\"findMoreAlbums()\" class=\"highlight\">Find More</h3>\n    </div>\n\n    <div class=\"generalResultsSections\" *ngIf=\"show === 'playlists'\">\n      <h1>Playlists:</h1>\n      <div class=\"playlists\" *ngIf=\"playlists\">\n        <div class=\"playlist\" *ngFor=\"let playlist of playlists.items; let i = index\">\n          <div *ngIf=\"playlist.images[0]; else placeHolderImg;\" (click)=\"openPlaylist(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+playlist.images[0].url+')'\" class=\"playlistImg\">\n            <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n              <i (click)=\"playPlaylist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n          <h3 (click)=openPlaylist(i)>{{playlist.name}}</h3>\n          <ng-template #placeHolderImg>\n            <div (click)=\"openPlaylist(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+'../../../assets/placeholder.png'+')'\" class=\"playlistImg\">\n              <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n                <i (click)=\"playPlaylist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n              </div>\n            </div>\n          </ng-template>\n        </div>\n      </div>\n      <h3 (click)=\"findMorePlaylists()\" class=\"highlight\">Find More</h3>\n    </div>\n\n    <div class=\"tracks\" *ngIf=\"show === 'tracks'\">\n      <h1>Tracks:</h1>\n      <ul *ngFor=\"let track of tracks.items; let i = index\" (mouseenter)=\"showPlay(i)\" (mouseleave)=\"hidePlay(i)\">\n        <li>\n          <h4> <span *ngIf=\"selected !== i; else play\">{{i + 1}}.</span>  {{track.name}}</h4>\n          <p *ngFor=\"let artist of track.artists; let j = index\"><span (click)=\"openArtist(i, j)\" class=\"highlight\">{{artist.name}}</span><span [innerHTML]=\"whitespace\"></span></p> <br />\n          <p class=\"aroundHighlight\">Album: <span class=\"highlight\">{{track.album.name}}</span></p>\n        </li>\n        <ng-template #play><i (click)=\"playSong(i)\" class=\"fa fa-play\" aria-hidden=\"true\" [@enter]></i></ng-template>\n      </ul>\n      <h3 (click)=\"findMoreTracks()\" class=\"highlight\">Find More</h3>\n    </div>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar\">\n  <div class=\"borededBox\">\n    <a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['']\"><i class=\"fa fa-spotify fa-4x\" aria-hidden=\"true\"></i></a>\n  </div>\n  <a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['search']\"><div class=\"searchBox\">\n    <h3>Search</h3>\n    <i id=\"searchIcon\" class=\"fa fa-search fa-lg\" aria-hidden=\"true\"></i>\n  </div></a>\n  <div class=\"borededBox\">\n    <a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['']\"><h4>Browse</h4></a>\n    <a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['/me']\"><h4>Your Music</h4></a>\n  </div>\n  <div class=\"user\" *ngIf=\"user\">\n    <h3>{{user.id}}</h3>\n    <a class=\"btn btn-primary btn-lg\" (click)=\"logOut()\">Log Out</a>\n  </div>\n</div>\n"

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"user\" *ngIf=\"playlists\">\n      <h1>{{user.display_name}}</h1>\n      <br />\n      <h1>User's playlists:</h1>\n  </div>\n  <div *ngIf=\"playlists\">\n    <div class=playlists>\n      <div (click)=\"openPlaylist(i)\" class=\"playlist\" *ngFor=\"let item of playlists.items; let i = index\">\n        <div *ngIf=\"item.images[0]; else placeHolderImg\" [style.background-image]=\"'url('+item.images[0].url+')'\" class=\"playlistImg\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\">\n          <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n            <i (click)=\"playPlaylist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n          </div>\n        </div>\n        <h5 (click)=\"openPlaylist(i)\">{{item.name}}</h5>\n        <ng-template #placeHolderImg>\n          <div (click)=\"openPlaylist(i)\" (mouseenter)=\"showBackgroundPlay(i)\" (mouseleave)=\"hideBackgroundPlay(i)\" [style.background-image]=\"'url('+'../../../assets/placeholder.png'+')'\" class=\"playlistImg\">\n            <div class=\"background\" *ngIf=\"imgSelected == i\" [@enter]>\n              <i (click)=\"playPlaylist($event, i)\" class=\"fa fa-play-circle-o fa-4x\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "<div class=\"webplayer\">\n  <app-sidebar *ngIf=\"!hidesidebar\"></app-sidebar>\n  <router-outlet></router-outlet>\n  <app-player [mobileview]=\"mobileview\" (showsiebar)=\"showsiebar($event)\"></app-player>\n</div>\n"

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (localStorage.getItem('code')) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuardService);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    // LOGIN STAFF
    ApiService.prototype.auth = function () {
        if (localStorage.getItem('code')) {
            return true;
        }
        else {
            return false;
        }
    };
    ApiService.prototype.login = function () {
        return this.http.get('login');
    };
    ApiService.prototype.postCode = function (code) {
        var encoded_data = JSON.stringify({ code: code });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('callback', encoded_data, options);
    };
    // use links provided by API
    ApiService.prototype.useLink = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var authToken = localStorage.getItem('code');
        headers.append('Authorization', "Bearer " + authToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.get(url, options);
    };
    ApiService.prototype.getFeaturedPlaylists = function () {
        return this.http.get('browse/getFeaturedPlaylists');
    };
    ApiService.prototype.getCategoriesAndReleses = function () {
        return this.http.get('browse/categories');
    };
    ApiService.prototype.getCategory = function (category) {
        var encoded_data = JSON.stringify({ category: category });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('browse/getCategory', encoded_data, options);
    };
    ApiService.prototype.getArtistEverything = function (artist) {
        var encoded_data = JSON.stringify({ artist: artist });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('artist', encoded_data, options);
    };
    ApiService.prototype.getUserPlaylists = function (user) {
        var encoded_data = JSON.stringify({ user: user });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('user/playlists', encoded_data, options);
    };
    ApiService.prototype.search = function (query) {
        var encoded_data = JSON.stringify({ query: query });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('search', encoded_data, options);
    };
    // PLAYLIST FOLLOWING
    ApiService.prototype.followPlaylist = function (owner, id) {
        var encoded_data = JSON.stringify({ owner: owner, id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('user/followPlaylist', encoded_data, options);
    };
    ApiService.prototype.unFollowPlaylist = function (owner, id) {
        var encoded_data = JSON.stringify({ owner: owner, id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('user/unFollowPlaylist', encoded_data, options);
    };
    ApiService.prototype.checkIfPlaylistFollowed = function (owner, id) {
        var encoded_data = JSON.stringify({ owner: owner, id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('user/checkIfPlaylistFollowed', encoded_data, options);
    };
    // ALBUM FOLLOWING
    ApiService.prototype.checkIfAlbumSaved = function (id) {
        var encoded_data = JSON.stringify({ id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('user/checkAlbum', encoded_data, options);
    };
    ApiService.prototype.saveAlbum = function (id) {
        var encoded_data = JSON.stringify({ id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('user/saveAlbum', encoded_data, options);
    };
    ApiService.prototype.deleteAlbum = function (id) {
        var encoded_data = JSON.stringify({ id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('user/deleteAlbum', encoded_data, options);
    };
    // ARTISTS
    ApiService.prototype.checkIfArtistFollowed = function (id) {
        var encoded_data = JSON.stringify({ id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('user/checkIfArtistFollowed', encoded_data, options);
    };
    ApiService.prototype.followArtist = function (id) {
        var encoded_data = JSON.stringify({ id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('user/followArtist', encoded_data, options);
    };
    ApiService.prototype.unFollowArtist = function (id) {
        var encoded_data = JSON.stringify({ id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('user/unFollowArtist', encoded_data, options);
    };
    // TRACKS
    ApiService.prototype.checkIfTrackSaved = function (id) {
        var encoded_data = JSON.stringify({ id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('user/checkIfTrackSaved', encoded_data, options);
    };
    ApiService.prototype.saveTrack = function (id) {
        var encoded_data = JSON.stringify({ id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('user/saveTrack', encoded_data, options);
    };
    ApiService.prototype.deleteTrack = function (id) {
        var encoded_data = JSON.stringify({ id: id });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post('user/deleteTrack', encoded_data, options);
    };
    // usermusic
    ApiService.prototype.getUserMusic = function () {
        return this.http.get('user/getUserMusic');
    };
    ApiService.prototype.getMe = function () {
        return this.http.get('user/me');
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MusicService = (function () {
    function MusicService(api, router) {
        var _this = this;
        this.api = api;
        this.router = router;
        this.p = true;
        this.value = 0;
        this.volume = 0.7;
        this.duration = 30.04;
        this.currentTime = 0;
        this.audio = new Audio();
        this.audio.ontimeupdate = function () {
            _this.value = (_this.audio.currentTime / _this.audio.duration) * 100;
            _this.duration = Math.round(_this.audio.duration * 100) / 100;
            _this.currentTime = Math.round(_this.audio.currentTime * 100) / 100;
        };
        // handle ended song
        this.audio.onended = function () {
            _this.audio = new Audio();
            if (_this.random) {
                _this.shuffle();
            }
            else {
                _this.next(_this.i);
            }
        };
    }
    MusicService.prototype.play = function (i) {
        var _this = this;
        // stop any previes audio playing, and create a new one
        this.audio.pause();
        this.audio = new Audio();
        // set up i for next and previes buttons
        this.i = i;
        localStorage.setItem('playlist', JSON.stringify(this.playlist));
        localStorage.setItem('i', JSON.stringify(i));
        // load the new song
        if (this.playlist[i].track) {
            this.load(this.playlist[i].track.href);
        }
        else if (this.playlist[i].href) {
            this.load(this.playlist[i].href);
        }
        // play the song
        this.audio.play();
        this.p = false;
        this.audio.ontimeupdate = function () {
            _this.value = (_this.audio.currentTime / _this.audio.duration) * 100;
            _this.duration = Math.round(_this.audio.duration * 100) / 100;
            _this.currentTime = Math.round(_this.audio.currentTime * 100) / 100;
        };
        // handle ended song
        this.audio.onended = function () {
            _this.audio = new Audio();
            if (_this.random) {
                _this.shuffle();
            }
            else {
                _this.next(_this.i);
            }
        };
    };
    MusicService.prototype.load = function (url) {
        var _this = this;
        this.api.useLink(url).subscribe(function (response) {
            var res = JSON.parse(response['_body']);
            if (res.preview_url) {
                _this.track = res;
                localStorage.setItem('track', JSON.stringify(res));
                // check if the music is saved in users music
                _this.checkIfTrackSaved();
                // load the music to audio
                _this.audio.src = res.preview_url;
            }
            else {
                _this.next(_this.i);
            }
        }, function (error) {
            console.log(error);
            _this.next(_this.i);
        });
    };
    MusicService.prototype.next = function (i) {
        if (this.random) {
            this.shuffle();
        }
        else {
            if (i === this.playlist.length - 1) {
                i = 0;
            }
            else {
                i = i + 1;
            }
            this.play(i);
        }
    };
    MusicService.prototype.previes = function (i) {
        if (this.random) {
            this.shuffle();
        }
        else {
            if (i == 0) {
                i = this.playlist.length - 1;
                console.log(this.playlist[i]);
            }
            else {
                i = i - 1;
            }
            this.play(i);
        }
    };
    MusicService.prototype.shuffle = function () {
        var i = Math.floor(Math.random() * this.playlist.length) + 1;
        this.play(i);
    };
    MusicService.prototype.pause = function () {
        if (this.p) {
            this.audio.play();
        }
        else {
            this.audio.pause();
        }
        this.p = !this.p;
    };
    MusicService.prototype.changeTime = function (time) {
        this.audio.currentTime = time;
    };
    MusicService.prototype.changeVolume = function () {
        this.audio.volume = this.volume;
    };
    MusicService.prototype.mute = function () {
        if (this.audio.volume > 0) {
            this.audio.volume = 0;
        }
        else {
            this.audio.volume = this.volume;
        }
    };
    MusicService.prototype.checkIfTrackSaved = function () {
        var _this = this;
        this.api.checkIfTrackSaved(this.track.id).subscribe(function (response) {
            _this.saved = JSON.parse(response['_body']);
        }, function (error) {
            if (_this.api.auth) {
                // window.location.reload();
            }
            else {
                _this.router.navigate['login'];
            }
        });
    };
    return MusicService;
}());
MusicService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MusicService);

var _a, _b;
//# sourceMappingURL=music.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 96;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(119);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[254]);
//# sourceMappingURL=main.bundle.js.map