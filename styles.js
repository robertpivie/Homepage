import { StyleSheet } from "react-native";

export const colorsHex = {
  accent: "DBFE87",
  warning: "FFE381",
  danger: "CEC288",
  secondary: "6F8695",
  primary: "1C448E",
};

export const colorsRGB = {
  accent: "DBFE87",
  warning: "FFE381",
  danger: "CEC288",
  secondary: "6F8695",
  primary: "1C448E",
};

export const styles = StyleSheet.create({
  main: {
    height: "calc(100vh - 64px)",
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
    backgroundColor: `#${colorsRGB.primary}`,
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
