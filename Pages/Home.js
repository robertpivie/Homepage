import React, { useState } from "react";
import {
  Linking,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import LottieView from "lottie-react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckDouble, faComments } from "@fortawesome/free-solid-svg-icons";
import robotArm from "../assets/robot-arm-2.json.json";
import cog from "../assets/cog.jpg";

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [body, setBody] = useState("");
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    if (!window) {
      return;
    }
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);
  });

  const isMediumWidth = dimensions.width > 600;

  const send = () => {
    const encodedBody = encodeURIComponent(`${body}\n\n`);
    Linking.openURL(
      `mailto:r.p.ivie@live.com?subject=Question/Proposal&body=${encodedBody}`
    );
    setModalVisible(false);
  };

  const { colors } = useTheme();

  const styles = StyleSheet.create({
    main: {
      height: "calc(100vh - 110px)",
      overflow: "auto",
    },
    headerContainer: {},
    header: {
      backgroundColor: colors.background,
      padding: "50px",
      marginTop: "0px",
      marginLeft: "auto",
      marginBottom: "0px",
      marginRight: "auto",
    },
    bar: {
      width: "100%",
      height: "4px",
      backgroundColor: colors.border,
    },
    title: {
      padding: isMediumWidth ? "0" : "0 50px",
      fontSize: "50px",
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: "'Times New Roman', serif",
    },
    subtitle: {
      paddingBottom: "40px",
      fontSize: "20px",
      textAlign: "center",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      gap: "4px",
    },
    primaryButton: {
      textAlign: "center",
      padding: "15px",
      minWidth: "200px",
      fontSize: "20px",
      fontWeight: "bold",
      color: colors.background,
      backgroundColor: colors.primary,
    },
    secondaryButton: {
      textAlign: "center",
      padding: "15px",
      minWidth: "200px",
      fontSize: "20px",
      fontWeight: "bold",
      color: colors.background,
      backgroundColor: colors.border,
    },
    modal: {
      width: "100vw",
      height: "100vh",
      position: "fixed",
      top: "0",
    },
    contact: {
      backgroundColor: colors.background,
      width: "100vw",
      height: "100vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "20%",
    },
    formField: {
      padding: "2px",
      marginBottom: "5px",
      borderWidth: "2px",
      fontSize: "20px",
      borderColor: colors.border,
    },
    values: {},
    valueContainer: {
      display: "flex",
      flexDirection: "row",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    valueImageContainer: {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      paddingLeft: "5px",
      paddingRight: "5px",
      width: "50%",
      height: "160px",
      alignItems: "center",
      justifyContent: "center",
    },
    valueTitle: {
      fontSize: "30px",
      textAlign: "right",
    },
    valueTextContainer: {
      backgroundColor: colors.background,
      padding: "5px",
      width: "50%",
      height: "160px",
      alignItems: "center",
      justifyContent: "center",
    },
    valueText: {
      textAlign: "center",
      fontSize: "20px",
    },
    missionContainer: {
      width: "100%",
      backgroundColor: colors.primary,
    },
    mission: {
      paddingTop: "20px",
      paddingBottom: "20px",
      margin: "auto",
      maxWidth: "300px",
    },
    missionTitle: {
      textAlign: "center",
      fontSize: "30px",
      color: colors.background,
    },
    missionBody: {
      textAlign: "justify",
      fontSize: "20px",
      color: colors.background,
    },
    break: {
      backgroundOpacity: "0",
      height: "40px",
    },
    servicesContainer: {
      width: isMediumWidth ? "50%" : "100%",
      backgroundColor: colors.background,
    },
    services: {
      backgroundColor: colors.background,
      paddingTop: "20px",
      paddingBottom: "20px",
      width: "300px",
      margin: "auto",
    },
    servicesTitle: {
      fontSize: "30px",
      textAlign: "center",
      paddingBottom: "10px",
    },
    servicesBody: {
      display: "flex",
      flexDirection: "row",
    },
    servicesLeft: {
      width: "50%",
      borderRightWidth: ".25px",
    },
    servicesRight: {
      width: "50%",
      borderLeftWidth: ".25px",
    },
    serviceLeft: {
      textAlign: "center",
      paddingRight: "5px",
      fontSize: "20px",
    },
    serviceRight: {
      textAlign: "center",
      paddingLeft: "5px",
      fontSize: "20px",
    },
    footer: {
      position: "sticky",
      bottom: "0",
      width: "100%",
      backgroundColor: colors.primary,
      padding: "5px",
      height: "46px",
    },
    address: {
      textAlign: "center",
      color: "rgba( 255, 255, 255, 1 )",
    },
    copyright: {
      textAlign: "center",
      color: "rgba( 255, 255, 255, 1 )",
    },
    stackableContainer: {
      display: "flex",
      flexDirection: isMediumWidth ? "row" : "column",
    },
    animationContainer: {
      width: isMediumWidth ? "50%" : "100%",
      display: "flex",
      justifyContent: "center",
      backgroundColor: colors.background,
    },
    animation: {
      width: "200px",
      margin: "auto",
    },
  });
  return (
    <View>
      <ImageBackground source={cog}>
        <View style={styles.main}>
          <View style={styles.break} />
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <View style={styles.bar}></View>
              <Text style={styles.title}>KLM CODES</Text>
              <View style={styles.bar}></View>
              <Text style={styles.subtitle}>
                Robust Software for Strong Businesses
              </Text>
              <View
                style={{ ...styles.buttonContainer, justifyContent: "center" }}
              >
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Text style={styles.primaryButton}>GET IN TOUCH!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.break} />
          <View style={styles.break} />
          <View style={styles.values}>
            <View style={styles.bar}></View>
            <View style={styles.valueContainer}>
              <View style={styles.valueImageContainer}>
                <FontAwesomeIcon color={"white"} size={64} icon={faComments} />
              </View>
              <View style={styles.valueTextContainer}>
                <Text style={styles.valueTitle}>Interactive</Text>
                <Text style={styles.valueText}>
                  Processes that offer flexibility when change happens.
                </Text>
              </View>
            </View>
            <View style={styles.bar}></View>
            <View style={styles.valueContainer}>
              <View style={styles.valueImageContainer}>
                <FontAwesomeIcon
                  color={"white"}
                  size={64}
                  icon={faCheckDouble}
                />
              </View>
              <View style={styles.valueTextContainer}>
                <Text style={styles.valueTitle}>Economic</Text>
                <Text style={styles.valueText}>
                  Mindsets to help you make powerful decisions.
                </Text>
              </View>
            </View>
            <View style={styles.bar}></View>
          </View>
          <View style={styles.break} />
          <View style={styles.stackableContainer}>
            <View style={styles.animationContainer}>
              <LottieView
                style={styles.animation}
                source={robotArm}
                autoPlay
                loop
              />
            </View>
            <View style={styles.servicesContainer}>
              <View style={styles.services}>
                <Text style={styles.servicesTitle}>Services</Text>
                <View style={styles.servicesBody}>
                  <View style={styles.servicesLeft}>
                    <Text style={styles.serviceLeft}>Development</Text>
                    <Text style={styles.serviceLeft}>Integration</Text>
                    <Text style={styles.serviceLeft}>Architecture</Text>
                    <View style={styles.bar}></View>
                    <Text style={styles.serviceLeft}>Strategy</Text>
                    <Text style={styles.serviceLeft}>Finance</Text>
                    <Text style={styles.serviceLeft}>Teamwork</Text>
                  </View>
                  <View style={styles.servicesRight}>
                    <Text style={styles.serviceRight}>Localization</Text>
                    <Text style={styles.serviceRight}>Optimization</Text>
                    <Text style={styles.serviceRight}>Deployment</Text>
                    <View style={styles.bar}></View>
                    <Text style={styles.serviceRight}>Planning</Text>
                    <Text style={styles.serviceRight}>Experience</Text>
                    <Text style={styles.serviceRight}>Enterprise</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.missionContainer}>
            <View style={styles.mission}>
              <Text style={styles.missionTitle}>Mission</Text>
              <Text style={styles.missionBody}>
                KLM Codes uses the latest advances to help your buisness stay
                strong. Whether you need a little change or a full upgrade,
                we're with you.
              </Text>
            </View>
          </View>
        </View>
        {modalVisible && (
          <View style={styles.modal}>
            <View style={styles.contact}>
              <TextInput
                style={styles.formField}
                multiline={true}
                numberOfLines={4}
                placeholder="Your Question/Proposal"
                onChangeText={(text) => setBody(text)}
                value={body}
              />
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={styles.secondaryButton}>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => send()}>
                  <Text style={styles.primaryButton}>SEND IT!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        <View style={styles.footer}>
          <Text style={styles.address}>172 W 1000 S, Orem UT, 84058</Text>
          <Text style={styles.copyright}>Copyright © KLM Codes, LLC</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
