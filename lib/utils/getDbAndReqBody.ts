import dbConnection from "@/lib/database/dbConnection"

export const getDbAndReqBody = async (req?: Request | null) => {
  const db = await dbConnection()

  if (req) {
    const reqBody = await req.json()
    return { db, reqBody }
  }
  return { db }
}
