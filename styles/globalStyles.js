import { StyleSheet } from "react-native";

export default StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  onboardContainer: { flex: 1 },

  bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 120,
  },

  carrot: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: "contain",
  },

  title: {
    fontSize: 38,
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 20,
  },

  btnStart: {
    backgroundColor: "#53B175",
    paddingVertical: 18,
    paddingHorizontal: 100,
    borderRadius: 20,
  },

  btnText: {
    color: "#fff",
    fontSize: 16,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    overflow: "visible", // 🔥 FIX dropdown
  },

  content: {
    marginTop: 280,
    paddingHorizontal: 10,
  },

  topImage: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 350,
    resizeMode: "cover",
  },

  signinTitle: {
    fontSize: 26,
    fontWeight: "600",
    marginTop: 10,
  },

  signinSub: {
    fontSize: 26,
    fontWeight: "600",
    marginBottom: 20,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 10,
    marginBottom: 20,
  },

  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
    resizeMode: "contain",
  },

  input: {
    flex: 1,
  },

  or: {
    textAlign: "center",
    marginVertical: 20,
    color: "#888",
    marginBottom: 30,
  },

  socialBtn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    borderRadius: 18,
    marginBottom: 15,
    justifyContent: "center",
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    resizeMode: "contain",
  },

  socialText: {
    color: "#fff",
    fontWeight: "bold",
  },

  back: {
    width: 24,
    height: 24,
    marginBottom: 20,
    resizeMode: "contain",
  },

  numberTitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 30,
  },

  nextBtn: {
    backgroundColor: "#53B175",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginBottom: 30,
  },

  nextIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  label: {
    fontSize: 14,
    color: "#888",
    marginBottom: 10,
  },

  locate: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginVertical: 30,
    resizeMode: "contain",
  },

  stitle: {
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
  },

  submitBtn: {
    backgroundColor: "#53B175",
    padding: 18,
    borderRadius: 15,
    marginTop: 30,
    alignItems: "center",
  },

  submitText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  resend: {
    color: "#53B175",
    marginTop: 20,
  },

  carrotSmall: {
    width: 40,
    height: 40,
    alignSelf: "center",
    marginBottom: 20,
    resizeMode: "contain",
  },

  dropdownWrapper: {
    position: "relative",
    zIndex: 20, // 🔥 cao hơn
  },

  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 10,
  },

  arrow: {
    fontSize: 20,
    color: "#888",
  },
  labelemail: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  labelpassword: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  dropdownList: {
  position: "absolute",
  top: 45,
  left: 0,
  right: 0,
  backgroundColor: "#fff",
  borderRadius: 12,
  paddingVertical: 5,   // 👈 tạo khoảng cách trong
  zIndex: 9999,
  elevation: 10,

  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 8,
},

  dropdownItem: {
  paddingVertical: 14,
  paddingHorizontal: 15,
  fontSize: 20,
},

  forgot: {
    textAlign: "right",
    marginVertical: 10,
    color: "#888",
  },

  errorText: {
    color: "#D62828",
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "600",
  },

  bottomText: {
    textAlign: "center",
    marginTop: 20,
  },

  policy: {
    fontSize: 12,
    color: "#888",
    marginVertical: 15,
  },
  userText: {
  position: "absolute",
  bottom: 10,
  alignSelf: "center",
  color: "#999",
  fontSize: 12,
},
loginTitle: {
  fontSize: 26,
  fontWeight: "600",
  textAlign: "left",
  marginBottom: 15,
},

passwordRow: {
  flexDirection: "row",
  alignItems: "center",
  borderBottomWidth: 1,
  borderColor: "#ccc",
  marginBottom: 20,
},

passwordInput: {
  flex: 1,
  paddingVertical: 10,
},

eyeIcon: {
  width: 20,
  height: 20,
  resizeMode: "contain",
},
signupTitle: {
  fontSize: 26,
  fontWeight: "600",
  textAlign: "left", // 👈 KHÔNG center
  marginBottom: 5,
},

signupSub: {
  fontSize: 14,
  color: "#888",
  marginBottom: 20,
},

link: {
  color: "#53B175", // 👈 xanh lá
},
});