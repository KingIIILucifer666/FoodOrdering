import { Stack } from "expo-router";
import OrderListItem from "@/src/components/OrderListItem";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { useMynOrderList } from "@/src/api/orders";

export default function OrdersScreen() {
  const { data: orders, error, isLoading } = useMynOrderList();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch products</Text>;
  }

  return (
    <>
      <Stack.Screen options={{ title: "Orders" }} />
      <FlatList
        data={orders}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        renderItem={({ item }) => <OrderListItem order={item} />}
      />
    </>
  );
}
