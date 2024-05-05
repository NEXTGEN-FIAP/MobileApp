import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import TypecontainerWidthfullPr from "../components/TypecontainerWidthfullPr";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const LoginPage = () => {
  return (
    <View style={styles.loginpage}>
      <View style={styles.loginPosition}>
        <View style={styles.loginPosition}>
          <View style={styles.loginPosition}>
            <View
              style={[
                styles.pginaEscolherRedeSocialChild,
                styles.loginPosition,
              ]}
            />
            <View
              style={[
                styles.pginaEscolherRedeSocialChild,
                styles.loginPosition,
              ]}
            />
            <View
              style={[
                styles.pginaEscolherRedeSocialChild,
                styles.loginPosition,
              ]}
            />
            <View style={styles.signIn}>
              <Text style={styles.login1}>Login</Text>
            </View>
            <View style={styles.miroodlesSticker} />
            <Text style={styles.socialrate}>SocialRate</Text>
            <View style={[styles.avatar, styles.avatarLayout]}>
              <Image
                style={[styles.wrapperIcon, styles.avatarLayout]}
                contentFit="cover"
                source={require("../assets/wrapper.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.radioButtontruedefault, styles.radioLayout]} />
        <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        <Text style={[styles.noTemUmaContainer, styles.emailTypo1]}>
          <Text style={styles.emailTypo}>{`Não tem uma conta? `}</Text>
          <Text style={styles.cadastreSe}>Cadastre-se.</Text>
        </Text>
        <TypecontainerWidthfullPr
          label="Login"
          typecontainerWidthfullPrPosition="absolute"
          typecontainerWidthfullPrBorderRadius={6}
          typecontainerWidthfullPrBackgroundColor="transparent"
          typecontainerWidthfullPrWidth={237}
          typecontainerWidthfullPrTop={264}
          typecontainerWidthfullPrLeft={9}
          typecontainerWidthfullPrElevation={8}
          typecontainerWidthfullPrHeight={32}
          labelFontFamily="Inter-SemiBold"
          labelTextAlign="left"
        />
      </View>
      <View style={[styles.radioButtontruedefault1, styles.radioLayout]} />
      <Text style={[styles.senha, styles.emailTypo]}>Senha</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginPosition: {
    width: 256,
    left: 0,
    top: 0,
    position: "absolute",
    height: 441,
  },
  avatarLayout: {
    height: 40,
    width: 40,
  },
  radioLayout: {
    justifyContent: "center",
    height: 37,
    width: 236,
    backgroundColor: Color.colorDarkturquoise_300,
    borderRadius: Border.br_7xs,
    left: 10,
    alignItems: "center",
    position: "absolute",
  },
  emailTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorDarkslateblue,
  },
  emailTypo1: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  pginaEscolherRedeSocialChild: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorGray,
  },
  login1: {
    fontSize: FontSize.size_5xl,
    lineHeight: 40,
    textAlign: "left",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  signIn: {
    top: 66,
    left: 94,
    width: 67,
    height: 104,
    alignItems: "center",
    position: "absolute",
  },
  miroodlesSticker: {
    top: 128,
    left: 65,
    width: 121,
    height: 114,
    position: "absolute",
  },
  socialrate: {
    top: 24,
    left: 3,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    width: 250,
    height: 29,
    color: Color.colorDarkturquoise_100,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  wrapperIcon: {
    display: "none",
  },
  avatar: {
    top: 13,
    left: 207,
    flexDirection: "row",
    position: "absolute",
  },
  radioButtontruedefault: {
    top: 138,
  },
  email: {
    top: 114,
    left: 12,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  cadastreSe: {
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDarkturquoise_100,
  },
  noTemUmaContainer: {
    top: 300,
    left: 10,
    fontSize: FontSize.size_xs,
  },
  radioButtontruedefault1: {
    top: 208,
  },
  senha: {
    top: 185,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
    left: 10,
  },
  loginpage: {
    flex: 1,
    width: "100%",
    height: 441,
  },
});

export default LoginPage;