import { defineFlatConfig } from 'eslint-define-config';
import markdownlintConfig from './configs/markdownlint.js';
import mdxConfig from './configs/mdx.js';

export default defineFlatConfig([...mdxConfig, markdownlintConfig]);
