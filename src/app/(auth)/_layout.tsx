import { useAuth } from "@/src/provider/AuthProvider";
import { Redirect, Stack } from "expo-router";
import React from "react";

function AuthLayout() {
  const { session } = useAuth();

  if (session) {
    return <Redirect href={"/"} />;
  }

  return <Stack />;
}

export default AuthLayout;
