import { Stack } from "expo-router";
import React from "react";

function OrdersLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Orders" }} />
    </Stack>
  );
}

export default OrdersLayout;
