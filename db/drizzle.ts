import { getXataClient } from "@/xata";
import { drizzle } from "drizzle-orm/xata-http";
import * as schema from "./schema";

const xata = getXataClient();

//const db = drizzle(sql, { schema });
const db = drizzle(xata, { schema });

export default db;
