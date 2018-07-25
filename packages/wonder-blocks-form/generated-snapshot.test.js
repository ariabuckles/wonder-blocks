// This file is auto-generated by gen-snapshot-tests.js
// Do not edit this file.  To make changes to these snapshot tests:
//   1. edit the markdown documentation files in the package,
//        packages/wonder-blocks-form
//   2. Run `yarn run gen-snapshot-tests`.
import React from "react";
import renderer from "react-test-renderer";

// Mock react-dom as jest doesn't like findDOMNode.
jest.mock("react-dom");
import Checkbox from "./components/checkbox.js";
import Radio from "./components/radio.js";
import CheckboxCore from "./components/checkbox-core.js";
import RadioCore from "./components/radio-core.js";

describe("wonder-blocks-form", () => {
    it("example 1", () => {
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
            marginRight: {
                marginRight: 16,
            },
        });

        const handleChanged = (checked) =>
            console.log(
                `clicked on checkbox with checked=${checked.toString()}`,
            );

        const example = (
            <View style={[styles.row]}>
                <Checkbox
                    error={false}
                    checked={false}
                    style={[styles.marginRight]}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Checkbox
                    error={false}
                    checked={true}
                    style={[styles.marginRight]}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Checkbox
                    error={true}
                    checked={false}
                    style={[styles.marginRight]}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Checkbox
                    error={true}
                    checked={true}
                    style={[styles.marginRight]}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Checkbox
                    disabled={true}
                    checked={false}
                    style={[styles.marginRight]}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Checkbox
                    disabled={true}
                    checked={true}
                    style={[styles.marginRight]}
                    onChange={(checked) => handleChanged(checked)}
                />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 2", () => {
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
            marginRight: {
                marginRight: 16,
            },
        });

        const handleChanged = (checked) =>
            console.log(
                `clicked on checkbox with checked=${checked.toString()}`,
            );
        const groupName = "group";

        const example = (
            <View style={[styles.row]}>
                <Radio
                    error={false}
                    checked={false}
                    style={[styles.marginRight]}
                    groupName={groupName}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Radio
                    error={false}
                    checked={true}
                    style={[styles.marginRight]}
                    groupName={groupName}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Radio
                    error={true}
                    checked={false}
                    style={[styles.marginRight]}
                    groupName={groupName}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Radio
                    error={true}
                    checked={true}
                    style={[styles.marginRight]}
                    groupName={groupName}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Radio
                    disabled={true}
                    checked={false}
                    style={[styles.marginRight]}
                    groupName={groupName}
                    onChange={(checked) => handleChanged(checked)}
                />
                <Radio
                    disabled={true}
                    checked={true}
                    style={[styles.marginRight]}
                    groupName={groupName}
                    onChange={(checked) => handleChanged(checked)}
                />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
});