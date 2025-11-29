import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import AbortControllerTest from "@/components/Content/AbortControllerTest";

describe("AbortControllerTest", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the component with initial state", () => {
    render(<AbortControllerTest />);

    expect(
      screen.getByText("AbortController Test Component"),
    ).toBeInTheDocument();
    expect(screen.getByText("About AbortController")).toBeInTheDocument();
    expect(screen.getByText("Single Request Test")).toBeInTheDocument();
    expect(screen.getByText("Multiple Requests Test")).toBeInTheDocument();
    expect(
      screen.getByText("No requests yet. Start a request to see the history."),
    ).toBeInTheDocument();
  });

  it("displays URL select dropdown with test URLs", () => {
    render(<AbortControllerTest />);

    const select = screen.getByLabelText("Select URL:");
    expect(select).toBeInTheDocument();
  });

  it("starts a single request when Start Request button is clicked", async () => {
    const user = userEvent.setup();
    render(<AbortControllerTest />);

    const startButton = screen.getByRole("button", { name: /Start Request/i });
    await user.click(startButton);

    // Button should show "Requesting..." state
    await waitFor(() => {
      expect(screen.getByText("Requesting...")).toBeInTheDocument();
    });

    // Should show a pending request in history
    expect(screen.getByText(/Request #1:/)).toBeInTheDocument();
    expect(screen.getByText("PENDING")).toBeInTheDocument();
  });

  it("completes a request successfully after the delay", async () => {
    const user = userEvent.setup();
    render(<AbortControllerTest />);

    const startButton = screen.getByRole("button", { name: /Start Request/i });
    await user.click(startButton);

    // Wait for the request to complete (2 second delay in simulateFetch)
    await waitFor(
      () => {
        expect(screen.getByText("SUCCESS")).toBeInTheDocument();
      },
      { timeout: 3000 },
    );

    expect(
      screen.getByText(/Mock response for.*Data received successfully/),
    ).toBeInTheDocument();
  });

  it("cancels a request when Cancel Request button is clicked", async () => {
    const user = userEvent.setup();
    render(<AbortControllerTest />);

    const startButton = screen.getByRole("button", { name: /Start Request/i });
    await user.click(startButton);

    // Cancel the request before it completes
    const cancelButton = await screen.findByRole("button", {
      name: /Cancel Request/i,
    });
    expect(cancelButton).not.toBeDisabled();

    await user.click(cancelButton);

    await waitFor(() => {
      expect(screen.getByText("CANCELLED")).toBeInTheDocument();
    });

    expect(screen.getByText("Error: Request was aborted")).toBeInTheDocument();
  });

  it("disables Start Request button while a request is in progress", async () => {
    const user = userEvent.setup();
    render(<AbortControllerTest />);

    const startButton = screen.getByRole("button", { name: /Start Request/i });

    expect(startButton).not.toBeDisabled();

    await user.click(startButton);

    // Button should be disabled while requesting
    await waitFor(() => {
      const requestingButton = screen.getByRole("button", {
        name: /Requesting.../i,
      });
      expect(requestingButton).toBeDisabled();
    });

    // Wait for the request to complete
    await waitFor(
      () => {
        const enabledButton = screen.getByRole("button", {
          name: /Start Request/i,
        });
        expect(enabledButton).not.toBeDisabled();
      },
      { timeout: 3000 },
    );
  });

  it("disables Cancel Request button when no request is in progress", () => {
    render(<AbortControllerTest />);

    const cancelButton = screen.getByRole("button", {
      name: /Cancel Request/i,
    });
    expect(cancelButton).toBeDisabled();
  });

  it("starts multiple requests when Start Multiple Requests button is clicked", async () => {
    const user = userEvent.setup();
    render(<AbortControllerTest />);

    const multipleButton = screen.getByRole("button", {
      name: /Start Multiple Requests/i,
    });
    await user.click(multipleButton);

    // Should create multiple request entries
    await waitFor(() => {
      expect(screen.getByText(/Request #1:/)).toBeInTheDocument();
    });
  });

  it("auto-cancels multiple requests after 3 seconds", async () => {
    const user = userEvent.setup();
    render(<AbortControllerTest />);

    const multipleButton = screen.getByRole("button", {
      name: /Start Multiple Requests/i,
    });
    await user.click(multipleButton);

    // Wait for auto-cancel to trigger (3 seconds)
    // Some requests should be cancelled
    await waitFor(
      () => {
        const cancelledStatuses = screen.queryAllByText("CANCELLED");
        expect(cancelledStatuses.length).toBeGreaterThan(0);
      },
      { timeout: 4000 },
    );
  });

  it("clears all requests when Clear All Requests button is clicked", async () => {
    const user = userEvent.setup();
    render(<AbortControllerTest />);

    // Start a request first
    const startButton = screen.getByRole("button", { name: /Start Request/i });
    await user.click(startButton);

    await waitFor(() => {
      expect(screen.getByText(/Request #1:/)).toBeInTheDocument();
    });

    // Clear requests
    const clearButton = screen.getByRole("button", {
      name: /Clear All Requests/i,
    });
    await user.click(clearButton);

    expect(
      screen.getByText("No requests yet. Start a request to see the history."),
    ).toBeInTheDocument();
  });

  it("displays request duration correctly", async () => {
    const user = userEvent.setup();
    render(<AbortControllerTest />);

    const startButton = screen.getByRole("button", { name: /Start Request/i });
    await user.click(startButton);

    // Should show "In progress..." during request
    await waitFor(() => {
      expect(screen.getByText(/In progress.../)).toBeInTheDocument();
    });

    // Wait for the request to complete and check that duration is displayed
    await waitFor(
      () => {
        // Look for "Duration:" followed by a number and "s" (seconds)
        expect(screen.getByText(/Duration: \d+(\.\d+)?s/)).toBeInTheDocument();
      },
      { timeout: 3000 },
    );
  });

  it("allows changing the selected URL", async () => {
    const user = userEvent.setup();
    render(<AbortControllerTest />);

    const select = screen.getByLabelText("Select URL:");

    // Change URL
    await user.selectOptions(
      select,
      "https://jsonplaceholder.typicode.com/posts/2",
    );

    // Start request with new URL
    const startButton = screen.getByRole("button", { name: /Start Request/i });
    await user.click(startButton);

    // Verify the URL appears in the request history (not just in the dropdown)
    await waitFor(() => {
      expect(screen.getByText(/Request #1:/)).toBeInTheDocument();
      const urls = screen.getAllByText(
        "https://jsonplaceholder.typicode.com/posts/2",
      );
      // Should be at least 2: one in select dropdown, one in request history
      expect(urls.length).toBeGreaterThanOrEqual(2);
    });
  });

  it("increments request IDs correctly", async () => {
    const user = userEvent.setup();
    render(<AbortControllerTest />);

    const startButton = screen.getByRole("button", { name: /Start Request/i });

    // First request
    await user.click(startButton);
    await waitFor(() => {
      expect(screen.getByText(/Request #1:/)).toBeInTheDocument();
    });

    await waitFor(
      () => {
        expect(screen.getByText("SUCCESS")).toBeInTheDocument();
      },
      { timeout: 3000 },
    );

    // Second request
    await user.click(startButton);
    await waitFor(() => {
      expect(screen.getByText(/Request #2:/)).toBeInTheDocument();
    });

    await waitFor(
      () => {
        expect(screen.getAllByText("SUCCESS")).toHaveLength(2);
      },
      { timeout: 3000 },
    );
  });

  it("displays appropriate styling for different request statuses", async () => {
    const user = userEvent.setup();
    render(<AbortControllerTest />);

    const startButton = screen.getByRole("button", { name: /Start Request/i });
    await user.click(startButton);

    // Pending status
    await waitFor(() => {
      const pendingStatus = screen.getByText("PENDING");
      expect(pendingStatus).toBeInTheDocument();
    });

    // Cancel to get cancelled status
    const cancelButton = screen.getByRole("button", {
      name: /Cancel Request/i,
    });
    await user.click(cancelButton);

    await waitFor(() => {
      const cancelledStatus = screen.getByText("CANCELLED");
      expect(cancelledStatus).toBeInTheDocument();
    });
  });
});
