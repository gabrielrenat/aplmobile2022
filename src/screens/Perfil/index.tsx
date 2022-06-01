import React from "react";
import { Text, ImageBackground, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ButtonComp, CardSocialComp } from "../../components";
import styles from "./styles";
import { useAuth } from "../../hook/auth";

export default function Perfil() {
  const { user } = useAuth();
  return (
  <ImageBackground
  source={require("../../assets/fundo.png")}
  style={styles.container}
  >
  <Image source={{ uri: user?.profile_photo_url }} style={styles.img} />
  <Text style={styles.title}>{user?.name}</Text>
  <CardSocialComp>
  <>
  <FontAwesome5 name="facebook" style={styles.icon} />
  <Text style={styles.link}>https://facebook.com</Text>
  </>
  </CardSocialComp>
  <CardSocialComp>
  <>
  <FontAwesome5 name="instagram" style={styles.icon} />
  <Text style={styles.link}>https://instagram.com</Text>
  </>
  </CardSocialComp>
  <CardSocialComp>
  <>
  <FontAwesome5 name="linkedin" style={styles.icon} />
  <Text style={styles.link}>https://linkedin.com</Text>
  </>
  </CardSocialComp>
  <ButtonComp
  title="Alterar Senha"
  type="orange"
  onPress={() => console.log("Alterar Senha")}
  />
  <ButtonComp
  title="Sair"
  type="orange"
  onPress={() => console.log("Sair")}
  />
  </ImageBackground>
  );
 }