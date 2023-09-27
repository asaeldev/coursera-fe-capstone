import { fetchAPI } from "../../api/FakeApi";

test("Verifies that the fetchAPI returns a not empty array ", async () => {
  const times = await fetchAPI("9/27/2023");
  expect(times.length).toBeGreaterThan(0);
});

test("Verifies that the updateTimes function updates the times array ", async () => {});
