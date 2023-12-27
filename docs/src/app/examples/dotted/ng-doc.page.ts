import { NgDocPage } from '@ng-doc/core';
import ExamplesCategory from '../ng-doc.category';
import { DottedComponent } from './dotted.component';

const DottedPage: NgDocPage = {
  title: `Dotted loader`,
  mdFile: './index.md',
  category: ExamplesCategory,
  order: 1,
  demos: { DottedComponent },
};

export default DottedPage;
