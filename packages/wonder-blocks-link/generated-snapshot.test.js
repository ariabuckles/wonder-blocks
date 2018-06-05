// @flow
// This file is auto-generated by gen-snapshot-tests.js
// Do not edit this file.  To make changes to these snapshot tests
// edit packages/wonder-blocks-link/docs.md and run `npm run gen-snapshot-tests`.
import React from "react";
import renderer from "react-test-renderer";
import Link from "./components/link.js";

describe("wonder-blocks-link", () => {
    it("example 1", () => {
        const example = (
            <p>
                Lorem ipsum <Link href="#nonexistent-link">Link</Link> dolor sit
                amet, consectetur <Link href="#">Visited Link</Link> adipiscing
                elit
            </p>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
