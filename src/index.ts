import BreakpointContainer, {
	AppBreakpoint,
} from './components/BreakpointContainer';
import BrowserContainer from './components/BrowserContainer';
import {
	withBreakpointContainer,
	withBrowserContainer,
} from './components/HOCs';
import Breakpoint from './components/Breakpoint';
import { bpc } from './data/css-in-js';
import { BREAKPOINTS, getBpUpperLimit, resolveBp } from './data/breakpoints';

export {
	// ---------------------
	// Constants
	BREAKPOINTS,
	// ---------------------
	// Components
	BreakpointContainer,
	BrowserContainer,
	Breakpoint,
	// ---------------------
	// HOCs
	withBreakpointContainer,
	withBrowserContainer,
	// ---------------------
	// Functions
	getBpUpperLimit,
	resolveBp,
	// ---------------------
	// Context
	AppBreakpoint,
	// ---------------------
	// CSS-in-js
	// bp,
	bpc,
};
