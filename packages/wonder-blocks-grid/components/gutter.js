// @flow
import * as React from "react";

import gridSizes from "../util/sizes.js";
import {matchesSize, gridContextTypes} from "../util/utils.js";
import FixedWidthCell from "./fixed-width-cell.js";

/**
 * Gutter is a form of [FixedWidthCell](#fixedwidthcell) whose width is set based on the size
 * of grid currently being displayed. Used for spacing out cells from each
 * other. The gutter itself doesn't hold any content, it just spaces it out.
 *
 * Gutters are inserted automatically inside of a [Row](#row) in-between Cells.
 * You may only need to use Gutters if you're manually building your own
 * sub-grid, or some-such (this should be relatively rare).
 *
 * By default (with no properties specified) it will display at all
 * grid sizes. If you specify the `small`, `medium`, or `large`
 * props then the component will only be shown at those grid sizes.
 *
 * @version 1.0
 * @since 1.0
 */
export default class Gutter extends React.Component<{
    /** Should this gutter be shown on a Small Grid? */
    small?: boolean,
    /** Should this gutter be shown on a Medium Grid? */
    medium?: boolean,
    /** Should this gutter be shown on a Large Grid? */
    large?: boolean,
}> {
    static contextTypes = gridContextTypes;
    static defaultProps = {
        small: false,
        medium: false,
        large: false,
    };

    render() {
        const {gridSize} = this.context;
        const {gutterWidth} = gridSizes[gridSize];
        const shouldDisplay = matchesSize(this.props, gridSize);

        if (!shouldDisplay) {
            return null;
        }

        return <FixedWidthCell width={gutterWidth} />;
    }
}