import { NgDocPage } from '@ng-doc/core';
import { RotatingComponent } from 'src/app/examples/rotating/rotating.component';
import Home from '../ng-doc.category';

const InstallationPage: NgDocPage = {
  title: `Installation`,
  mdFile: './index.md',
  category: Home,
  demos: { RotatingComponent },
};

export default InstallationPage;
