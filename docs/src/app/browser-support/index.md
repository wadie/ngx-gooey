# {{ NgDocPage.title }}

This package is not supported in Internet Explorer. If you experience problems in other browsers, make sure you're using an SVG instead of regular HTML elements inside the component.

iOS has a few bugs regarding SVG filters. If you're having problems on iOS, you can apply the following changes:

    👉 Use an SVG instead of regular HTML elements
    👉 Put elements inside the SVG in a group
    👉 Make sure there is enough extra space on all sides inside the SVG
    👉 Animate all elements (instead of just a selection) to reduce artifacts
