import path from "path";
import { promises as fs } from "fs";

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Find the absolute path of the JSON directory
  const jsonDirectory = path.join(process.cwd(),"src","pages", "json");
  // Read the JSON data file data.json
  const fileContents = await fs.readFile(
    path.join(jsonDirectory, "Team2023.json"),
    "utf8",
  );
  // Parse the JSON data into a JavaScript object
  const jsonData = JSON.parse(fileContents);
  // Get the page number from the query parameter, default to 1 if not provided
  const page = parseInt(req.query.page?.toString() ?? '') || 1;
  // Set the number of items per page
  const itemsPerPage = 12;
  // Calculate the start and end indices of the items to return
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Get the subset of items to return
  const pageData = jsonData.slice(startIndex, endIndex);
  // Return the paginated data in JSON format
  res.status(200).json(pageData);
  // if the object is empty return 404 error
  if (!pageData) {
    res.status(404).json({ message: `Not found` });
  }
}
