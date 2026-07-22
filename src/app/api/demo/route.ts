import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, company, message } = body;

    // Basic validation
    if (!name || !email || !company) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Temporary storage/logging
    // Later this can connect to MongoDB, Supabase, CRM, etc.
    console.log("New Demo Request:", {
      name,
      email,
      company,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Demo request submitted successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Demo API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}