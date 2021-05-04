import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Linking,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  ImageBackground,
} from "react-native";

import { styles } from "../styles";
import cog from "../assets/cog.jpg";

export default function Home() {
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
          <View style={styles.break} />
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
          <View style={styles.footer}>
            <Text style={styles.address}>172 W 1000 S, Orem UT, 84058</Text>
            <Text style={styles.copyright}>Copyright © KLM Codes, LLC</Text>
          </View>
        </View>
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
      </ImageBackground>
    </View>
  );
}
