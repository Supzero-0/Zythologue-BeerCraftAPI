import { app } from "../../index";
import { breweriesModel } from "../../models/breweriesModel";
import request from "supertest";

jest.mock("../../models/breweriesModel");

describe("breweriesController", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should get all breweries", async () => {
    const mockBreweries = [
      { id_brewery: 1, name: "Brewery 1", country: "Country 1" },
    ];
    (breweriesModel.get as jest.Mock).mockResolvedValue(mockBreweries);

    const response = await request(app).get("/api/v1/breweries");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockBreweries);
  });

  it("should get a brewery by ID", async () => {
    const mockBrewery = {
      id_brewery: 1,
      name: "Brewery 1",
      country: "Country 1",
    };
    (breweriesModel.getById as jest.Mock).mockResolvedValue(mockBrewery);

    const response = await request(app).get("/api/v1/breweries/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockBrewery);
  });

  it("should create a new brewery", async () => {
    const mockBrewery = {
      id_brewery: 1,
      name: "Brewery 1",
      country: "Country 1",
    };
    (breweriesModel.post as jest.Mock).mockResolvedValue(mockBrewery);

    const newBrewery = {
      name: "Brewery 1",
      country: "Country 1",
    };

    const response = await request(app)
      .post("/api/v1/breweries")
      .send(newBrewery);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(mockBrewery);
  });

  it("should update a brewery by ID", async () => {
    const mockBrewery = {
      id_brewery: 1,
      name: "Updated Brewery",
      country: "Updated Country",
    };
    (breweriesModel.put as jest.Mock).mockResolvedValue(mockBrewery);

    const updatedBrewery = {
      name: "Updated Brewery",
      country: "Updated Country",
    };

    const response = await request(app)
      .put("/api/v1/breweries/1")
      .send(updatedBrewery);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockBrewery);
  });

  it("should delete a brewery by ID", async () => {
    (breweriesModel.delete as jest.Mock).mockResolvedValue(null);

    const response = await request(app).delete("/api/v1/breweries/1");
    expect(response.status).toBe(204);
  });
});
