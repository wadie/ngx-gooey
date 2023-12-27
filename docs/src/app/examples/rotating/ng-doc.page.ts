import { NgDocPage } from '@ng-doc/core';
import ExamplesCategory from '../ng-doc.category';
import { RotatingComponent } from './rotating.component';

const RotatingPage: NgDocPage = {
  title: `Rotating loader`,
  mdFile: './index.md',
  category: ExamplesCategory,
  order: 2,
  demos: { RotatingComponent },
};

export default RotatingPage;
