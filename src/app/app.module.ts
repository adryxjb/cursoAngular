import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
//Importar componentes
import { AppComponent } from "./app.component";
import { unoComponent } from "./components/uno/uno.component";

@NgModule({
  declarations: [AppComponent, unoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
