import { Stack } from "expo-router";
import React from "react";

function OrdersLayout() {
  return (
    <Stack>
      <Stack.Screen name="list" options={{ headerShown: false }} />
    </Stack>
  );
}

export default OrdersLayout;
