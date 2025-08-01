export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const a = searchParams.get('x');
  const b = searchParams.get('y');

  const c = searchParams.get('c');
  // new commit
  if (c) {
    throw new Error("This is a new error for c")
    return;
  }

  if (!a || !b) {
    throw new Error("Missing query parameters 'x' and 'y'");
    return new Response(JSON.stringify({ error: "Missing query parameters" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  if (isNaN(a) || isNaN(b)) {
    throw new Error("Query parameters must be numbers");
    return new Response(JSON.stringify({ error: "Query parameters must be numbers" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  if (a == b) {
    throw new Error("This is a new error");
    return new Response(JSON.stringify({ error: "a and b are equal" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  const result = divide(Number(a), Number(b));
  return new Response(JSON.stringify({ result }), {
    headers: { "Content-Type": "application/json" }
  });
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  // error if a is less than b
  if (a < b)
    throw new Error("a must be greater than or equal to b");

  return a / b;
}
