import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  ImageBackground,
  Linking,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";

import cog from "./assets/cog.jpg";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [body, setBody] = useState("");

  const send = () => {
    const encodedBody = encodeURIComponent(`${body}\n\n`);
    Linking.openURL(
      `mailto:r.p.ivie@live.com?subject=Question/Proposal&body=${encodedBody}`
    );
    setModalVisible(false);
  };

  return (
    <View>
      <ImageBackground source={cog}>
        <View style={styles.main}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>KLM CODES</Text>
              <Text style={styles.subtitle}>
                Robust Software for Strong Businesses
              </Text>
              <Button
                style={styles.primary}
                onPress={() => setModalVisible(true)}
                title="GET IN TOUCH"
              />
            </View>
          </View>
          <View style={styles.break} />
          <View style={styles.break} />
          <View style={styles.values}>
            <View style={styles.valueContainer}>
              <View style={styles.valueImageContainer}>
                <Text style={styles.valueTitle}>Interactive</Text>
              </View>
              <View style={styles.valueTextContainer}>
                <Text style={styles.valueText}>
                  Processes that offer flexibility when change happens.
                </Text>
              </View>
            </View>
            <View style={styles.break} />
            <View style={styles.valueContainer}>
              <View style={styles.valueImageContainer}>
                <Text style={styles.valueTitle}>Economic</Text>
              </View>
              <View style={styles.valueTextContainer}>
                <Text style={styles.valueText}>
                  Mindsets to help you make powerful decisions.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.break} />
          <View style={styles.mission}>
            <Text style={styles.missionTitle}>Mission</Text>
            <Text style={styles.missionBody}>
              KLM Codes uses the latest advances to help your buisness stay
              strong. Whether you need a littl change or a full upgrade, we're
              with you.
            </Text>
          </View>
          <View style={styles.break} />
          <View style={styles.servicesContainer}>
            <View style={styles.services}>
              <Text style={styles.servicesTitle}>Services</Text>
              <View style={styles.servicesBody}>
                <View style={styles.servicesLeft}>
                  <Text style={styles.serviceLeft}>Development</Text>
                  <Text style={styles.serviceLeft}>Integration</Text>
                  <Text style={styles.serviceLeft}>Architecture</Text>
                </View>
                <View style={styles.servicesRight}>
                  <Text style={styles.serviceRight}>Localization</Text>
                  <Text style={styles.serviceRight}>Optimization</Text>
                  <Text style={styles.serviceRight}>Pipelines</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.break} />
          <View style={styles.break} />
          <View style={styles.footer}>
            <Text style={styles.address}>172 W 1000 S, Orem UT, 84058</Text>
            <Text style={styles.copyright}>Copyright © KLM Codes, LLC</Text>
          </View>
        </View>
      </ImageBackground>
      {modalVisible && (
        <View style={styles.modal}>
          <View style={styles.contact}>
            <TouchableOpacity
              style={styles.closeModalContainer}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeModal}>x</Text>
            </TouchableOpacity>
            <Text style={styles.contactTitle}>Get In Touch</Text>
            <TextInput
              style={styles.formField}
              multiline={true}
              numberOfLines={4}
              placeholder="Your Question/Proposal"
              onChangeText={(text) => setBody(text)}
              value={body}
            />
            <Button
              style={styles.primary}
              onPress={() => send()}
              title="SEND IT!"
            />
          </View>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100vh",
    overflow: "auto",
  },
  headerContainer: {},
  header: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    padding: "50px",
    marginTop: "0px",
    marginLeft: "auto",
    marginBottom: "0px",
    marginRight: "auto",
  },
  title: {
    paddingLeft: "50px",
    paddingRight: "50px",
    fontSize: "50px",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    paddingBottom: "40px",
    fontSize: "20px",
    textAlign: "center",
  },
  primary: {
    width: "200px",
  },
  closeModalContainer: {
    textAlign: "right",
  },
  closeModal: {},
  modal: {
    backgroundColor: "rgba( 255, 255, 255, 0.7 )",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: "0",
  },
  contact: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    width: "100vw",
    height: "100vh",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20%",
  },
  contactTitle: {
    fontSize: "30px",
    textAlign: "center",
    paddingBottom: "20px",
  },
  formField: {
    padding: "2px",
    marginBottom: "5px",
    borderWidth: "2px",
    borderColor: "rgba( 33, 150, 243, 1 )",
  },
  values: {},
  valueContainer: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  valueImageContainer: {
    backgroundColor: "rgba( 0, 0, 0, .2 )",
    paddingLeft: "5px",
    paddingRight: "5px",
    width: "50%",
    height: "120px",
    alignItems: "center",
    justifyContent: "center",
  },
  valueTitle: {
    fontSize: "30px",
    color: "rgba( 255, 255, 255, 1 )",
    textAlign: "right",
  },
  valueTextContainer: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    padding: "5px",
    width: "50%",
    height: "120px",
    alignItems: "center",
    justifyContent: "center",
  },
  valueText: {
    textAlign: "center",
    fontSize: "20px",
  },
  mission: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  missionTitle: {
    textAlign: "center",
    fontSize: "30px",
    margin: "auto",
  },
  missionBody: {
    textAlign: "justify",
    fontSize: "20px",
    maxWidth: "300px",
    margin: "auto",
  },
  break: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    height: "40px",
  },
  servicesContainer: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
    width: "100%",
  },
  services: {
    backgroundColor: "rgba( 255, 255, 255, 1 )",
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
    borderRightWidth: ".5px",
  },
  servicesRight: {
    width: "50%",
    borderLeftWidth: ".5px",
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
    backgroundColor: "rgba( 0, 0, 0, 0.3 )",
    padding: "20px",
  },
  address: {
    textAlign: "center",
    color: "rgba( 255, 255, 255, 1 )",
  },
  copyright: {
    textAlign: "center",
    color: "rgba( 255, 255, 255, 1 )",
  },
});
