import { getAuth } from "@/lib/auth";
import {NextRequest} from "next/server";
import {config} from "../../../../../config";
import {toNextJsHandler} from "better-auth/next-js";

const createAuthHandler = () => {
  return toNextJsHandler(getAuth())
}


const NoOptRouterHandler = async (
  req: NextRequest,
  { params }: { params: Promise<{ all: string }> }
) => {}

const noOptRoute = {
  GET: NoOptRouterHandler,
  POST: NoOptRouterHandler,
}

export const { POST, GET } = config.enableComment ? createAuthHandler() : noOptRoute

