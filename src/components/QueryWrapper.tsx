interface ErrorStateProps {
  message?: string
}

const ErrorState = ({
  message = "Something went wrong",
}: ErrorStateProps) => {
  return (
    <div className="py-20 text-center">
      <h2 className="text-xl font-semibold text-red-500">
        {message}
      </h2>
    </div>
  )
}

const QueryWrapper = ({
  isLoading,
  error,
  children,
}: {
  isLoading: boolean;
  error: Error | null;
  children: React.ReactNode;
}) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-black border-t-transparent" />
      </div>
    )
  }

  if (error) {
    return <ErrorState message={error.message} />
  }
  return children
}

export default QueryWrapper
