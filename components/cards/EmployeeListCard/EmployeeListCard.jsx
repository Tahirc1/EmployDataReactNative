import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./employeelistcard.style";
import { images } from "../../../constants";

const EmployeeListCard = ({ emp, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container(emp)} onPress={handleNavigate}>
      <TouchableOpacity style={styles.imgContainer}>
        <Image
          source={images.profile}
          resizeMode="stretch"
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.empName} numberOfLines={1}>
          {emp?.name}
        </Text>

        <Text style={styles.empMail}>{emp?.email}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default EmployeeListCard;
