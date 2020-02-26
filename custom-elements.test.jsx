require("@testing-library/jest-dom");
const { render } = require("@testing-library/react");
const CoreToggle = require("@nrk/core-toggle/jsx");
const React = require("react");

test("hello", () => {
  function Hello({ children }) {
    return (
      <div>
        <span>I am custom hidden content</span>
        <div>{children}</div>
      </div>
    );
  }

  const { getByText, queryByText } = render(
    <div>
      <button>Click</button>
      <CoreToggle hidden>
        <div>hidden content</div>
        <Hello>
          <div>Nested hidden content</div>
        </Hello>
      </CoreToggle>

      <div>
        <button>More click</button>
        <CoreToggle>More hidden</CoreToggle>
      </div>
    </div>
  );

  expect(true).toBe(true);

  expect(queryByText("Click")).not.toBeNull();

  expect(queryByText("I am custom hidden content")).not.toBeNull();
  expect(queryByText("I am custom hidden content")).not.toBeVisible();
  expect(queryByText("Nested hidden content")).not.toBeNull();
  expect(queryByText("Nested hidden content")).not.toBeVisible();

  // COMMENT OUT THIS TEST AND ALL GOES TO HELL
  //expect(getByText("SOME CONTENT THAT DOES NOT EXIST")).toBeNull();
});
