// @flow
import * as React from "react";
import {StyleSheet} from "aphrodite";

import Color from "@khanacademy/wonder-blocks-color";
import {View, MediaLayoutWrapper} from "@khanacademy/wonder-blocks-core";
import type {MediaSize} from "@khanacademy/wonder-blocks-core";

import ModalDialog from "./modal-dialog.js";
import ModalPanel from "./modal-panel.js";
import ModalFooter from "./modal-footer.js";

type BaseProps = {|
    /** The modal's content. */
    content: React.Node,

    /** The optional footer to display beneath the contents. */
    footer?: React.Node,

    /**
     * Called when the close button is clicked.
     *
     * If you're using `ModalLauncher`, you probably shouldn't use this prop!
     * Instead, to listen for when the modal closes, add an `onClose` handler
     * to the `ModalLauncher`.  Doing so will result in a console.warn().
     */
    onClose?: () => void,
|};

type WrappedProps = {|
    ...BaseProps,

    /**
     * The size of the media layout being used. Populated by MediaLayoutWrapper.
     * @ignore
     */
    mediaSize: MediaSize,
|};

class ContentWrapper extends React.Component<WrappedProps> {
    render() {
        const {onClose, content, footer, mediaSize} = this.props;

        if (mediaSize !== "small") {
            return (
                <View style={styles.contentWrapper}>
                    <ModalPanel
                        showCloseButton
                        onClose={onClose}
                        content={content}
                        footer={footer}
                    />
                </View>
            );
        }

        return (
            <View style={styles.contentFooterWrapper}>
                <View style={styles.smallContentWrapper}>
                    <ModalPanel
                        showCloseButton
                        onClose={onClose}
                        content={content}
                        scrollOverflow={false}
                    />
                </View>
                {footer && (
                    <View style={styles.smallFooter}>
                        {!footer ||
                        (typeof footer === "object" &&
                            footer.type === ModalFooter) ? (
                            footer
                        ) : (
                            <ModalFooter>{footer}</ModalFooter>
                        )}
                    </View>
                )}
            </View>
        );
    }
}

const WrappedContentWrapper = MediaLayoutWrapper(ContentWrapper);

/**
 * A one-column modal layout.
 */
export default class OneColumnModal extends React.Component<BaseProps> {
    render() {
        return (
            <ModalDialog
                style={[
                    styles.dialog,
                    // TODO(jeresig): Replace with <Layout/>
                    //(mediaSize) => mediaSize !== "small" && styles.largeDialog,
                    styles.largeDialog,
                ]}
            >
                <WrappedContentWrapper {...this.props} />
            </ModalDialog>
        );
    }
}

const styles = StyleSheet.create({
    dialog: {
        background: Color.white,
    },

    largeDialog: {
        width: "64.65%",
        maxWidth: 662,
        maxHeight: "90%",
    },

    contentFooterWrapper: {
        flexDirection: "column",
        height: "100%",
    },

    contentWrapper: {
        width: "100%",
    },

    smallContentWrapper: {
        flexDirection: "column",
        overflow: "auto",
        height: "100%",
        width: "100%",
    },

    smallFooter: {
        minHeight: 64,
    },
});
