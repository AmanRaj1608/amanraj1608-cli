#!/usr/bin/env node

const React = require('react');
const importJsx = require('import-jsx');
const { render } = require('ink');

const menu = importJsx('./ui.jsx');

render(React.createElement(menu));
