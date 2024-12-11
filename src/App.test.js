import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchPage from "./BankAccountManagement/pages/SearchCustomerPage";
import axios from "axios";

// Mock axios
jest.mock("axios");

describe("SearchCustomerPage", () => {
    test("renders the search form", () => {
        render(<SearchPage />);
        expect(screen.getByText(/search customer and accounts/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/enter customer id/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
    });

    test("displays error message when customer is not found", async () => {
        axios.get.mockRejectedValueOnce(new Error("Customer not found"));
        render(<SearchPage />);

        // Simulate user input and submit
        fireEvent.change(screen.getByPlaceholderText(/enter customer id/i), {
            target: { value: "123" },
        });
        fireEvent.click(screen.getByRole("button", { name: /search/i }));

        // Wait for error message to appear
        await waitFor(() => {
            expect(screen.getByText(/customer not found or error fetching accounts/i)).toBeInTheDocument();
        });
    });

    test("displays customer and account details after successful search", async () => {
        // Mock customer data
        axios.get.mockImplementation((url) => {
            if (url.includes("/customers")) {
                return Promise.resolve({
                    data: {
                        name: "John Doe",
                        customerType: "Regular",
                        address: {
                            streetNumber: "123",
                            city: "Test City",
                            province: "Test Province",
                            postalCode: "12345",
                        },
                    },
                });
            }
            if (url.includes("/accounts")) {
                return Promise.resolve({
                    data: [
                        {
                            accountId: 1,
                            balance: 1000,
                            interestRate: 1.5,
                            accountType: "Savings",
                        },
                    ],
                });
            }
        });

        render(<SearchPage />);

        // Simulate user input and submit
        fireEvent.change(screen.getByPlaceholderText(/enter customer id/i), {
            target: { value: "123" },
        });
        fireEvent.click(screen.getByRole("button", { name: /search/i }));

        // Wait for results to load
        await waitFor(() => {
            // Check customer details
            expect(screen.getByText(/john doe/i)).toBeInTheDocument();
            expect(screen.getByText(/regular/i)).toBeInTheDocument();
            expect(screen.getByText(/123, test city, test province 12345/i)).toBeInTheDocument();

            // Check account details
            expect(screen.getByText(/account id/i)).toBeInTheDocument();
            expect(screen.getByText(/1/i)).toBeInTheDocument();
            expect(screen.getByText(/1000/i)).toBeInTheDocument();
            expect(screen.getByText(/1.5/i)).toBeInTheDocument();
            expect(screen.getByText(/savings/i)).toBeInTheDocument();
        });
    });
});
