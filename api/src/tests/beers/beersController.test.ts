import { app } from "../../index";
import { beersModel } from "../../models/beersModel";
import request from "supertest";

jest.mock("../../models/beersModel");

describe("beersController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should get all beers", async () => {
    const mockBeers = [{ id_beer: 1, name: "Beer 1" }];
    (beersModel.get as jest.Mock).mockResolvedValue(mockBeers);

    const response = await request(app).get("/api/v1/beers");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockBeers);
  });

  it("should get a beer by ID", async () => {
    const mockBeer = { id_beer: 1, name: "Beer 1" };
    (beersModel.getById as jest.Mock).mockResolvedValue(mockBeer);

    const response = await request(app).get("/api/v1/beers/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockBeer);
  });

  it("should create a new beer", async () => {
    const mockBeer = { id_beer: 1, name: "Beer 1" };
    (beersModel.post as jest.Mock).mockResolvedValue(mockBeer);

    const newBeer = {
      name: "Beer 1",
      description: "Description",
      abv: 5.0,
      price: 10.0,
      id_brewery: 1,
    };

    const response = await request(app).post("/api/v1/beers").send(newBeer);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(mockBeer);
  });

  it("should update a beer by ID", async () => {
    const mockBeer = { id_beer: 1, name: "Updated Beer" };
    (beersModel.put as jest.Mock).mockResolvedValue(mockBeer);

    const updatedBeer = {
      name: "Updated Beer",
      description: "Updated Description",
      abv: 6.0,
      price: 12.0,
      id_brewery: 1,
    };

    const response = await request(app)
      .put("/api/v1/beers/1")
      .send(updatedBeer);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockBeer);
  });

  it("should delete a beer by ID", async () => {
    (beersModel.delete as jest.Mock).mockResolvedValue(null);

    const response = await request(app).delete("/api/v1/beers/1");
    expect(response.status).toBe(204);
  });
});
