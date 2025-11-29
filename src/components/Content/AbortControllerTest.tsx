import {
  Button,
  Divider,
  Label,
  makeStyles,
  Select,
  Text,
  Title2,
  Title3,
  tokens,
} from "@fluentui/react-components";
import { useRef, useState } from "react";

const useStyles = makeStyles({
  root: {
    padding: tokens.spacingHorizontalXXXL,
    maxWidth: "64rem",
    margin: "0 auto",
  },
  header: {
    marginBottom: tokens.spacingVerticalXXXL,
  },
  infoPanel: {
    marginBottom: tokens.spacingVerticalXXXL,
    padding: tokens.spacingHorizontalL,
    backgroundColor: tokens.colorNeutralBackground2,
    borderRadius: tokens.borderRadiusMedium,
  },
  testSection: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: tokens.spacingVerticalL,
    marginBottom: tokens.spacingVerticalXXXL,
    "@media (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr",
    },
  },
  section: {
    padding: tokens.spacingHorizontalL,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
  },
  urlSelect: {
    width: "100%",
    marginBottom: tokens.spacingVerticalM,
  },
  buttonGroup: {
    display: "flex",
    gap: tokens.spacingHorizontalS,
  },
  requestItem: {
    padding: tokens.spacingHorizontalM,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
    marginBottom: tokens.spacingVerticalS,
  },
  requestHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: tokens.spacingVerticalS,
  },
  responsePanel: {
    marginTop: tokens.spacingVerticalXS,
    padding: tokens.spacingHorizontalS,
    borderRadius: tokens.borderRadiusSmall,
  },
  successPanel: {
    backgroundColor: tokens.colorPaletteGreenBackground1,
    border: `1px solid ${tokens.colorPaletteGreenBorder1}`,
  },
  errorPanel: {
    backgroundColor: tokens.colorPaletteRedBackground1,
    border: `1px solid ${tokens.colorPaletteRedBorder1}`,
  },
  cancelledPanel: {
    backgroundColor: tokens.colorPaletteYellowBackground1,
    border: `1px solid ${tokens.colorPaletteYellowBorder1}`,
  },
  instructions: {
    marginTop: tokens.spacingVerticalXXXL,
    padding: tokens.spacingHorizontalL,
    backgroundColor: tokens.colorBrandBackground2,
    borderRadius: tokens.borderRadiusMedium,
  },
  statusSuccess: {
    color: tokens.colorPaletteGreenForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },
  statusError: {
    color: tokens.colorPaletteRedForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },
  statusCancelled: {
    color: tokens.colorPaletteYellowForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },
  statusPending: {
    color: tokens.colorBrandForeground1,
    fontWeight: tokens.fontWeightSemibold,
  },
});

type RequestInfo = {
  id: number;
  url: string;
  status: "pending" | "success" | "error" | "cancelled";
  startTime: number;
  endTime?: number;
  response?: string;
  error?: string;
};

const AbortControllerTest: React.FC = () => {
  const [requests, setRequests] = useState<RequestInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState(
    "https://jsonplaceholder.typicode.com/posts/1",
  );
  const abortControllerRef = useRef<AbortController | null>(null);
  const requestIdCounter = useRef(0);

  const styles = useStyles();

  const testUrls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/comments/1",
    "https://jsonplaceholder.typicode.com/users/1",
  ];

  const simulateFetch = async (
    url: string,
    signal?: AbortSignal,
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        if (signal?.aborted) {
          reject(new Error("Request was aborted"));
          return;
        }

        // Simulate API response
        resolve(`Mock response for ${url} - Data received successfully`);
      }, 2000); // 2 second delay to simulate network request

      // Handle abort signal
      if (signal) {
        signal.addEventListener("abort", () => {
          clearTimeout(timeout);
          reject(new Error("Request was aborted"));
        });
      }
    });
  };

  const startRequest = async () => {
    if (isLoading) return;

    const requestId = ++requestIdCounter.current;
    const newRequest: RequestInfo = {
      id: requestId,
      url: selectedUrl,
      status: "pending",
      startTime: Date.now(),
    };

    setRequests((prev) => [...prev, newRequest]);
    setIsLoading(true);

    // Create new AbortController for this request
    abortControllerRef.current = new AbortController();

    try {
      const response = await simulateFetch(
        selectedUrl,
        abortControllerRef.current.signal,
      );

      setRequests((prev) =>
        prev.map((req) =>
          req.id === requestId
            ? { ...req, status: "success", endTime: Date.now(), response }
            : req,
        ),
      );
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      const status = errorMessage.includes("aborted") ? "cancelled" : "error";

      setRequests((prev) =>
        prev.map((req) =>
          req.id === requestId
            ? { ...req, status, endTime: Date.now(), error: errorMessage }
            : req,
        ),
      );
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const cancelRequest = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      console.log("Request cancelled");
    }
  };

  const startMultipleRequests = async () => {
    const controllers: AbortController[] = [];
    const promises = testUrls.map(async (url, index) => {
      const requestId = ++requestIdCounter.current;
      const controller = new AbortController();
      controllers.push(controller);

      const newRequest: RequestInfo = {
        id: requestId,
        url,
        status: "pending",
        startTime: Date.now(),
      };

      setRequests((prev) => [...prev, newRequest]);

      try {
        // Add delay to stagger requests
        await new Promise((resolve) => setTimeout(resolve, index * 500));
        const response = await simulateFetch(url, controller.signal);

        setRequests((prev) =>
          prev.map((req) =>
            req.id === requestId
              ? { ...req, status: "success", endTime: Date.now(), response }
              : req,
          ),
        );
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Unknown error";
        const status = errorMessage.includes("aborted") ? "cancelled" : "error";

        setRequests((prev) =>
          prev.map((req) =>
            req.id === requestId
              ? { ...req, status, endTime: Date.now(), error: errorMessage }
              : req,
          ),
        );
      }
    });

    // Store controllers for potential cancellation
    const multipleControllersRef = { current: controllers };

    // Add cancel all function
    const cancelAll = () => {
      multipleControllersRef.current.forEach((controller) =>
        controller.abort(),
      );
    };

    // For demo purposes, we'll auto-cancel after 3 seconds
    setTimeout(() => {
      cancelAll();
    }, 3000);

    await Promise.all(promises);
  };

  const clearRequests = () => {
    setRequests([]);
  };

  const getStatusStyle = (status: RequestInfo["status"]) => {
    switch (status) {
      case "success":
        return styles.statusSuccess;
      case "error":
        return styles.statusError;
      case "cancelled":
        return styles.statusCancelled;
      case "pending":
        return styles.statusPending;
      default:
        return "";
    }
  };

  const getResponsePanelStyle = (status: RequestInfo["status"]) => {
    switch (status) {
      case "success":
        return `${styles.responsePanel} ${styles.successPanel}`;
      case "error":
        return `${styles.responsePanel} ${styles.errorPanel}`;
      case "cancelled":
        return `${styles.responsePanel} ${styles.cancelledPanel}`;
      default:
        return styles.responsePanel;
    }
  };

  const getDuration = (request: RequestInfo) => {
    if (!request.endTime) return "In progress...";
    return `${(request.endTime - request.startTime) / 1000}s`;
  };

  return (
    <div className={styles.root}>
      <Title2 className={styles.header}>AbortController Test Component</Title2>

      <div className={styles.infoPanel}>
        <Title3>About AbortController</Title3>
        <Text>
          AbortController allows you to cancel fetch requests, timeouts, and
          other asynchronous operations. This component demonstrates how to use
          it to cancel network requests.
        </Text>
      </div>

      <div className={styles.testSection}>
        {/* Single Request Section */}
        <div className={styles.section}>
          <Title3>Single Request Test</Title3>

          <div className={styles.urlSelect}>
            <Label htmlFor="url-select">Select URL:</Label>
            <Select
              id="url-select"
              value={selectedUrl}
              onChange={(e, data) => setSelectedUrl(data.value)}
            >
              {testUrls.map((url) => (
                <option key={url} value={url}>
                  {url}
                </option>
              ))}
            </Select>
          </div>

          <div className={styles.buttonGroup}>
            <Button
              onClick={startRequest}
              disabled={isLoading}
              appearance="primary"
            >
              {isLoading ? "Requesting..." : "Start Request"}
            </Button>

            <Button
              onClick={cancelRequest}
              disabled={!isLoading}
              appearance="secondary"
            >
              Cancel Request
            </Button>
          </div>
        </div>

        {/* Multiple Requests Section */}
        <div className={styles.section}>
          <Title3>Multiple Requests Test</Title3>
          <Text>
            Start multiple requests that will be automatically cancelled after 3
            seconds.
          </Text>

          <Button onClick={startMultipleRequests} appearance="primary">
            Start Multiple Requests
          </Button>
        </div>
      </div>

      {/* Clear Button */}
      <div>
        <Button onClick={clearRequests} appearance="outline">
          Clear All Requests
        </Button>
      </div>

      <Divider />

      {/* Requests History */}
      <div>
        <Title3>Request History</Title3>

        {requests.length === 0 ? (
          <Text>No requests yet. Start a request to see the history.</Text>
        ) : (
          <div>
            {requests.map((request) => (
              <div key={request.id} className={styles.requestItem}>
                <div className={styles.requestHeader}>
                  <div>
                    <Text weight="semibold">Request #{request.id}:</Text>
                    <Text size={300}>{request.url}</Text>
                  </div>
                  <Text className={getStatusStyle(request.status)}>
                    {request.status.toUpperCase()}
                  </Text>
                </div>

                <div>
                  <Text size={300}>Duration: {getDuration(request)}</Text>
                  {request.response && (
                    <div className={getResponsePanelStyle(request.status)}>
                      <Text size={300}>Response: {request.response}</Text>
                    </div>
                  )}
                  {request.error && (
                    <div className={getResponsePanelStyle(request.status)}>
                      <Text size={300}>Error: {request.error}</Text>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className={styles.instructions}>
        <Text weight="semibold">Testing Instructions:</Text>
        <ul>
          <li>
            • Start a single request and try cancelling it before it completes
          </li>
          <li>
            • Start multiple requests to see how they can be controlled
            individually
          </li>
          <li>
            • Observe the different statuses: pending, success, error, cancelled
          </li>
          <li>• Check the browser console for additional logging</li>
        </ul>
      </div>
    </div>
  );
};

export default AbortControllerTest;
