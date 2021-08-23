// Test Renderer

import React from "react";
import TestRenderer from 'react-test-renderer';
import Link from "./Link";

test('Link changes the class when hovered', () => {
    const testRenderer = TestRenderer.create(
        <Link page="http://www.facebook.com">Facebook</Link>
    );
    let tree = testRenderer.toJSON();

    expect(tree).toMatchSnapshot();

    tree.props.onMouseEnter();

    tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onMouseLeave();

    tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;

    // expect(testInstance.findByType(Link).props.children).toBe("Facebook");
    // expect(testInstance.findByProps({page: 'http://www.facebook.com'}).children).toBe("Facebook");
});