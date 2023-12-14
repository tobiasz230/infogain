import TransactionsTable from "./TransactionsTable";
import { render, screen } from "@testing-library/react";

const fakeTransactions = [
  {
    transactionId: "1",
    price: 120,
    rewardPoints: 90,
    createdDate: "10.10.2023",
  },
  {
    transactionId: "2",
    price: 60,
    rewardPoints: 10,
    createdDate: "10.11.2023",
  },
];
const fakeData = {
  transactions: fakeTransactions,
  month: "October",
  totalPoints: 100,
  totalSum: 180,
  currency: "$",
};
describe("TransactionsTable", () => {
  it("should display transactions items", () => {
    const { container } = render(<TransactionsTable {...fakeData} />);
    // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
    const items = container.querySelectorAll("tbody tr");
    expect(items.length).toBe(2);
  });
  it("should display month name in header", () => {
    render(<TransactionsTable {...fakeData} />);
    const el = screen.getByText(/October/i);
    expect(el).toBeInTheDocument();
  });

  it("should display price currency", () => {
    render(<TransactionsTable {...fakeData} />);
    const el = screen.getByText(/Price/i);
    expect(el.innerHTML).toContain("$");
  });

  it("should display sum of prices", () => {
    const { container } = render(<TransactionsTable {...fakeData} />);
    // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
    const el = container.querySelector("tfoot td > strong");
    expect(el.innerHTML).toBe("180");
  });

  it("should display sum of reward points", () => {
    const { container } = render(<TransactionsTable {...fakeData} />);
    // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
    const el = container.querySelectorAll("tfoot td > strong")[1];
    expect(el.innerHTML).toBe("100");
  });

  it("should display transaction id and date", () => {
    const { container } = render(<TransactionsTable {...fakeData} />);
    // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
    const el = container.querySelector("tbody tr");
    // eslint-disable-next-line testing-library/no-node-access
    const transactionId = el.querySelector("strong");
    // eslint-disable-next-line testing-library/no-node-access
    const date = el.querySelector("small");
    expect(transactionId.innerHTML).toBe("1");
    expect(date.innerHTML).toBe("10.10.2023");
  });

  it("should display transaction price", () => {
    const { container } = render(<TransactionsTable {...fakeData} />);
    // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
    const el = container.querySelector("tbody tr");
    // eslint-disable-next-line testing-library/no-node-access
    const priceCell = el.querySelectorAll("td")[1];
    expect(priceCell.innerHTML).toBe("120");
  });

  it("should display transaction reward points", () => {
    const { container } = render(<TransactionsTable {...fakeData} />);
    // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
    const el = container.querySelector("tbody tr");
    // eslint-disable-next-line testing-library/no-node-access
    const priceCell = el.querySelectorAll("td")[2];
    expect(priceCell.innerHTML).toBe("90");
  });
});
