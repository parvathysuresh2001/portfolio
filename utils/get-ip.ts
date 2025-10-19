export function getIp(headers: Headers): string {
  // Check for common headers used by reverse proxies to forward the original client IP
  const xForwardedFor = headers.get('x-forwarded-for')
  if (xForwardedFor) {
    // x-forwarded-for is a comma-separated list of IPs. The first is usually the client's IP.
    return xForwardedFor.split(',')[0].trim()
  }

  // Fall back to the remote address if no x-forwarded-for header exists
  return headers.get('remote-address') ?? 'unknown'
}