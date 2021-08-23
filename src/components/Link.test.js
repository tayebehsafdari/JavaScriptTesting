// Test Renderer (Snapshot Testing)

import React from "react";
import {create, act} from 'react-test-renderer';
import Link from "./Link";

test('Link changes the class when hovered', () => {
    let testRenderer;
    act(() => {
        testRenderer = create(
            <Link page="http://www.facebook.com">Facebook</Link>
        );
    });

    let tree = testRenderer.toJSON();

    expect(tree).toMatchSnapshot();

    act(() => {
        tree.props.onMouseEnter();
    });

    tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
        tree.props.onMouseLeave();
    });

    tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;

    // expect(testInstance.findByType(Link).props.children).toBe("Facebook");
    // expect(testInstance.findByProps({page: 'http://www.facebook.com'}).children).toBe("Facebook");
});