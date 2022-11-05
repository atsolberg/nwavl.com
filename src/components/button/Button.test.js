/**
 * @jest-environment jsdom
 */
import React from "react";
import { describe, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button.js", () => {
  it("should render a button", () => {
    render(<Button>Foo Bar</Button>);
    screen.findByRole("button", { name: /foo bar/i });
  });
});
