export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <div className="inline-flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-brg animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 rounded-full bg-brg animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 rounded-full bg-brg animate-bounce" />
        </div>
      </div>
    </div>
  );
}
