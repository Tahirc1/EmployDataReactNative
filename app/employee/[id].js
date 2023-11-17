import React from "react";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { COLORS, SIZES, images } from "../../constants";
import UseFilterFetch from "../../hooks/useFilterFetch";

const EmployeeDetails = () => {
  const params = useGlobalSearchParams();
  const { data, isLoading, error, refetch } = UseFilterFetch(params);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: "#fff",
                borderRadius: SIZES.medium,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={images.profile}
                resizeMode="stretch"
                style={{
                  width: "70%",
                  height: "70%",
                }}
              />
            </TouchableOpacity>
          ),
          headerTitle: "",
        }}
      />
      <ScrollView>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data.length === 0 ? (
          <Text>No data available</Text>
        ) : (
          <View
            style={{
              padding: SIZES.medium,
              paddingBottom: 100,
              backgroundColor: data[0]?.["backgroundColor"],
            }}
          >
            <Text
              style={{
                color:
                  data[0]?.["backgroundColor"] == "black" ? "#fff" : "black",
              }}
            >
              Name : {data[0]["name"]}
            </Text>
            <Text
              style={{
                color:
                  data[0]?.["backgroundColor"] == "black" ? "#fff" : "black",
              }}
            >
              Email :{data[0]["email"]}
            </Text>
            <Text
              style={{
                color: data[0]["backgroundColor"] == "black" ? "#fff" : "black",
              }}
            >
              Phone : {data[0]["phone"]}
            </Text>
            <Text
              style={{
                color: data[0]["backgroundColor"] == "black" ? "#fff" : "black",
              }}
            >
              Address : {data[0]["address"]}{" "}
            </Text>
            <Text
              style={{
                color: data[0]["backgroundColor"] == "black" ? "#fff" : "black",
              }}
            >
              Manager Name: {data[1]["name"]}
            </Text>
            <Text
              style={{
                color: data[0]["backgroundColor"] == "black" ? "#fff" : "black",
              }}
            >
              Sub-Ordinates
            </Text>
            {data[2].length > 1 ? (
              data[2].map((data) => {
                return <Text key={data["id"]}>{data["name"]}</Text>;
              })
            ) : (
              <Text
                style={{
                  color:
                    data[0]["backgroundColor"] == "black" ? "#fff" : "black",
                }}
              >
                {" "}
                None{" "}
              </Text>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default EmployeeDetails;
