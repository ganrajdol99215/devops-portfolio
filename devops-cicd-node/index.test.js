const request = require("supertest");
const app = require("./index");

describe("CI/CD Demo Service", () => {
  it("GET /health should return status ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
    expect(typeof res.body.uptime).toBe("number");
  });

  it("GET /metrics should return metrics text", async () => {
    const res = await request(app).get("/metrics");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("app_requests_total");
  });
});
