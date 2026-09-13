/**
 * Standalone 404 view. Not wired into a router by default since this is a
 * single-page portfolio — if you add react-router or similar for future
 * pages (e.g. individual project detail pages), render this as the
 * catch-all route.
 */
export function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-sm text-muted">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <a
        href="/"
        className="mt-4 inline-flex items-center justify-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg hover:bg-accent-strong"
      >
        Back to home
      </a>
    </main>
  );
}
