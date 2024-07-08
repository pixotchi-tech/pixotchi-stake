import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon, CheckCircledIcon } from "@radix-ui/react-icons";

interface AlertComponentProps {
  error: string | null;
  successMessage: string | null;
}

export const AlertComponent: React.FC<AlertComponentProps> = ({ error, successMessage }) => {
  if (!error && !successMessage) return null;

  return (
    <div className="mb-4">
      {error && (
        <Alert variant="destructive">
          <ExclamationTriangleIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {successMessage && (
        <Alert variant="default">
          <CheckCircledIcon className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{successMessage}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};