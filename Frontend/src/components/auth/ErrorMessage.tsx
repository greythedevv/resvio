interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({
  message,
}: ErrorMessageProps) {
  if (!message) return null;

  return (
    <div className="bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg px-3 py-2">
      {message}
    </div>
  );
}