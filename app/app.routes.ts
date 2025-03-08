import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { SignalComponent } from './components/signal/signal.component';
import { UserComponent } from './components/user/user.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/API/get-api/get-api.component';
import { PostApiComponent } from './components/API/post-api/post-api.component';
import { ResourceApiComponent } from './components/resource-api/resource-api.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'resource-api',
        pathMatch:'full'
    },
    {
        path:'admin',
        component:AdminComponent
    },
    {
        path:'dataBinding',
        component:DataBindingComponent
    },
    {
        path:'ng-class',
        component:NgClassComponent
    },
    {
        path:'control-statement',
        component:ControlStatementComponent
    },
    {
        path:'ng-for',
        component:NgForComponent
    },
    {
        path:'ng-if',
        component:NgIfComponent
    },
    {
        path:'ng-style',
        component:NgStyleComponent
    },
    {
        path:'signal',
        component:SignalComponent
    },
    {
        path:'user',
        component:UserComponent
    },
    {
        path:'linked-signal',
        component:LinkedSignalComponent
    },
    {
        path:'template-form',
        component:TemplateFormComponent
    },
    {
        path:'reactive-form',
        component:ReactiveFormComponent
    },
    {
        path:'get-api',
        component:GetApiComponent
    },
    {
        path:'post-api',
        component:PostApiComponent
    },
    {
        path:'resource-api',
        component:ResourceApiComponent
    }
];
