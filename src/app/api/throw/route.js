export async function GET() {
  // This will throw an unhandled error
  throwError();
}

function throwError() {
  throw new Error("Test exception from /api/throw");
}
