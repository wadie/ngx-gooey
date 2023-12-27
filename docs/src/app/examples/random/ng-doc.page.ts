import { NgDocPage } from '@ng-doc/core';
import ExamplesCategory from '../ng-doc.category';
import { RandomComponent } from './random.component';

const RandomPage: NgDocPage = {
  title: `Random blob`,
  mdFile: './index.md',
  category: ExamplesCategory,
  order: 3,
  demos: { RandomComponent },
};

export default RandomPage;
