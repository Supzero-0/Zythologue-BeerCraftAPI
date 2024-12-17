import { breweriesModel } from "../../models/breweriesModel";
import { pool } from "../../config/db";

jest.mock("../../config/db");

describe("breweriesModel", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return all breweries", async () => {
    const mockBreweries = [
      { id_brewery: 1, name: "Brewery 1", country: "Country 1" },
    ];
    (pool.query as jest.Mock).mockResolvedValue({ rows: mockBreweries });

    const result = await breweriesModel.get();
    expect(result).toEqual(mockBreweries);
    expect(pool.query).toHaveBeenCalledWith("SELECT * FROM breweries");
  });

  it("should return a brewery by ID", async () => {
    const mockBrewery = {
      id_brewery: 1,
      name: "Brewery 1",
      country: "Country 1",
    };
    (pool.query as jest.Mock).mockResolvedValue({ rows: [mockBrewery] });

    const result = await breweriesModel.getById(1);
    expect(result).toEqual(mockBrewery);
    expect(pool.query).toHaveBeenCalledWith(
      "SELECT * FROM breweries WHERE id_brewery = $1",
      [1]
    );
  });

  it("should create a new brewery", async () => {
    const mockBrewery = {
      id_brewery: 1,
      name: "New Brewery",
      country: "New Country",
    };
    (pool.query as jest.Mock).mockResolvedValue({ rows: [mockBrewery] });

    const result = await breweriesModel.post("New Brewery", "New Country");
    expect(result).toEqual(mockBrewery);
    expect(pool.query).toHaveBeenCalledWith(
      "INSERT INTO breweries (name, country) VALUES ($1, $2) RETURNING *",
      ["New Brewery", "New Country"]
    );
  });

  it("should update a brewery by ID", async () => {
    const mockBrewery = {
      id_brewery: 1,
      name: "Updated Brewery",
      country: "Updated Country",
    };
    (pool.query as jest.Mock).mockResolvedValue({ rows: [mockBrewery] });

    const result = await breweriesModel.put(
      1,
      "Updated Brewery",
      "Updated Country"
    );
    expect(result).toEqual(mockBrewery);
    expect(pool.query).toHaveBeenCalledWith(
      "UPDATE breweries SET name = $1, country = $2 WHERE id_brewery = $3 RETURNING *",
      ["Updated Brewery", "Updated Country", 1]
    );
  });

  it("should delete a brewery by ID", async () => {
    (pool.query as jest.Mock).mockResolvedValue({});

    await breweriesModel.delete(1);
    expect(pool.query).toHaveBeenCalledWith(
      "DELETE FROM breweries WHERE id_brewery = $1",
      [1]
    );
  });
});
