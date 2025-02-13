import {
  RouterModule,
  RouterOutlet,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';
import {
  NG_DOC_DEFAULT_PAGE_PROCESSORS,
  NG_DOC_DEFAULT_PAGE_SKELETON,
  NgDocDefaultSearchEngine,
  NgDocNavbarComponent,
  NgDocRootComponent,
  NgDocSidebarComponent,
  NgDocThemeToggleComponent,
  provideMainPageProcessor,
  provideNgDocApp,
  providePageSkeleton,
  provideSearchEngine,
} from '@ng-doc/app';
import { NG_DOC_ROUTING, provideNgDocContext } from '@ng-doc/generated';
import {
  NgDocButtonIconComponent,
  NgDocIconComponent,
  NgDocTooltipDirective,
} from '@ng-doc/ui-kit';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

@NgModule({ declarations: [AppComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(NG_DOC_ROUTING, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            scrollOffset: [0, 70],
        }),
        RouterOutlet,
        NgDocRootComponent,
        NgDocNavbarComponent,
        NgDocSidebarComponent,
        NgDocIconComponent,
        NgDocButtonIconComponent,
        NgDocThemeToggleComponent,
        NgDocTooltipDirective,
        ], providers: [
        provideNgDocContext(),
        provideNgDocApp(),
        provideSearchEngine(NgDocDefaultSearchEngine),
        providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
        provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS),
        provideRouter([
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home/installation',
            },
        ], withInMemoryScrolling({
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
        })),
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule {}
