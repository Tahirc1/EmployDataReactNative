import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import styles from "./employeelist.style";
import { COLORS } from "../../constants";
import EmployeeListCard from "../cards/EmployeeListCard/EmployeeListCard";
import useFetch from "../../hooks/useFetch";

const EmployeeList = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch();

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((emp) => (
            <EmployeeListCard
              emp={emp}
              key={`Employee-${emp.id}`}
              handleNavigate={() => router.push(`/employee/${emp.id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default EmployeeList;
