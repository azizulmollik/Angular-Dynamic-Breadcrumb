import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';
import { HomeComponent } from './home.component';
import { Test1Component } from './test1.component';
import { Test2Component } from './test2.component';
import { Test3Component } from './test3.component';
import { Test31Component } from './test31.component';
import { Test32Component } from './test32.component';
import { Test321Component } from './test321.component';
import { Test322Component } from './test322.component';

// const routes: Routes = [
//   {path: '', redirectTo: 'home', pathMatch: 'full'},
//   {path: 'home', component: HomeComponent, data: { breadcrumb: 'Home'}},
//   {path: 'test1', component: Test1Component, data: { breadcrumb: 'Test 1'}},
//   {path: 'test2', component: Test2Component, data: { breadcrumb: 'Test 2'}},
//   {path: 'test3', data: { breadcrumb: 'Test 3'},
//     children: [
//       {path: 'test31', component: Test31Component, data: { breadcrumb: 'Test 3 1'}},
//       {path: 'test32', data: { breadcrumb: 'Test 3 2'},
//         children: [
//           {path: 'test321', component: Test321Component, data: { breadcrumb: 'Test 3 2 1'} },
//           {path: 'test322', component: Test322Component, data: { breadcrumb: 'Test 3 2 2'}}
//         ]
//       }
//     ]
//   }  
// ];

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, data: { breadcrumb: 'Home' } },
      { path: 'test1', component: Test1Component, data: { breadcrumb: 'Test 1' } },
      { path: 'test2', component: Test2Component, data: { breadcrumb: 'Test 2' } },
      {
        path: 'test3', component: Test3Component, data: { breadcrumb: 'Test 3', from: 'Test 3' },
        children: [
          { path: 'test31', component: Test31Component, data: { breadcrumb: 'Test 3 1' } },
          {
            path: 'test32', component: Test3Component, data: { breadcrumb: 'Test 3 2', from: 'Test 3 2' },
            children: [
              { path: 'test321', component: Test321Component, data: { breadcrumb: 'Test 3 2 1' } },
              { path: 'test322', component: Test322Component, data: { breadcrumb: 'Test 3 2 2' } }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
