import { Adapter, css } from '@devcapsule/adapter/src/export';
import { bgColor } from 'gadjet/src/gadjet';
import { palette } from '../color'; 

class CodeBlock extends Adapter {};

CodeBlock.tagStyle(css`
    display: block;
    margin: auto;
    margin-top: 1.5rem;
    max-width: 45rem;
    line-height: 1.5;
    [el="bar-top-left"] {
        display: inline-flex;
        ${bgColor(palette.yellow)}
        border-top-left-radius: 0.4em;
        border-top-right-radius: 0.4em;
        line-height: 2;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
    & pre {
        margin-top: 0;
        font-size: 0.8rem;
        & code {
            all: unset;
            border-bottom-left-radius: 0.4em;
            border-bottom-right-radius: 0.4em;
            border-top-right-radius: 0.4em;
        }
    }
`)

export { CodeBlock };