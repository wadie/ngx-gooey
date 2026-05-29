# [![npm version](http://img.shields.io/npm/v/ngx-gooey.svg)](https://npmjs.org/package/ngx-gooey) [![StackBlitz](https://img.shields.io/badge/stackblitz-online-orange.svg)](https://stackblitz.com/edit/ngx-gooey)

<p align="center">
  <img alt="Preview" src="docs/assets/preview.gif" height="260" width="260">
</p>
<p align="center">
<h1 align="center">The gooey effect for Angular</h1> 
</p>

The 'gooey effect' has been made popular by various (amazing) blogposts over the years. This tiny component makes it easy to use within Angular applications, and has improved the implementation. It is standalone-first and ready for Angular 21.

## 📦 Installation

```bash
npm install ngx-gooey
```

## 🚀 Usage (Angular 21)

### Standalone components (recommended)

```typescript
import { Component } from '@angular/core';
import { Gooey } from 'ngx-gooey';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [Gooey],
  template: `
    <ngx-gooey intensity="medium">
      <div class="blob-container">
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="blob"></div>
      </div>
    </ngx-gooey>
  `,
  styles: [`
    .blob-container {
      display: flex;
      gap: 20px;
      padding: 50px;
    }

    .blob {
      width: 60px;
      height: 60px;
      background: #ff6b6b;
      border-radius: 50%;
    }
  `]
})
export class ExampleComponent {}
```

### NgModule-based apps

If your app still uses NgModules, import the standalone `Gooey` component in your module's `imports`:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Gooey } from 'ngx-gooey';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Gooey,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Template example

```html
<ngx-gooey
  intensity="strong"
  [composite]="true"
  className="my-gooey-effect">
  <div class="animated-elements">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</ngx-gooey>
```

## 🎛️ Component properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `intensity` | `'weak' \| 'medium' \| 'strong'` | `'medium'` | Controls the strength of the gooey effect |
| `composite` | `boolean` | `false` | Enables composite blending for enhanced effects |
| `className` | `string` | `undefined` | CSS class to apply to the wrapper element |
| `id` | `string` | `'gooey-angular'` | Unique ID for the SVG filter |
| `style` | `object` | `undefined` | Inline styles to apply to the wrapper |

## 🔄 Version compatibility

| ngx-gooey Version | Angular Version |
|-------------------|-----------------|
| 21.x.x | Angular 21 |
| 20.x.x | Angular 20 |
| 19.x.x | Angular 19 |

## 💡 Tips & best practices

- **Use SVG for best results**: While HTML elements work, SVG provides the most consistent cross-browser support.
- **Optimize performance**: The gooey effect uses CSS filters, so avoid using too many instances on one page.
- **Safari compatibility**: This implementation includes Safari-focused filter handling.

## 📚 Documentation & examples

[Visit the website](https://ngx-gooey.netlify.app/) for:
- 🎨 Interactive examples
- 📖 Complete API documentation
- 🎯 Advanced usage patterns
- 🔧 Configuration options

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Related

Inspired by [gooey-react](https://github.com/luukdv/gooey-react)
