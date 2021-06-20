// // -------------------------------------------------------------- Default / Auto Bootstrap
// import { NgModule } from "@angular/core";
// import { BrowserModule } from "@angular/platform-browser";
// import { HelloComponent } from "./hello.component";

// @NgModule({
//     imports: [BrowserModule],
//     declarations: [HelloComponent],
//     bootstrap: [HelloComponent]
// })
// export class AppModule {

// }

// -------------------------------------------------------------- Manual Bootstrapping
import { NgModule, DoBootstrap, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HelloComponent } from "./hello.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [HelloComponent],
    entryComponents: [HelloComponent]
})
export class AppModule implements DoBootstrap {
    ngDoBootstrap(appRef: ApplicationRef): void {
        const container = document.querySelector("#container");

        const helloTag = document.createElement('hello');
        helloTag.innerText = "Hello Tag Added Manually";
        container.appendChild(helloTag);

        appRef.bootstrap(HelloComponent);
    }
}