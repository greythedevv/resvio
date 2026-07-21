interface ErrorAlertProps {
  message: string;
}

export default function ErrorAlert({
  message,
}: ErrorAlertProps) {
  return (
    <div className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-3 py-2 mb-4">
      {message}
    </div>
  );
}