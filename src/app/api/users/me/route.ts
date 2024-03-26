import { connect } from "@/dbconfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  const userId = await getDataFromToken(request);
  const user = await User.findById(userId).select("-password");
  return NextResponse.json({
    message: "User found",
    data: user,
  });
}
