import { NextComment } from "@fuma-comment/server/next";
import { createDrizzleAdapter } from "@fuma-comment/server/adapters/drizzle";
import { db } from "@/lib/db";
import { comments, rates, roles, user } from "@/lib/db/schema";
import { createBetterAuthAdapter } from "@fuma-comment/server/adapters/better-auth";
import { getAuth } from "@/lib/auth";
import {config} from "../../config";
import {NextRequest } from "next/server";

const NoOptRouterHandler = async (
  req: NextRequest,
  { params }: { params: Promise<{ comment: string }> }
) => {}

const noOptRoute = {
  GET: NoOptRouterHandler,
  POST: NoOptRouterHandler,
  PATCH: NoOptRouterHandler,
  DELETE: NoOptRouterHandler,
}

const createCommentRoute = () => {
  const auth = createBetterAuthAdapter(getAuth());
  const storage = createDrizzleAdapter({
    db,
    schemas: { user, comments, rates, roles },
    auth: 'better-auth',
  });

  return NextComment({
    auth: auth,
    storage,
  })
  // return noOptRoute
}

export const commentRoute = config.enableComment ? createCommentRoute() : noOptRoute