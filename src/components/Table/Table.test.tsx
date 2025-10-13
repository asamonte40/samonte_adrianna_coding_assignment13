import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "./Table";

test("renders table content", () => {
  render(
    <Table>
      <tbody>
        <tr>
          <td>Data</td>
        </tr>
      </tbody>
    </Table>
  );
  expect(screen.getByText("Data")).toBeVisible();
});

test("applies disabled styles", () => {
  render(
    <Table disabled>
      <tbody>
        <tr>
          <td>Disabled</td>
        </tr>
      </tbody>
    </Table>
  );
  const element = screen.getByText("Disabled").closest("table");
  expect(element).toHaveStyle("opacity: 0.6");
});
