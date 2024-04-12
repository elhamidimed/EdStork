import "dotenv/config";
import type { Config } from "drizzle-kit";

// Assuming getXataClient or a similar function is properly configured
// to return an object with a `sql` property containing your database connection details.
import { getXataClient } from "@/xata";

const xata = getXataClient();

const config: Config = {
  schema: "./db/schema.ts", // Path to your schema file
  out: "./drizzle", // Output directory for generated code
  driver: "pg", // Use the PostgreSQL driver
  dbCredentials: {
    // Use the connection string directly from your environment variables or Xata client
    connectionString: process.env.XATA_DATABASE_URL!,
  },
};

export default config;
