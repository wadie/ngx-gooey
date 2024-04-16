{{ NgDocActions.demo("RotatingComponent", {container: false}) }}

# The gooey effect for Angular

The 'gooey effect' has been made popular by various (amazing) blogposts over the years. This tiny component makes it easy to use within React, and has improved the implementation. It's optimized to be as sharp/crisp as possible, since existing implementations can be a bit blurry. Safari support (which can be notorious, and is usually missing) has been added as well.

---

## {{ NgDocPage.title }}

`npm install ngx-gooey`

---

## Usage

You can either import into your NgModule:

```typescript name="app.module.ts"
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the library
import { Gooey } from 'ngx-gooey';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Gooey, // <-- Add this line
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Or directly into a standalone component:

```typescript name="app.component.ts"
  standalone: true,
  imports: [Gooey],
```

Then use it in your template:

```html name="app.component.html"
<ngx-gooey> … </ngx-gooey>
```
