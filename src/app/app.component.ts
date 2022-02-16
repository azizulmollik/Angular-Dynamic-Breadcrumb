import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PanelMenu';

  items: MenuItem[] = [];
  breadItems: MenuItem[] = [];
  breadcrumbs: MenuItem[] = [];
  home: MenuItem = {};

  constructor(
    private titleService: Title,
    private breadcrumbService: BreadcrumbService) {
    this.breadcrumbService.breadcrumbChanged.subscribe(crumbs => {
      this.titleService.setTitle(this.createTitle(crumbs));
      this.breadcrumbs = this.mapPrimeNgCrumbs(crumbs)
    });
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-pw pi-file',
        routerLink: 'home'     
      },
      {
        label: 'Test1',
        icon: 'pi pi-pw pi-file',
        routerLink: 'test1'     
      },
      {
        label: 'Test2',
        icon: 'pi pi-pw pi-file',
        routerLink: 'test2'     
      },      
      {
        label: 'Test3',
        icon: 'pi pi-pw pi-file',
        routerLink: 'test3' ,
        items: [
        { label: 'Test31',icon: 'pi pi-pw pi-file',routerLink: 'test3/test31'},
        { separator: true },
        {
          label: 'Test32',
          icon: 'pi pi-fw pi-plus',
          routerLink: 'test3/test32',
          items: [            
        { label: 'Test321',icon: 'pi pi-pw pi-file',routerLink: 'test3/test32/test321'},            
        { label: 'Test322',icon: 'pi pi-pw pi-file',routerLink: 'test3/test32/test322'},
          ]
        },
        ]
      }
    ];

    
    this.home = { icon: 'pi pi-home',url:'home' };
  }



  private createTitle(routesCollection: Breadcrumb[]) {
    const title = 'Angular Project Demo';
    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) { return title; }

    const routeTitle = this.titlesToString(titles);
    return `${routeTitle} ${title}`;
  }

  private titlesToString(titles:any) {
    return titles.reduce((prev:any, curr:any) => {
      return `${curr.displayName} - ${prev}`;
    }, '');
  }

  private mapPrimeNgCrumbs(crumbs: Breadcrumb[]): MenuItem[] {
    return crumbs.map(c => <MenuItem>{ label: c.displayName, url: `${c.url}` });
    //last item will not be a link
    // let len = crumbs.length - 1;
    // return crumbs.map(c => <MenuItem>{ label: c.displayName, url: len == crumbs.indexOf(c) ? '' : `${c.url}` });
  }
}
