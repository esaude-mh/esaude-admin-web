"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var APPS = [
    { id: 1, name: 'eSaude Platform' },
    { id: 2, name: 'eSaude POC' },
    { id: 3, name: 'eSaude LIS' },
    { id: 4, name: 'eSaude Admin' }
];
var EsaudeApp = (function () {
    function EsaudeApp() {
    }
    return EsaudeApp;
}());
exports.EsaudeApp = EsaudeApp;
var About = (function () {
    function About() {
    }
    return About;
}());
exports.About = About;
var NativeInstall = (function () {
    function NativeInstall() {
    }
    return NativeInstall;
}());
exports.NativeInstall = NativeInstall;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'eSaude Admin';
        this.about = {
            version: '1.0.0',
            description: 'about'
        };
        this.native = {
            mysql_port: 3306,
            tomcat_port: 8080
        };
        this.apps = APPS;
    }
    AppComponent.prototype.onSelect = function (app) {
        this.selectedApp = app;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map